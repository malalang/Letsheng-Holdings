import { createSupabasePublicClient } from "../public";
import { createSupabaseServerClient } from "../server";

export async function getBranding() {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase.from("branding").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedBranding() {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("isFeatured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getBrandingById(id: string) {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("branding")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getBrandingInquiries() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("branding_inquiries")
    .select("*, branding(id, title)");
  if (error) throw new Error(error.message);
  return data;
}
