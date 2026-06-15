-- Make admin access a database-backed authorization decision.
-- Bootstrap the first admin manually after applying this migration:
-- insert into public.admin_users (user_id) values ('<supabase-auth-user-id>');

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.admin_users force row level security;

revoke all on public.admin_users from public;
revoke all on public.admin_users from anon;
revoke all on public.admin_users from authenticated;

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in (
        'branding',
        'branding_inquiries',
        'contact_messages',
        'lease_applications',
        'payments',
        'properties',
        'tenants'
      )
  loop
    execute format(
      'drop policy if exists %I on %I.%I',
      existing_policy.policyname,
      existing_policy.schemaname,
      existing_policy.tablename
    );
  end loop;
end $$;

create policy "Public can read branding products"
on public.branding
for select
to anon, authenticated
using (true);

create policy "Admins can manage branding products"
on public.branding
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create branding inquiries"
on public.branding_inquiries
for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage branding inquiries"
on public.branding_inquiries
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage contact messages"
on public.contact_messages
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can create lease applications"
on public.lease_applications
for insert
to anon, authenticated
with check (status = 'Pending');

create policy "Admins can manage lease applications"
on public.lease_applications
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage payments"
on public.payments
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Public can read available properties"
on public.properties
for select
to anon, authenticated
using (availability = true or public.is_admin());

create policy "Admins can manage properties"
on public.properties
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage tenants"
on public.tenants
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
