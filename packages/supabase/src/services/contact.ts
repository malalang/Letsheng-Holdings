import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert } from "../types/database.types";

export async function submitContactMessage(
  message: TablesInsert<"contact_messages">,
) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .insert(message)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function getContactMessages() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
