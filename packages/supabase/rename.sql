-- Letsheng-Holdings camelCase database rename plan.
-- REVIEWED ONLY. DO NOT APPLY BLINDLY.
-- This file has NOT been run by ChatGPT.
-- Apply manually only after confirming the production schema and taking a backup.
-- After applying, regenerate packages/supabase/src/supabaseType.ts.
-- Then update Supabase boundary code to use the renamed camelCase columns.

-- Current uploaded rename.sql issue fixed here:
-- customer_name and product_id belong to public.branding_inquiries, not public.branding.

begin;

-- properties
alter table public.properties
  rename column image_url to "imageUrl";

alter table public.properties
  rename column is_featured to "isFeatured";

alter table public.properties
  rename column created_at to "createdAt";

-- branding products
alter table public.branding
  rename column is_featured to "isFeatured";

alter table public.branding
  rename column created_at to "createdAt";

-- branding inquiries / orders
alter table public.branding_inquiries
  rename column customer_name to "customerName";

alter table public.branding_inquiries
  rename column product_id to "productId";

alter table public.branding_inquiries
  rename column created_at to "createdAt";

-- lease applications
alter table public.lease_applications
  rename column applicant_name to "applicantName";

alter table public.lease_applications
  rename column property_id to "propertyId";

alter table public.lease_applications
  rename column created_at to "createdAt";

-- tenants
alter table public.tenants
  rename column property_id to "propertyId";

alter table public.tenants
  rename column lease_end_date to "leaseEndDate";

alter table public.tenants
  rename column avatar_url to "avatarUrl";

alter table public.tenants
  rename column created_at to "createdAt";

-- payments
alter table public.payments
  rename column tenant_id to "tenantId";

alter table public.payments
  rename column created_at to "createdAt";

-- contact messages
alter table public.contact_messages
  rename column created_at to "createdAt";

-- admin users
alter table public.admin_users
  rename column user_id to "userId";

alter table public.admin_users
  rename column created_at to "createdAt";

alter table public.admin_users
  rename column updated_at to "updatedAt";

commit;

-- After applying manually:
-- 1. Regenerate Supabase types:
--    pnpm --filter @letsheng/supabase supabase:types
--    or the repo's equivalent Supabase type generation command.
-- 2. Update packages/supabase/src/Queries/* and Mutations/* to use camelCase DB columns.
-- 3. Remove temporary snake_case DB-boundary mappings from apps/admin and apps/client.
-- 4. Re-run Vercel validation for letsheng-holdings-client and letsheng-holdings-admin.
