import { requireAdminUser } from "../auth";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert, TablesUpdate } from "../supabaseType";

function brandingRevalidation(id: string) {
  return {
    tags: [CACHE_TAGS.branding, CACHE_TAGS.brandingItem(id)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.branding,
      CACHE_PATHS.brandingItem(id),
      CACHE_PATHS.brandingGallery(id),
      CACHE_PATHS.brandingOrder(id),
    ],
    mode: "immediate" as const,
  };
}

export async function createBranding(branding: TablesInsert<"branding">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .insert(branding)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, brandingRevalidation(data.id));
}

export async function updateBranding(
  id: string,
  branding: TablesUpdate<"branding">,
) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .update(branding)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, brandingRevalidation(id));
}

export async function deleteBranding(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("branding").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, brandingRevalidation(id));
}

export async function submitBrandingInquiry(
  inquiry: TablesInsert<"branding_inquiries">,
) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .insert({ ...inquiry, status: "New" });
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.brandingInquiries],
    mode: "immediate",
  });
}

export async function updateBrandingInquiryStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.brandingInquiries],
    mode: "immediate",
  });
}

export async function deleteBrandingInquiry(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.brandingInquiries],
    mode: "immediate",
  });
}
