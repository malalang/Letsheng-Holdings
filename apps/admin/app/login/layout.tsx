import type { Metadata, Viewport } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Admin Secure Login",
  description: "Sign in to the Letsheng Holdings Command Center.",
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
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
