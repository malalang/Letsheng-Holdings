import type { Metadata, Viewport } from "next";

import TenantForm from "../tenant-form";

export const metadata: Metadata = {
  title: "New Tenant",
  description:
    "Create a tenant and assign them to a Letsheng Holdings property.",
};

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
export default function NewTenantPage() {
  return <TenantForm />;
}
