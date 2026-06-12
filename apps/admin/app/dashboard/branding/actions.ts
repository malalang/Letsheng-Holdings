"use server";

import {
  createBranding as createBrandingProductService,
  deleteBranding as deleteBrandingProductService,
  updateBranding as updateBrandingProductService,
} from "@repo/supabase/Mutations/branding";
import {
  getBrandingById as getBrandingProductService,
  getBranding as getBrandingProductsService,
} from "@repo/supabase/Queries/branding";
import type {
  Json,
  TablesInsert,
  TablesUpdate,
} from "@repo/supabase/supabaseType";
import type { Branding } from "@repo/supabase/validations";
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

function toBrandingInsert(product: Branding): TablesInsert<"branding"> {
  return {
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    image: product.image,
    is_featured: product.is_featured,
    specs: toJson(product.specs),
    gallery: toJson(product.gallery),
    reviews: toJson(product.reviews),
  };
}

function toBrandingUpdate(
  product: Partial<Branding>,
): TablesUpdate<"branding"> {
  const payload: TablesUpdate<"branding"> = {};

  if (product.title !== undefined) payload.title = product.title;
  if (product.category !== undefined) payload.category = product.category;
  if (product.description !== undefined)
    payload.description = product.description;
  if (product.image !== undefined) payload.image = product.image;
  if (product.is_featured !== undefined)
    payload.is_featured = product.is_featured;
  if (product.specs !== undefined) payload.specs = toJson(product.specs);
  if (product.gallery !== undefined) payload.gallery = toJson(product.gallery);
  if (product.reviews !== undefined) payload.reviews = toJson(product.reviews);

  return payload;
}

// Action to fetch all branding products
export async function getBrandingProducts() {
  try {
    return await getBrandingProductsService();
  } catch (error) {
    console.error("Error fetching branding products:", error);
    return [];
  }
}

// Action to fetch a single branding product by its ID
export async function getBrandingProduct(id: string) {
  try {
    return await getBrandingProductService(id);
  } catch (error) {
    console.error("Error fetching branding product:", error);
    return null;
  }
}

// Action to create a new branding product
export async function createBrandingProduct(
  product: Branding,
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await createBrandingProductService(
      toBrandingInsert(product),
    );
    revalidatePath("/dashboard/branding");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: unknown) {
    console.error("Error creating branding product:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

// Action to update an existing branding product
export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await updateBrandingProductService(
      id,
      toBrandingUpdate(product),
    );
    revalidatePath("/dashboard/branding");
    revalidatePath(`/dashboard/branding/brand/${id}`);
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: unknown) {
    console.error("Error updating branding product:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

// Action to delete a branding product
export async function deleteBrandingProduct(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await deleteBrandingProductService(id);
    revalidatePath("/dashboard/branding");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: unknown) {
    console.error("Error deleting branding product:", error);
    return { success: false, error: getErrorMessage(error) };
  }
}
