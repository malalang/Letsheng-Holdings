-- Create the tenants table to store tenant information
CREATE TABLE tenants (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT,
    property_id TEXT REFERENCES properties(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'Pending',
    lease_end_date TIMESTAMPTZ,
    avatar_url TEXT
);

COMMENT ON TABLE "public"."tenants" IS 'Stores tenant information, including their assigned property and lease details.';
