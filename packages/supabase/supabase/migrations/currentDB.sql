-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.branding (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL,
  image text,
  specs jsonb,
  gallery jsonb,
  reviews jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  is_featured boolean NOT NULL DEFAULT false,
  CONSTRAINT branding_pkey PRIMARY KEY (id)
);
CREATE TABLE public.properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price > 0::numeric) NOT VALI),
  location text,
  image_url text,
  bedrooms integer,
  bathrooms integer,
  type text,
  features jsonb,
  gallery jsonb,
  reviews jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  availability boolean NOT NULL DEFAULT true,
  is_featured boolean NOT NULL DEFAULT false,
  CONSTRAINT properties_pkey PRIMARY KEY (id)
);
CREATE TABLE public.lease_applications (
  property_id uuid,
  applicant_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  employment text CHECK (employment = ANY (ARRAY['employed'::text, 'self-employed'::text, 'unemployed'::text, 'student'::text])),
  CONSTRAINT lease_applications_pkey PRIMARY KEY (id),
  CONSTRAINT lease_applications_product_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id)
);
CREATE TABLE public.branding_inquiries (
  product_id uuid,
  customer_name text NOT NULL,
  email text NOT NULL,
  company text,
  quantity integer NOT NULL CHECK (quantity > 0) NOT VALI),
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'New'::text,
  message text,
  CONSTRAINT branding_inquiries_pkey PRIMARY KEY (id),
  CONSTRAINT branding_inquiries_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.branding(id)
);
CREATE TABLE public.tenants (
  name text NOT NULL,
  email text,
  lease_end_date timestamp with time zone,
  avatar_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  property_id uuid,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  CONSTRAINT tenants_pkey PRIMARY KEY (id),
  CONSTRAINT tenants_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id)
);
CREATE TABLE public.payments (
  amount numeric NOT NULL CHECK (amount > 0::numeric) NOT VALI),
  date timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'Pending'::text,
  tenant_id uuid,
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  CONSTRAINT payments_pkey PRIMARY KEY (id),
  CONSTRAINT payments_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id)
);
CREATE TABLE public.contact_messages (
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  id text NOT NULL DEFAULT (gen_random_uuid())::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'New'::text CHECK (status = ANY (ARRAY['New'::text, 'In Progress'::text, 'Resolved'::text, 'Archived'::text])),
  CONSTRAINT contact_messages_pkey PRIMARY KEY (id)
);
CREATE TABLE public.admin_users (
  user_id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT admin_users_pkey PRIMARY KEY (user_id),
  CONSTRAINT admin_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);