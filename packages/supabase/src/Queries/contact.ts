import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export async function getContactMessages() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
