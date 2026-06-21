import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { TablesInsert, TablesUpdate } from "../supabaseType";

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

export async function updateContactMessageStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const update: TablesUpdate<"contact_messages"> = { status };
  const { error } = await supabase
    .from("contact_messages")
    .update(update)
    .eq("id", id);

  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.contactMessages],
    mode: "immediate",
  });
}

export async function deleteContactMessage(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("contact_messages").delete().eq("id", id);

  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.contactMessages],
    mode: "immediate",
  });
}
