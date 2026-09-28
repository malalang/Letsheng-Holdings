import type { Metadata } from "next";

import TenantForm from "../tenant-form";

export const metadata: Metadata = {
  title: "New Tenant",
  description:
    "Create a tenant and assign them to a Letsheng Holdings property.",
};

export default function NewTenantPage() {
  return <TenantForm />;
}
