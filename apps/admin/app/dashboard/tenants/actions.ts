'use server';

import { revalidatePath } from "next/cache";

import {
  tenantSchema,
  type TablesInsert,
  type TablesUpdate,
  type Tenant,
} from "@repo/supabase";
import {
  createTenant as createTenantService,
  deleteTenant as deleteTenantService,
  getTenants as getTenantsService,
  getTenantById as getTenantByIdService,
  updateTenant as updateTenantService,
} from "@repo/supabase/services/tenants";

type TenantRow = Omit<Tenant, "lease_end_date"> & {
  lease_end_date: string | null;
};

export type TenantWithProperty = TenantRow & {
  property: { title: string } | null;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function toLeaseEndDate(value: Tenant["lease_end_date"] | undefined) {
  if (value === undefined) return undefined;
  return value ? value.toISOString() : null;
}

function toTenantInsert(
  tenant: Omit<Tenant, "id" | "avatar_url">,
): TablesInsert<"tenants"> {
  return {
    name: tenant.name,
    email: tenant.email,
    property_id: tenant.property_id,
    status: tenant.status,
    lease_end_date: toLeaseEndDate(tenant.lease_end_date),
  };
}

function toTenantUpdate(
  tenant: Partial<Omit<Tenant, "id" | "avatar_url">>,
): TablesUpdate<"tenants"> {
  const payload: TablesUpdate<"tenants"> = {};

  if (tenant.name !== undefined) payload.name = tenant.name;
  if (tenant.email !== undefined) payload.email = tenant.email;
  if (tenant.property_id !== undefined) payload.property_id = tenant.property_id;
  if (tenant.status !== undefined) payload.status = tenant.status;
  if (tenant.lease_end_date !== undefined) {
    payload.lease_end_date = toLeaseEndDate(tenant.lease_end_date);
  }

  return payload;
}

export async function getTenants() {
  try {
    const tenants = await getTenantsService();
    return tenants.map((tenant) => ({
      ...tenant,
      property: tenant.properties ?? null,
    })) as TenantWithProperty[];
  } catch (error) {
    console.error("Error fetching tenants:", error);
    return [];
  }
}

export async function createTenant(formData: Omit<Tenant, "id" | "avatar_url">) {
  const insertSchema = tenantSchema.omit({ id: true, avatar_url: true });
  const validatedData = insertSchema.parse(formData);

  try {
    const data = await createTenantService(toTenantInsert(validatedData));
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error creating tenant:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<Tenant, "id" | "avatar_url">>
) {
  const partialTenantSchema = tenantSchema.partial().omit({ id: true, avatar_url: true });
  const validatedData = partialTenantSchema.parse(formData);

  try {
    const data = await updateTenantService(id, toTenantUpdate(validatedData));
    revalidatePath("/dashboard/tenants");
    revalidatePath(`/dashboard/tenants/${id}/edit`);
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error updating tenant:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function deleteTenant(id: string) {
  try {
    const data = await deleteTenantService(id);
    revalidatePath("/dashboard/tenants");
    return { success: true, data };
  } catch (error: unknown) {
    console.error("Error deleting tenant:", error);
    return { success: false, error: getErrorMessage(error) };
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
