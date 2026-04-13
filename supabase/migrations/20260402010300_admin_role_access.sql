create or replace function public.is_admin_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users
    where auth_id = auth.uid()
      and is_active = true
      and coalesce(preferences ->> 'role', '') = 'admin'
  );
$$;

drop policy if exists "users_select_admin_all" on public.users;
create policy "users_select_admin_all"
on public.users
for select
to authenticated
using (public.is_admin_user());

drop policy if exists "users_update_admin_all" on public.users;
create policy "users_update_admin_all"
on public.users
for update
to authenticated
using (public.is_admin_user())
with check (public.is_admin_user());

drop policy if exists "users_delete_admin_all" on public.users;
create policy "users_delete_admin_all"
on public.users
for delete
to authenticated
using (public.is_admin_user());
