-- Create the lease_applications table
CREATE TABLE public.lease_applications (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  property_id uuid NOT NULL,
  applicant_name text NOT NULL,
  email text NOT NULL,
  phone text NULL,
  employment text NULL,
  message text NULL,
  status text NOT NULL DEFAULT 'Pending'::text,
  CONSTRAINT lease_applications_pkey PRIMARY KEY (id),
  CONSTRAINT lease_applications_property_id_fkey FOREIGN KEY (property_id) REFERENCES properties (id) ON DELETE CASCADE
);

-- Enable RLS
ALTER TABLE public.lease_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public insert access" ON public.lease_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin full access" ON public.lease_applications FOR ALL USING (auth.role() = 'service_role');
