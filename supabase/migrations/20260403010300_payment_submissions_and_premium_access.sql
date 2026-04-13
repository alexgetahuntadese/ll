create table if not exists public.payment_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  amount numeric(10, 2) not null check (amount > 0),
  bank_name text not null,
  account_number text not null,
  payment_method text not null check (payment_method in ('cbe', 'telebirr')),
  transaction_ref text not null,
  receipt_path text,
  receipt_content_type text,
  receipt_size_bytes integer,
  status text not null default 'pending' check (status in ('pending', 'verified', 'rejected')),
  reviewer_notes text,
  submitted_at timestamptz not null default now(),
  verified_at timestamptz,
  verified_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists payment_submissions_user_id_submitted_at_idx
  on public.payment_submissions (user_id, submitted_at desc);

create index if not exists payment_submissions_status_submitted_at_idx
  on public.payment_submissions (status, submitted_at desc);

drop trigger if exists payment_submissions_set_updated_at on public.payment_submissions;
create trigger payment_submissions_set_updated_at
before update on public.payment_submissions
for each row
execute function public.set_updated_at();

alter table public.payment_submissions enable row level security;

drop policy if exists "payment_submissions_select_own" on public.payment_submissions;
create policy "payment_submissions_select_own"
on public.payment_submissions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "payment_submissions_insert_own" on public.payment_submissions;
create policy "payment_submissions_insert_own"
on public.payment_submissions
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "payment_submissions_select_admin_all" on public.payment_submissions;
create policy "payment_submissions_select_admin_all"
on public.payment_submissions
for select
to authenticated
using (public.is_admin_user());

drop policy if exists "payment_submissions_update_admin_all" on public.payment_submissions;
create policy "payment_submissions_update_admin_all"
on public.payment_submissions
for update
to authenticated
using (public.is_admin_user())
with check (public.is_admin_user());

create or replace function public.create_payment_submission(
  p_amount numeric,
  p_bank_name text,
  p_account_number text,
  p_payment_method text,
  p_transaction_ref text,
  p_receipt_path text default null,
  p_receipt_content_type text default null,
  p_receipt_size_bytes integer default null
)
returns public.payment_submissions
language plpgsql
security definer
set search_path = public
as $$
declare
  v_submission public.payment_submissions;
  v_profile public.users;
  v_preferences jsonb;
  v_current_premium boolean := false;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  insert into public.payment_submissions (
    user_id,
    amount,
    bank_name,
    account_number,
    payment_method,
    transaction_ref,
    receipt_path,
    receipt_content_type,
    receipt_size_bytes,
    status
  )
  values (
    auth.uid(),
    p_amount,
    btrim(p_bank_name),
    btrim(p_account_number),
    p_payment_method,
    btrim(p_transaction_ref),
    p_receipt_path,
    p_receipt_content_type,
    p_receipt_size_bytes,
    'pending'
  )
  returning * into v_submission;

  select *
  into v_profile
  from public.users
  where auth_id = auth.uid()
  for update;

  if found then
    v_current_premium := lower(coalesce(coalesce(v_profile.preferences, '{}'::jsonb)->>'premium', 'false')) = 'true';

    if not v_current_premium then
      v_preferences := coalesce(v_profile.preferences, '{}'::jsonb)
        || jsonb_build_object(
          'premium', false,
          'payment_status', 'pending',
          'payment_submission_id', v_submission.id
        );
      v_preferences := v_preferences - 'paid_at' - 'paid_until';

      update public.users
      set
        preferences = v_preferences,
        updated_at = now()
      where id = v_profile.id;
    end if;
  end if;

  return v_submission;
end;
$$;

revoke all on function public.create_payment_submission(numeric, text, text, text, text, text, text, integer) from public;
grant execute on function public.create_payment_submission(numeric, text, text, text, text, text, text, integer) to authenticated;

create or replace function public.review_payment_submission(
  p_submission_id uuid,
  p_status text,
  p_reviewer_notes text default null
)
returns public.payment_submissions
language plpgsql
security definer
set search_path = public
as $$
declare
  v_submission public.payment_submissions;
  v_profile public.users;
  v_preferences jsonb;
  v_current_premium boolean := false;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if not public.is_admin_user() then
    raise exception 'Admin access required';
  end if;

  if p_status not in ('verified', 'rejected') then
    raise exception 'Invalid payment review status: %', p_status;
  end if;

  select *
  into v_submission
  from public.payment_submissions
  where id = p_submission_id
  for update;

  if not found then
    raise exception 'Payment submission not found';
  end if;

  select *
  into v_profile
  from public.users
  where auth_id = v_submission.user_id
  for update;

  if p_status = 'verified' and not found then
    raise exception 'No profile row found for auth user %', v_submission.user_id;
  end if;

  if found then
    v_current_premium := lower(coalesce(coalesce(v_profile.preferences, '{}'::jsonb)->>'premium', 'false')) = 'true';
  end if;

  update public.payment_submissions
  set
    status = p_status,
    reviewer_notes = nullif(btrim(coalesce(p_reviewer_notes, '')), ''),
    verified_at = case when p_status = 'verified' then now() else null end,
    verified_by = case when p_status = 'verified' then auth.uid() else null end,
    updated_at = now()
  where id = p_submission_id
  returning * into v_submission;

  if found and v_profile.id is not null then
    if p_status = 'verified' then
      v_preferences := coalesce(v_profile.preferences, '{}'::jsonb)
        || jsonb_build_object(
          'premium', true,
          'payment_status', 'verified',
          'paid_at', v_submission.verified_at,
          'payment_submission_id', v_submission.id
        );
      v_preferences := v_preferences - 'paid_until';

      update public.users
      set
        preferences = v_preferences,
        updated_at = now()
      where id = v_profile.id;
    elsif not v_current_premium then
      v_preferences := coalesce(v_profile.preferences, '{}'::jsonb)
        || jsonb_build_object(
          'premium', false,
          'payment_status', 'rejected',
          'payment_submission_id', v_submission.id
        );
      v_preferences := v_preferences - 'paid_at' - 'paid_until';

      update public.users
      set
        preferences = v_preferences,
        updated_at = now()
      where id = v_profile.id;
    end if;
  end if;

  return v_submission;
end;
$$;

revoke all on function public.review_payment_submission(uuid, text, text) from public;
grant execute on function public.review_payment_submission(uuid, text, text) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'payment-receipts',
  'payment-receipts',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "payment_receipts_select_own_or_admin" on storage.objects;
create policy "payment_receipts_select_own_or_admin"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'payment-receipts'
  and (
    coalesce((storage.foldername(name))[1], '') = auth.uid()::text
    or public.is_admin_user()
  )
);

drop policy if exists "payment_receipts_insert_own" on storage.objects;
create policy "payment_receipts_insert_own"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'payment-receipts'
  and coalesce((storage.foldername(name))[1], '') = auth.uid()::text
);

drop policy if exists "payment_receipts_update_own_or_admin" on storage.objects;
create policy "payment_receipts_update_own_or_admin"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'payment-receipts'
  and (
    coalesce((storage.foldername(name))[1], '') = auth.uid()::text
    or public.is_admin_user()
  )
)
with check (
  bucket_id = 'payment-receipts'
  and (
    coalesce((storage.foldername(name))[1], '') = auth.uid()::text
    or public.is_admin_user()
  )
);

drop policy if exists "payment_receipts_delete_own_or_admin" on storage.objects;
create policy "payment_receipts_delete_own_or_admin"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'payment-receipts'
  and (
    coalesce((storage.foldername(name))[1], '') = auth.uid()::text
    or public.is_admin_user()
  )
);
