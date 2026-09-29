import type { Metadata, Viewport } from "next";

import PropertyForm from "../property-form";

export const metadata: Metadata = {
  title: "New Property",
  description: "Add a property to the Letsheng Holdings real estate portfolio.",
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
export default function NewPropertyPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Create New Property</h1>
      <PropertyForm />
    </div>
  );
}
