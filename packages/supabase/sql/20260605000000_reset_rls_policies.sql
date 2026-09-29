-- Reset and recreate all Row-Level Security policies to ensure consistency and correctness.

-- 1. Drop all existing policies in the public schema dynamically
do $$
declare
  pol record;
begin
  for pol in (
    select policyname, tablename, schemaname
    from pg_policies
    where schemaname = 'public'
  ) loop
    execute format('drop policy if exists %I on %I.%I', pol.policyname, pol.schemaname, pol.tablename);
  end loop;
end $$;

-- 2. Make sure RLS is enabled on all tables
alter table public.properties enable row level security;
alter table public.properties force row level security;

alter table public.branding enable row level security;
alter table public.branding force row level security;

alter table public.tenants enable row level security;
alter table public.tenants force row level security;

alter table public.payments enable row level security;
alter table public.payments force row level security;

alter table public.branding_inquiries enable row level security;
alter table public.branding_inquiries force row level security;

alter table public.lease_applications enable row level security;
alter table public.lease_applications force row level security;

alter table public.contact_messages enable row level security;
alter table public.contact_messages force row level security;

alter table public.admin_users enable row level security;
alter table public.admin_users force row level security;

-- 3. Recreate the policies

-- PROPERTIES Policies
create policy "Public can read available properties"
on public.properties for select
to anon, authenticated
using (availability = true or public.is_admin());

create policy "Admins can manage properties"
on public.properties for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- BRANDING Policies
create policy "Public can read branding products"
on public.branding for select
to anon, authenticated
using (true);

create policy "Admins can manage branding products"
on public.branding for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- LEASE APPLICATIONS Policies
create policy "Public can create lease applications"
on public.lease_applications for insert
to anon, authenticated
with check (status = 'Pending');

create policy "Admins can manage lease applications"
on public.lease_applications for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- BRANDING INQUIRIES Policies
create policy "Public can create branding inquiries"
on public.branding_inquiries for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage branding inquiries"
on public.branding_inquiries for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- CONTACT MESSAGES Policies
create policy "Public can create contact messages"
on public.contact_messages for insert
to anon, authenticated
with check (status = 'New');

create policy "Admins can manage contact messages"
on public.contact_messages for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- TENANTS Policies
create policy "Admins can manage tenants"
on public.tenants for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- PAYMENTS Policies
create policy "Admins can manage payments"
on public.payments for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- ADMIN USERS Policies
create policy "Admins can manage admin_users"
on public.admin_users for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
