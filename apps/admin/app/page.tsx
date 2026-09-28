import { createSupabaseServerClient } from "@letsheng-holdings/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Secure access to the Letsheng Holdings Command Center.",
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
