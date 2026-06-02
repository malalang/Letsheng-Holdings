import { createSupabaseServerClient } from "../server";
import { Tables, TablesInsert, TablesUpdate } from "../types/database.types";

export async function getProperties() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getFeaturedProperties() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("is_featured", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getPropertyById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createProperty(property: TablesInsert<"properties">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .insert(property)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateProperty(id: string, property: TablesUpdate<"properties">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .update(property)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteProperty(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function submitLeaseApplication(application: TablesInsert<"lease_applications">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("lease_applications")
    .insert(application)
    .select()
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

export async function updateLeaseApplicationStatus(id: string, status: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function deleteLeaseApplication(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}
