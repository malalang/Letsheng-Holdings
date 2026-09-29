import { createSupabaseServerClient } from "@letsheng-holdings/supabase/server";
import type { Metadata, Viewport } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Secure access to the Letsheng Holdings Command Center.",
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
export default async function AdminHomePage() {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
