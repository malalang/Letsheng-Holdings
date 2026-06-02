'use server';

import { getBranding as getBrandingProductsService, getBrandingById as getBrandingProductService, createBranding as createBrandingProductService, updateBranding as updateBrandingProductService, deleteBranding as deleteBrandingProductService, submitBrandingInquiry as submitBrandingInquiryService, brandingInquirySchema, type Branding } from "@repo/supabase";
import { revalidatePath } from 'next/cache';

export async function getBrandingProducts() {
  try {
    return await getBrandingProductsService();
  } catch (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }
}

export async function getBrandingProduct(id: string) {
  try {
    return await getBrandingProductService(id);
  } catch (error) {
    console.error('Error fetching branding product:', error);
    return null;
  }
}

export async function createBrandingProduct(product: Branding) {
  try {
    const data = await createBrandingProductService(product as any);
    revalidatePath('/dashboard/branding');
    return { data };
  } catch (error) {
    console.error('Error creating branding product:', error);
    return { error };
  }
}

export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
) {
  try {
    const data = await updateBrandingProductService(id, product as any);
    revalidatePath('/dashboard/branding');
    revalidatePath(`/dashboard/branding/brand/${id}`);
    return { data };
  } catch (error) {
    console.error('Error updating branding product:', error);
    return { error };
  }
}

export async function deleteBrandingProduct(id: string) {
  try {
    const data = await deleteBrandingProductService(id);
    revalidatePath('/dashboard/branding');
    return { data };
  } catch (error) {
    console.error('Error deleting branding product:', error);
    return { error };
  }
}

export async function submitBrandingInquiry(data: any): Promise<{ success: boolean; error?: string }> {
  const validatedFields = brandingInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid data provided.',
    };
  }

  try {
    await submitBrandingInquiryService(validatedFields.data);
    revalidatePath('/branding');
    return { success: true };
  } catch (error) {
    console.error('Supabase error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
