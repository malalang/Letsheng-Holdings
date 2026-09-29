import type { Metadata, Viewport } from "next";

import BrandingForm from "../branding-form";

export const metadata: Metadata = {
  title: "New Branding Product",
  description: "Create a branding product for the Letsheng Holdings portfolio.",
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
export default function NewBrandingPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Create New Branding Product</h1>
      <BrandingForm />
    </div>
  );
}
