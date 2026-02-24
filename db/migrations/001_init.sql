-- Initial schema for Letsheng Holdings (properties + printing_orders)

    CREATE TYPE product_type AS ENUM ('t-shirt', 'mug', 'banner', 'poster');
create extension if not exists pgcrypto;

    CREATE TYPE order_status AS ENUM ('pending', 'processing', 'completed');
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'product_type') THEN
    CREATE TYPE product_type AS ENUM ('t-shirt','mug','banner','poster');
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'order_status') THEN
    CREATE TYPE order_status AS ENUM ('pending','processing','completed');
  END IF;
END$$;

-- Properties table
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
-- Create product_type and order_status enums
-- Properties table
-- Printing orders table
-- Enable Row Level Security
-- Policies: Admin full access, clients read-only for properties
-- Printing orders policies
-- Notes: Adjust policies to match your auth JWT claims.
  description text,
  location text,
  availability boolean DEFAULT true,
  image_urls text[]
);

-- Printing orders
CREATE TABLE IF NOT EXISTS printing_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  customer_name text NOT NULL,
  email text NOT NULL,
-- Enable Row Level Security
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE printing_orders ENABLE ROW LEVEL SECURITY;
  product_type product_type NOT NULL,
-- Allow public read access for properties (client-facing read-only)
CREATE POLICY public_select_properties ON properties
  FOR SELECT USING (true);

-- Admins full access policy placeholder:
-- Requires JWT claim 'role' = 'admin' to be present in requests.
CREATE POLICY admin_full_access_properties ON properties
  FOR ALL USING (
    current_setting('jwt.claims.role', true) = 'admin'
  );

-- Admins only for printing orders (customers create via API/backend)
CREATE POLICY admin_full_access_printing_orders ON printing_orders
  FOR ALL USING (
    current_setting('jwt.claims.role', true) = 'admin'
  );

-- Note: The above admin policies rely on Supabase injecting JWT claims into
-- the Postgres session. Adjust the policy expressions to match your auth
-- claim structure (e.g., current_setting('request.jwt.claims.role', true)).
  quantity integer NOT NULL CHECK (quantity > 0),
  design_url text,
  status order_status NOT NULL DEFAULT 'pending',
  total_price numeric NOT NULL CHECK (total_price >= 0)
);

-- Row level security and policies for properties
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Allow public read access for properties (client-facing read-only)
CREATE POLICY public_select_properties ON properties
  FOR SELECT USING (true);

-- Admins full access policy placeholder:
-- Requires JWT claim 'role' = 'admin' to be present in requests.
CREATE POLICY admin_full_access_properties ON properties
  FOR ALL USING (
    current_setting('jwt.claims.role', true) = 'admin'
  );

-- Row level security and policies for printing_orders
ALTER TABLE printing_orders ENABLE ROW LEVEL SECURITY;

-- Admins only for printing orders (customers create via API/backend)
CREATE POLICY admin_full_access_printing_orders ON printing_orders
  FOR ALL USING (
    current_setting('jwt.claims.role', true) = 'admin'
  );

-- Note: The above admin policies rely on Supabase injecting JWT claims into
-- the Postgres session. Adjust the policy expressions to match your auth
-- claim structure (e.g., current_setting('request.jwt.claims.role', true)).
