import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Admin Secure Login",
  description: "Sign in to the Letsheng Holdings Command Center.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
