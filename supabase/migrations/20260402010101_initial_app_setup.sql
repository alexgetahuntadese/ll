create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid not null unique references auth.users(id) on delete cascade,
  name text,
  mobile text,
  email text,
  grade text,
  school text,
  profile_image_url text,
  date_of_birth date,
  gender text check (gender in ('male', 'female', 'other')),
  preferences jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_login timestamptz
);

create table if not exists public.saved_questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  question_data jsonb not null,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, question_id)
);

create table if not exists public.search_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  search_term text not null,
  result_count integer not null default 0,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at
before update on public.users
for each row
execute function public.set_updated_at();

drop trigger if exists saved_questions_set_updated_at on public.saved_questions;
create trigger saved_questions_set_updated_at
before update on public.saved_questions
for each row
execute function public.set_updated_at();

alter table public.users enable row level security;
alter table public.saved_questions enable row level security;
alter table public.search_history enable row level security;

drop policy if exists "users_select_own" on public.users;
create policy "users_select_own"
on public.users
for select
to authenticated
using (auth.uid() = auth_id);

drop policy if exists "users_insert_own" on public.users;
create policy "users_insert_own"
on public.users
for insert
to authenticated
with check (auth.uid() = auth_id);

drop policy if exists "users_update_own" on public.users;
create policy "users_update_own"
on public.users
for update
to authenticated
using (auth.uid() = auth_id)
with check (auth.uid() = auth_id);

drop policy if exists "saved_questions_select_own" on public.saved_questions;
create policy "saved_questions_select_own"
on public.saved_questions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "saved_questions_insert_own" on public.saved_questions;
create policy "saved_questions_insert_own"
on public.saved_questions
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "saved_questions_update_own" on public.saved_questions;
create policy "saved_questions_update_own"
on public.saved_questions
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "saved_questions_delete_own" on public.saved_questions;
create policy "saved_questions_delete_own"
on public.saved_questions
for delete
to authenticated
using (auth.uid() = user_id);

drop policy if exists "search_history_select_own" on public.search_history;
create policy "search_history_select_own"
on public.search_history
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "search_history_insert_own" on public.search_history;
create policy "search_history_insert_own"
on public.search_history
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "search_history_delete_own" on public.search_history;
create policy "search_history_delete_own"
on public.search_history
for delete
to authenticated
using (auth.uid() = user_id);
