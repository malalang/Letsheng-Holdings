import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import type { Tables } from "../supabaseType";

export type ContactMessageRow = Tables<"contact_messages">;

export async function getContactMessages(): Promise<ContactMessageRow[]> {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
