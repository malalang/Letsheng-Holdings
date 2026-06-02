'use server';

import { getTenants as getTenantsService, createTenant as createTenantService, updateTenant as updateTenantService, deleteTenant as deleteTenantService, getTenantById as getTenantByIdService, tenantSchema, type Tenant } from "@repo/supabase";
import { revalidatePath } from "next/cache";

export type TenantWithProperty = Tenant & { properties: { title: string } | null };

export async function getTenants() {
  try {
    return await getTenantsService() as any[];
  } catch (error) {
    console.error("Error fetching tenants:", error);
    return [];
  }
}

export async function createTenant(formData: Omit<Tenant, "id" | "avatar_url">) {
  const insertSchema = tenantSchema.omit({ id: true, avatar_url: true });
  const validatedData = insertSchema.parse(formData);

  try {
    const data = await createTenantService(validatedData as any);
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: any) {
    console.error("Error creating tenant:", error);
    return { success: false, error: error.message };
  }
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<Tenant, "id" | "avatar_url">>
) {
  const partialTenantSchema = tenantSchema.partial().omit({ id: true, avatar_url: true });
  const validatedData = partialTenantSchema.parse(formData);

  try {
    const data = await updateTenantService(id, validatedData as any);
    revalidatePath("/dashboard/tenants");
    revalidatePath(`/dashboard/tenants/${id}/edit`);
    return { success: true, data };
  } catch (error: any) {
    console.error("Error updating tenant:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteTenant(id: string) {
  try {
    const data = await deleteTenantService(id);
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: any) {
    console.error("Error deleting tenant:", error);
    return { success: false, error: error.message };
  }
}

export async function getTenantById(id: string) {
  try {
    return await getTenantByIdService(id);
  } catch (error) {
    console.error("Error fetching tenant:", error);
    return null;
  }
}
