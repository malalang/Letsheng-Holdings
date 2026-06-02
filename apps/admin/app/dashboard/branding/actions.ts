'use server';

import { getBranding as getBrandingProductsService, getBrandingById as getBrandingProductService, createBranding as createBrandingProductService, updateBranding as updateBrandingProductService, deleteBranding as deleteBrandingProductService, type Branding } from "@repo/supabase";
import { revalidatePath } from 'next/cache';
import { triggerRevalidation } from '@/lib/revalidation';

// Action to fetch all branding products
export async function getBrandingProducts() {
  try {
    return await getBrandingProductsService();
  } catch (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }
}

// Action to fetch a single branding product by its ID
export async function getBrandingProduct(id: string) {
  try {
    return await getBrandingProductService(id);
  } catch (error) {
    console.error('Error fetching branding product:', error);
    return null;
  }
}

// Action to create a new branding product
export async function createBrandingProduct(
  product: Branding,
): Promise<{ success: boolean; error?: string }> {
  try {
    await createBrandingProductService(product as any);
    revalidatePath('/dashboard/branding');
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: any) {
    console.error('Error creating branding product:', error);
    return { success: false, error: error.message };
  }
}

// Action to update an existing branding product
export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
): Promise<{ success: boolean; error?: string }> {
  try {
    await updateBrandingProductService(id, product as any);
    revalidatePath('/dashboard/branding');
    revalidatePath(`/dashboard/branding/brand/${id}`);
    await triggerRevalidation({ path: `/branding/${id}` });
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: any) {
    console.error('Error updating branding product:', error);
    return { success: false, error: error.message };
  }
}

// Action to delete a branding product
export async function deleteBrandingProduct(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await deleteBrandingProductService(id);
    revalidatePath('/dashboard/branding');
    await triggerRevalidation({ path: '/branding' });
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting branding product:', error);
    return { success: false, error: error.message };
  }
}
