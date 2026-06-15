"use server";

import {
  createTenant as createTenantService,
  deleteTenant as deleteTenantService,
  updateTenant as updateTenantService,
} from "@repo/supabase/Mutations/tenants";
import {
  getTenantById as getTenantByIdService,
  getTenants as getTenantsService,
} from "@repo/supabase/Queries/tenants";
import type { TablesInsert, TablesUpdate } from "@repo/supabase/supabaseType";
import { type Tenant, tenantSchema } from "@repo/contracts/tenant";
import type { ActionResult } from "@repo/contracts/actionResult";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";

// NOTE: Tenant is imported from contracts which uses camelCase.
// Database now also uses camelCase.

export type TenantWithProperty = Tenant & {
  property: { title: string } | null;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "An unexpected error occurred.";
}

function toLeaseEndDate(value: Tenant["leaseEndDate"] | undefined) {
  if (value === undefined) return undefined;
  return value ? value.toISOString() : null;
}

function toTenantInsert(
  tenant: Omit<Tenant, "id" | "avatarUrl">,
): TablesInsert<"tenants"> {
  return {
    name: tenant.name,
    email: tenant.email,
    propertyId: tenant.propertyId,
    status: tenant.status,
    leaseEndDate: toLeaseEndDate(tenant.leaseEndDate),
  };
}

function toTenantUpdate(
  tenant: Partial<Omit<Tenant, "id" | "avatarUrl">>,
): TablesUpdate<"tenants"> {
  const payload: TablesUpdate<"tenants"> = {};

  if (tenant.name !== undefined) payload.name = tenant.name;
  if (tenant.email !== undefined) payload.email = tenant.email;
  if (tenant.propertyId !== undefined)
    payload.propertyId = tenant.propertyId;
  if (tenant.status !== undefined) payload.status = tenant.status;
  if (tenant.leaseEndDate !== undefined) {
    payload.leaseEndDate = toLeaseEndDate(tenant.leaseEndDate);
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

export async function createTenant(
  formData: Omit<Tenant, "id" | "avatarUrl">,
): Promise<ActionResult<Tenant>> {
  const insertSchema = tenantSchema.omit({ id: true, avatarUrl: true });
  const validatedData = insertSchema.parse(formData);

  try {
    const result = await createTenantService(toTenantInsert(validatedData));
    revalidatePath("/dashboard/tenants");
    await triggerRevalidation(result.revalidate);
    return { ok: true, data: result.data as Tenant };
  } catch (error: unknown) {
    console.error("Error creating tenant:", error);
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<Tenant, "id" | "avatarUrl">>,
): Promise<ActionResult<Tenant>> {
  const partialTenantSchema = tenantSchema
    .partial()
    .omit({ id: true, avatarUrl: true });
  const validatedData = partialTenantSchema.parse(formData);

  try {
    const result = await updateTenantService(id, toTenantUpdate(validatedData));
    revalidatePath("/dashboard/tenants");
    revalidatePath(`/dashboard/tenants/${id}/edit`);
    await triggerRevalidation(result.revalidate);
    return { ok: true, data: result.data as Tenant };
  } catch (error: unknown) {
    console.error("Error updating tenant:", error);
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function deleteTenant(id: string): Promise<ActionResult> {
  try {
    const result = await deleteTenantService(id);
    revalidatePath("/dashboard/tenants");
    await triggerRevalidation(result.revalidate);
    return { ok: true };
  } catch (error: unknown) {
    console.error("Error deleting tenant:", error);
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function getTenantById(id: string) {
  try {
    const tenant = await getTenantByIdService(id);
    if (!tenant) return null;
    return tenant as Tenant;
  } catch (error) {
    console.error("Error fetching tenant:", error);
    return null;
  }
}
