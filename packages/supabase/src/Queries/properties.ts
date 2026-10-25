import { createSupabasePublicClient } from "../public";
import { createSupabaseServerClient } from "../server";

export async function getProperties() {
  const supabase = createSupabasePublicClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getAdminProperties() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("properties").select("*");
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
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("lease_applications")
    .select("*, properties(id, title)");
  if (error) throw new Error(error.message);
  return data;
}
