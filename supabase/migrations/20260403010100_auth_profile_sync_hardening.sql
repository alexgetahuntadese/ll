create or replace function public.handle_auth_user_synced()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  next_name text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'name', '')), '');
  next_mobile text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'mobile', '')), '');
begin
  if to_regclass('public.users') is null then
    return new;
  end if;

  begin
    insert into public.users (
      auth_id,
      email,
      name,
      mobile,
      is_active
    )
    values (
      new.id,
      new.email,
      next_name,
      next_mobile,
      true
    )
    on conflict (auth_id) do update
    set
      email = excluded.email,
      name = coalesce(excluded.name, public.users.name),
      mobile = coalesce(excluded.mobile, public.users.mobile),
      updated_at = now();
  exception
    when others then
      raise warning 'handle_auth_user_synced skipped for auth user %: %', new.id, sqlerrm;
  end;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_auth_user_synced();
