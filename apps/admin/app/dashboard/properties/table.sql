
create table public.properties (
  id text not null,
  created_at timestamp with time zone not null default now(),
  title text not null,
  description text null,
  price numeric not null,
  location text null,
  availability boolean not null default true,
  image_url text null,
  bedrooms integer null,
  bathrooms integer null,
  type text null,
  features jsonb null,
  is_featured boolean not null default false,
  gallery jsonb null,
  reviews jsonb null,
  virtual_tour_url text null,
  constraint properties_pkey primary key (id)
) tablespace pg_default;
