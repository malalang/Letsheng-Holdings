"use server";

import type { ActionResult } from "@letsheng-holdings/contracts/actionResult";
import {
  type TenantType,
  tenantSchema,
} from "@letsheng-holdings/contracts/tenant";
import {
  createTenant as createTenantService,
  deleteTenant as deleteTenantService,
  updateTenant as updateTenantService,
} from "@letsheng-holdings/supabase/Mutations/tenants";
import {
  getTenantById as getTenantByIdService,
  getTenants as getTenantsService,
} from "@letsheng-holdings/supabase/Queries/tenants";
import type {
  TablesInsert,
  TablesUpdate,
} from "@letsheng-holdings/supabase/supabaseType";
import { revalidatePath } from "next/cache";

// NOTE: Tenant is imported from contracts which uses camelCase.
// Database now also uses camelCase.

export type TenantWithProperty = TenantType & {
  property: { title: string } | null;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "An unexpected error occurred.";
}

function toLeaseEndDate(value: TenantType["leaseEndDate"] | undefined) {
  if (value === undefined) return undefined;
  return value ? value.toISOString() : null;
}

function toTenantInsert(
  tenant: Omit<TenantType, "id" | "avatarUrl">,
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
  tenant: Partial<Omit<TenantType, "id" | "avatarUrl">>,
): TablesUpdate<"tenants"> {
  const payload: TablesUpdate<"tenants"> = {};

  if (tenant.name !== undefined) payload.name = tenant.name;
  if (tenant.email !== undefined) payload.email = tenant.email;
  if (tenant.propertyId !== undefined) payload.propertyId = tenant.propertyId;
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
  formData: Omit<TenantType, "id" | "avatarUrl">,
): Promise<ActionResult<TenantType>> {
  const insertSchema = tenantSchema.omit({ id: true, avatarUrl: true });
  const validatedData = insertSchema.parse(formData);

  try {
    const result = await createTenantService(toTenantInsert(validatedData));
    revalidatePath("/dashboard/tenants");
    return { ok: true, data: result.data as TenantType };
  } catch (error: unknown) {
    console.error("Error creating tenant:", error);
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function updateTenant(
  id: string,
  formData: Partial<Omit<TenantType, "id" | "avatarUrl">>,
): Promise<ActionResult<TenantType>> {
  const partialTenantSchema = tenantSchema
    .partial()
    .omit({ id: true, avatarUrl: true });
  const validatedData = partialTenantSchema.parse(formData);

  try {
    const result = await updateTenantService(id, toTenantUpdate(validatedData));
    revalidatePath("/dashboard/tenants");
    revalidatePath(`/dashboard/tenants/${id}/edit`);
    return { ok: true, data: result.data as TenantType };
  } catch (error: unknown) {
    console.error("Error updating tenant:", error);
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function deleteTenant(id: string): Promise<ActionResult> {
  try {
    await deleteTenantService(id);
    revalidatePath("/dashboard/tenants");
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
    return tenant as TenantType;
  } catch (error) {
    console.error("Error fetching tenant:", error);
    return null;
  }
}
