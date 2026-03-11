'use server';

import { createClient } from "@/lib/supabase/server";
import { tenantSchema, type Tenant } from "@/lib/validations/schemas";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export type TenantWithProperty = Tenant & { property: { title: string } | null };

export async function getTenants() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tenants")
    .select("*, property:properties(title)");
    if (error) {
      console.error("Error fetching tenants:", error);
      return [];
    }
    return data
  // if (!data) {
  //   return [];
  // }

  // const tenantWithPropertySchema = tenantSchema.extend({
  //   property: z.object({
  //     title: z.string(),
  //   }).nullable(),
  // });

  // const result = tenantWithPropertySchema.array().safeParse(data);
  // if (!result.success) {
  //   console.error("Validation error in getTenants:", result.error);
  //   return [];
  // }

  // return result.data;
}

export async function createTenant(formData: Omit<Tenant, "id" | "avatar_url">) {
  const supabase = await createClient();
  const insertSchema = tenantSchema.omit({ id: true, avatar_url: true });
  const validatedData = insertSchema.parse(formData);

  const { data, error } = await supabase
    .from("tenants")
    .insert({ ...validatedData, lease_end_date: validatedData.lease_end_date?.toISOString() })
    .select()
    .single();

  if (error) {
    console.error("Error creating tenant:", error);
    return { success: false, error: error.message };
  }

  revalidatePath("/dashboard/tenants");

  return { success: true, data };
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<Tenant, "id" | "avatar_url">>
) {
  const supabase = await createClient();

  const partialTenantSchema = tenantSchema.partial().omit({ id: true, avatar_url: true });
  const validatedData = partialTenantSchema.parse(formData);

  const { data, error } = await supabase
    .from("tenants")
    .update({ ...validatedData, lease_end_date: validatedData.lease_end_date?.toISOString() })
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

export async function getTenantById(id: string) {
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

  return data;
}
