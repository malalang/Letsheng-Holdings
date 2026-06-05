import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import { TablesInsert, TablesUpdate } from "../types/database.types";

export async function getBranding() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("branding").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedBranding() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("is_featured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getBrandingById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
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
  return data;
}

export async function updateBranding(id: string, branding: TablesUpdate<"branding">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding")
    .update(branding)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteBranding(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("branding").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function submitBrandingInquiry(inquiry: TablesInsert<"branding_inquiries">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding_inquiries")
    .insert({ ...inquiry, status: "New" })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getBrandingInquiries() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding_inquiries")
    .select("*, branding(id, title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function updateBrandingInquiryStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function deleteBrandingInquiry(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("branding_inquiries")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}
