create extension if not exists "pgcrypto";

create table if not exists public.properties (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  price numeric not null,
  location text,
  availability boolean not null default true,
  image_url text,
  bedrooms integer,
  bathrooms integer,
  type text,
  features jsonb default '[]'::jsonb,
  is_featured boolean not null default false,
  gallery jsonb default '[]'::jsonb,
  reviews jsonb default '[]'::jsonb
);

create table if not exists public.branding (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  title text not null,
  description text,
  category text not null,
  image text,
  is_featured boolean not null default false,
  specs jsonb default '[]'::jsonb,
  gallery jsonb default '[]'::jsonb,
  reviews jsonb default '[]'::jsonb
);

create table if not exists public.tenants (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  name text not null,
  email text,
  property_id text references public.properties(id) on delete set null,
  status text not null default 'Pending'
    check (status in ('Active', 'Inactive', 'Pending')),
  lease_end_date timestamptz,
  avatar_url text
);

create table if not exists public.payments (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  tenant_id text references public.tenants(id) on delete cascade,
  amount numeric not null,
  date timestamptz not null,
  status text not null default 'Pending'
    check (status in ('Paid', 'Pending', 'Late'))
);

create table if not exists public.branding_inquiries (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  product_id text references public.branding(id) on delete set null,
  customer_name text not null,
  email text not null,
  company text,
  quantity integer not null check (quantity > 0),
  message text,
  status text not null default 'New'
    check (status in ('New', 'In Progress', 'Completed', 'Archived'))
);

create table if not exists public.lease_applications (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  property_id text references public.properties(id) on delete set null,
  applicant_name text not null,
  email text not null,
  phone text,
  employment text,
  message text,
  status text not null default 'Pending'
    check (status in ('Pending', 'Approved', 'Rejected', 'Archived'))
);

create table if not exists public.contact_messages (
  id text primary key default gen_random_uuid()::text,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text not null default 'New'
    check (status in ('New', 'In Progress', 'Resolved', 'Archived'))
);

alter table public.properties enable row level security;
alter table public.branding enable row level security;
alter table public.tenants enable row level security;
alter table public.payments enable row level security;
alter table public.branding_inquiries enable row level security;
alter table public.lease_applications enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Allow public property reads" on public.properties;
create policy "Allow public property reads"
  on public.properties for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated property management" on public.properties;
create policy "Allow authenticated property management"
  on public.properties for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public branding reads" on public.branding;
create policy "Allow public branding reads"
  on public.branding for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated branding management" on public.branding;
create policy "Allow authenticated branding management"
  on public.branding for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow authenticated tenant management" on public.tenants;
create policy "Allow authenticated tenant management"
  on public.tenants for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow authenticated payment management" on public.payments;
create policy "Allow authenticated payment management"
  on public.payments for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public branding inquiry inserts" on public.branding_inquiries;
create policy "Allow public branding inquiry inserts"
  on public.branding_inquiries for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated branding inquiry management" on public.branding_inquiries;
create policy "Allow authenticated branding inquiry management"
  on public.branding_inquiries for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public lease application inserts" on public.lease_applications;
create policy "Allow public lease application inserts"
  on public.lease_applications for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated lease application management" on public.lease_applications;
create policy "Allow authenticated lease application management"
  on public.lease_applications for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Allow public contact message inserts" on public.contact_messages;
create policy "Allow public contact message inserts"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated contact message management" on public.contact_messages;
create policy "Allow authenticated contact message management"
  on public.contact_messages for all
  to authenticated
  using (true)
  with check (true);
