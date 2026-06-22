-- Harden the public/admin data boundary.
-- Anonymous users may browse public catalog data and submit lead forms.
-- Authenticated users are treated as admin users by the current admin app.

alter table public.branding enable row level security;
alter table public.branding force row level security;
alter table public.branding_inquiries enable row level security;
alter table public.branding_inquiries force row level security;
alter table public.contact_messages enable row level security;
alter table public.contact_messages force row level security;
alter table public.lease_applications enable row level security;
alter table public.lease_applications force row level security;
alter table public.payments enable row level security;
alter table public.payments force row level security;
alter table public.properties enable row level security;
alter table public.properties force row level security;
alter table public.tenants enable row level security;
alter table public.tenants force row level security;

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

grant usage on schema public to anon, authenticated;

grant select on public.branding to anon, authenticated;
grant select on public.properties to anon, authenticated;
grant insert on public.branding_inquiries to anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
grant insert on public.lease_applications to anon, authenticated;

grant all on public.branding to authenticated;
grant all on public.branding_inquiries to authenticated;
grant all on public.contact_messages to authenticated;
grant all on public.lease_applications to authenticated;
grant all on public.payments to authenticated;
grant all on public.properties to authenticated;
grant all on public.tenants to authenticated;

create index if not exists branding_created_at_idx
on public.branding (created_at desc);

create index if not exists branding_featured_idx
on public.branding (is_featured, created_at desc);

create index if not exists branding_inquiries_status_created_at_idx
on public.branding_inquiries (status, created_at desc);

create index if not exists contact_messages_status_created_at_idx
on public.contact_messages (status, created_at desc);

create index if not exists lease_applications_status_created_at_idx
on public.lease_applications (status, created_at desc);

create index if not exists lease_applications_property_id_idx
on public.lease_applications (property_id);

create index if not exists payments_tenant_id_date_idx
on public.payments (tenant_id, date desc);

create index if not exists properties_availability_created_at_idx
on public.properties (availability, created_at desc);

create index if not exists properties_featured_idx
on public.properties (is_featured, created_at desc);

create index if not exists tenants_property_id_idx
on public.tenants (property_id);

create index if not exists tenants_status_idx
on public.tenants (status);

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'branding_inquiries_quantity_positive'
  ) then
    alter table public.branding_inquiries
    add constraint branding_inquiries_quantity_positive
    check (quantity > 0) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'payments_amount_positive'
  ) then
    alter table public.payments
    add constraint payments_amount_positive
    check (amount > 0) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint where conname = 'properties_price_positive'
  ) then
    alter table public.properties
    add constraint properties_price_positive
    check (price > 0) not valid;
  end if;
end $$;

drop policy if exists "Public can read branding products" on public.branding;
create policy "Public can read branding products"
on public.branding
for select
to anon, authenticated
using (true);

drop policy if exists "Admins can manage branding products" on public.branding;
create policy "Admins can manage branding products"
on public.branding
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create branding inquiries" on public.branding_inquiries;
create policy "Public can create branding inquiries"
on public.branding_inquiries
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage branding inquiries" on public.branding_inquiries;
create policy "Admins can manage branding inquiries"
on public.branding_inquiries
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create contact messages" on public.contact_messages;
create policy "Public can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage contact messages" on public.contact_messages;
create policy "Admins can manage contact messages"
on public.contact_messages
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can create lease applications" on public.lease_applications;
create policy "Public can create lease applications"
on public.lease_applications
for insert
to anon, authenticated
with check (lower(status) in ('new', 'pending', 'submitted', 'open', 'unread'));

drop policy if exists "Admins can manage lease applications" on public.lease_applications;
create policy "Admins can manage lease applications"
on public.lease_applications
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Admins can manage payments" on public.payments;
create policy "Admins can manage payments"
on public.payments
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read available properties" on public.properties;
create policy "Public can read available properties"
on public.properties
for select
to anon, authenticated
using (availability = true or auth.role() = 'authenticated');

drop policy if exists "Admins can manage properties" on public.properties;
create policy "Admins can manage properties"
on public.properties
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Admins can manage tenants" on public.tenants;
create policy "Admins can manage tenants"
on public.tenants
for all
to authenticated
using (true)
with check (true);
