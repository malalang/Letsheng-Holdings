import { createSupabaseServerClient } from "../server";
import { Tables, TablesInsert, TablesUpdate } from "../types/database.types";

export async function getTenants() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, properties(title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function getTenantById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, properties(title)")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function createTenant(tenant: TablesInsert<"tenants">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .insert(tenant)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateTenant(id: string, tenant: TablesUpdate<"tenants">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .update(tenant)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteTenant(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("tenants").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function getPayments() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*, tenants(name)");
  if (error) throw new Error(error.message);
  return data;
}

export async function createPayment(payment: TablesInsert<"payments">) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .insert(payment)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}
