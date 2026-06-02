-- Create the payments table to store tenant payment information
CREATE TABLE payments (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    tenant_id TEXT REFERENCES tenants(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    date TIMESTAMPTZ NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pending'
);

COMMENT ON TABLE "public"."payments" IS 'Stores payment history for each tenant.';
