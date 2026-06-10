import { createSupabaseServerClient } from "../server";
import type { TablesInsert } from "../supabaseType";

export async function submitContactMessage(
  message: TablesInsert<"contact_messages">,
) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("contact_messages")
    .insert({ ...message, status: "New" });

  if (error) throw new Error(error.message);
}
