'use server';

import {
  brandingInquirySchema,
  getBranding as getBrandingProductsService,
  getBrandingById as getBrandingProductService,
  submitBrandingInquiry as submitBrandingInquiryService,
  type BrandingInquiry,
} from "@repo/supabase";

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

export async function submitBrandingInquiry(
  data: BrandingInquiry,
): Promise<{ success: boolean; error?: string }> {
  const validatedFields = brandingInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid data provided.',
    };
  }

  try {
    await submitBrandingInquiryService(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error('Supabase error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
