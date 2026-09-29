import type { TenantType } from "@letsheng-holdings/contracts/tenant";
import type { Metadata, Viewport } from "next";

import { getTenantById } from "../../../actions";
import TenantForm from "../../../tenant-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tenant = await getTenantById(id);

  if (!tenant) {
    return {};
  }

  return {
    title: `Edit ${tenant.name}`,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export default async function EditTenantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tenant = await getTenantById(id);

  if (!tenant) {
    return <div>Tenant not found</div>;
  }

  return <TenantForm tenant={tenant as TenantType & { id: string }} />;
}
