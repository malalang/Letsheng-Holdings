import { createSupabaseServerClient } from "../server";

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

export async function getPayments() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*, tenants(name)");
  if (error) throw new Error(error.message);
  return data;
}

export async function getPaymentsByTenantId(tenantId: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("tenantId", tenantId);
  if (error) throw new Error(error.message);
  return data;
}
