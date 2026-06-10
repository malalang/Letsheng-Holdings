"use server";

import {
  type Json,
  type Property,
  propertySchema,
  type TablesInsert,
  type TablesUpdate,
} from "@repo/supabase";
import {
  createProperty as createPropertyService,
  deleteProperty as deletePropertyService,
  getProperties as getPropertiesService,
  getPropertyById as getPropertyByIdService,
  updateProperty as updatePropertyService,
} from "@repo/supabase/services/properties";
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
    image_url: property.image_url,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    is_featured: property.is_featured,
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
    image_url: property.image_url,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    type: property.type,
    features: toJson(property.features),
    is_featured: property.is_featured,
    gallery: toJson(property.gallery),
    reviews: toJson(property.reviews),
  };
}

export async function getProperties() {
  try {
    return (await getPropertiesService()) as Property[];
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getPropertyById(id: string) {
  try {
    return (await getPropertyByIdService(id)) as Property;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}

export async function createProperty(data: Property) {
  const validatedData = propertySchema.parse(data);

  try {
    await createPropertyService(toPropertyInsert(validatedData));
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: "/properties" });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
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

    await updatePropertyService(id, toPropertyUpdate(updateData));

    revalidatePath("/dashboard/properties");
    revalidatePath(`/dashboard/properties/property/${id}`);
    await triggerRevalidation({ path: `/properties/${id}` });
    await triggerRevalidation({ path: "/properties" });
    return { success: true, error: null };
  } catch (e: unknown) {
    console.error("Validation or unexpected error:", e);
    return { success: false, error: getErrorMessage(e) };
  }
}

export async function deleteProperty(id: string) {
  try {
    await deletePropertyService(id);
    revalidatePath("/dashboard/properties");
    await triggerRevalidation({ path: "/properties" });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
}
