import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert, TablesUpdate } from "../supabaseType";

export async function createProperty(property: TablesInsert<"properties">) {
  await requireAdminUser();
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
  await requireAdminUser();
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
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function submitLeaseApplication(application: TablesInsert<"lease_applications">) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .insert({ ...application, status: "Pending" });
  if (error) throw new Error(error.message);
}

export async function updateLeaseApplicationStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function deleteLeaseApplication(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}
