-- Create the branding_inquiries table
CREATE TABLE public.branding_inquiries (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    product_id uuid NOT NULL,
    customer_name text NOT NULL,
    email text NOT NULL,
    company text,
    quantity integer NOT NULL,
    message text,
    status text NOT NULL DEFAULT 'New'::text,
    CONSTRAINT branding_inquiries_pkey PRIMARY KEY (id),
    CONSTRAINT branding_inquiries_product_id_fkey FOREIGN KEY (product_id) REFERENCES branding (id) ON DELETE CASCADE
);

-- Enable RLS
ALTER TABLE public.branding_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies
-- (Policies will be here)
