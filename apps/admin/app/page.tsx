import { createSupabaseServerClient } from "@letsheng-holdings/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminHomePage() {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
