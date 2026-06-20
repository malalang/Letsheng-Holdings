import { requireAdminUser } from "../auth";
import { createSupabasePublicClient } from "../public";
import { createSupabaseServerClient } from "../server";

export async function getProperties() {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getAdminProperties() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedProperties() {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("isFeatured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getPropertyById(id: string) {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getAdminPropertyById(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getLeaseApplications() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("lease_applications")
    .select("*, properties(id, title)");
  if (error) throw new Error(error.message);
  return data;
}
