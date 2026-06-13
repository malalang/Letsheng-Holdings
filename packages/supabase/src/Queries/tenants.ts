import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export async function getTenants() {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, properties(title)");
  if (error) throw new Error(error.message);
  return data;
}

export async function getTenantById(id: string) {
  await requireAdminUser();
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
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*, tenants(name)");
  if (error) throw new Error(error.message);
  return data;
}

export async function getPaymentsByTenantId(tenantId: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("tenant_id", tenantId);
  if (error) throw new Error(error.message);
  return data;
}
