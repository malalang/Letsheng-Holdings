import { requireAdminUser } from "../auth";
import { CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert, TablesUpdate } from "../supabaseType";

export async function createTenant(tenant: TablesInsert<"tenants">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .insert(tenant)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, {
    tags: [CACHE_TAGS.tenants],
    mode: "immediate",
  });
}

export async function updateTenant(id: string, tenant: TablesUpdate<"tenants">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("tenants")
    .update(tenant)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, {
    tags: [CACHE_TAGS.tenants],
    mode: "immediate",
  });
}

export async function deleteTenant(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("tenants").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.tenants],
    mode: "immediate",
  });
}

export async function createPayment(payment: TablesInsert<"payments">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("payments")
    .insert(payment)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, {
    tags: [CACHE_TAGS.payments],
    mode: "immediate",
  });
}
