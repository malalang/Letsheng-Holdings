"use server";

import type { ActionResult } from "@repo/contracts/actionResult";
import { type Property, propertySchema } from "@repo/contracts/property";
import {
  createProperty as createPropertyService,
  deleteProperty as deletePropertyService,
  updateProperty as updatePropertyService,
} from "@repo/supabase/Mutations/properties";
import {
  getProperties as getPropertiesService,
  getPropertyById as getPropertyByIdService,
} from "@repo/supabase/Queries/properties";
import type {
  Json,
  TablesInsert,
  TablesUpdate,
} from "@repo/supabase/supabaseType";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "An unexpected error occurred.";
}

function toJson(value: unknown): Json | null {
  return value === undefined ? null : (value as Json | null);
}

function toPropertyInsert(property: Property): TablesInsert<"properties"> {
  return {
    id: property.id,
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    availability: property.availability,
    imageUrl: property.imageUrl,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    isFeatured: property.isFeatured,
    gallery: toJson(property.gallery),
    reviews: toJson(property.reviews),
  };
}

function toPropertyUpdate(
  property: Omit<Property, "id">,
): TablesUpdate<"properties"> {
  return {
    title: property.title,
    description: property.description,
    price: property.price,
    location: property.location,
    availability: property.availability,
    imageUrl: property.imageUrl,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    isFeatured: property.isFeatured,
    gallery: toJson(property.gallery),
    reviews: toJson(property.reviews),
  };
}

export async function getProperties() {
  try {
    const rawProperties = await getPropertiesService();
    return rawProperties as Property[];
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getPropertyById(id: string) {
  try {
    const p = await getPropertyByIdService(id);
    return p as Property;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function createProperty(data: Property) {
  const validatedData = propertySchema.parse(data);

  try {
    const result = await createPropertyService(toPropertyInsert(validatedData));
    revalidatePath("/dashboard/properties");
    await triggerRevalidation(result.revalidate);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function updateProperty(
  id: string,
  data: Property,
): Promise<ActionResult> {
  try {
    const validatedData = propertySchema.parse(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...updateData } = validatedData;

    const result = await updatePropertyService(
      id,
      toPropertyUpdate(updateData),
    );

    revalidatePath("/dashboard/properties");
    revalidatePath(`/dashboard/properties/property/${id}`);
    await triggerRevalidation(result.revalidate);
    return { ok: true };
  } catch (e: unknown) {
    console.error("Validation or unexpected error:", e);
    return { ok: false, error: getErrorMessage(e) };
  }
}

export async function deleteProperty(id: string) {
  try {
    const result = await deletePropertyService(id);
    revalidatePath("/dashboard/properties");
    await triggerRevalidation(result.revalidate);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}
