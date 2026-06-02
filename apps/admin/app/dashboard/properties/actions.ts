'use server';

import { revalidatePath } from "next/cache";

import { getProperties as getPropertiesService, getPropertyById as getPropertyByIdService, createProperty as createPropertyService, updateProperty as updatePropertyService, deleteProperty as deletePropertyService, propertySchema, type Property } from "@repo/supabase";
import { triggerRevalidation } from "@/lib/revalidation";

export async function getProperties() {
  try {
    return await getPropertiesService() as Property[];
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getPropertyById(id: string) {
  try {
    return await getPropertyByIdService(id) as Property;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function createProperty(data: Property) {
  const validatedData = propertySchema.parse(data);

  try {
    await createPropertyService(validatedData as any);
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: '/properties' });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateProperty(
  id: string,
  data: Property,
): Promise<{ success: boolean; error: string | null }> {
  try {
    const validatedData = propertySchema.parse(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...updateData } = validatedData;

    await updatePropertyService(id, updateData as any);

    revalidatePath("/dashboard/properties");
    revalidatePath(`/dashboard/properties/property/${id}`);
    await triggerRevalidation({ path: `/properties/${id}` });
    await triggerRevalidation({ path: '/properties' });
    return { success: true, error: null };
  } catch (e: any) {
    console.error("Validation or unexpected error:", e);
    return { success: false, error: e.message };
  }
}

export async function deleteProperty(id: string) {
  try {
    await deletePropertyService(id);
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: '/properties' });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
