"use server";

import { createClient } from "@/lib/supabase/server";
import { tenantSchema, type Tenant } from "@/lib/validations/schemas";
import { revalidatePath } from "next/cache";

export type TenantWithProperty = Tenant & { property: { title: string } | null };

export async function getTenants(): Promise<TenantWithProperty[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, property:properties(title)");

  if (error) {
    console.error("Error fetching tenants:", error);
    return [];
  }

  return data as TenantWithProperty[];
}

export async function createTenant(formData: Omit<Tenant, "id" | "avatar_url">) {
  const supabase = await createClient();
  const insertSchema = tenantSchema.omit({ id: true, avatar_url: true });
  const validatedData = insertSchema.parse(formData);

  const { data, error } = await supabase
    .from("tenants")
    // The 'as any' is a workaround for a faulty auto-generated Supabase type
    // that incorrectly requires the 'id' field on insert.
    .insert([validatedData as any])
    .select()
    .single();

  if (error) {
    console.error("Error creating tenant:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard/tenants");

  return { success: true, data };
}

export async function updateTenant(id: string, formData: Partial<Omit<Tenant, "id" | "avatar_url">>) {
  const supabase = await createClient();

  const partialTenantSchema = tenantSchema.partial().omit({ id: true, avatar_url: true });
  const validatedData = partialTenantSchema.parse(formData);

  const { data, error } = await supabase
    .from("tenants")
    .update(validatedData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating tenant:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard/tenants");
  revalidatePath(`/dashboard/tenants/${id}/edit`);

  return { success: true, data };
}

export async function deleteTenant(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("tenants").delete().eq("id", id);

  if (error) {
    console.error("Error deleting tenant:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard/tenants");

  return { success: true, data };
}

export async function getTenantById(id: string): Promise<Tenant | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching tenant:", error);
    return null;
  }

  return data as Tenant;
}
