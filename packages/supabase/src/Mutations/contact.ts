import { createSupabaseServerClient } from "../server";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { TablesInsert } from "../supabaseType";

export async function submitContactMessage(
  message: TablesInsert<"contact_messages">,
) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("contact_messages")
    .insert({ ...message, status: "New" });

  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.contactMessages],
    mode: "immediate",
  });
}
