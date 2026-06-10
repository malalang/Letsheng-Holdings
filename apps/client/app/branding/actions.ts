"use server";

import {
  type Branding,
  type BrandingInquiry,
  brandingInquirySchema,
  brandingSchema,
} from "@repo/supabase";
import {
  getBrandingById as getBrandingProductService,
  getBranding as getBrandingProductsService,
  submitBrandingInquiry as submitBrandingInquiryService,
} from "@repo/supabase/services/branding";

export type BrandingRecord = Branding & { id: string };

function parseBrandingRecord(data: unknown): BrandingRecord {
  const product = brandingSchema.parse(data);
  if (!product.id) {
    throw new Error("Branding record is missing an id.");
  }
  return product as BrandingRecord;
}

export async function getBrandingProducts(): Promise<BrandingRecord[]> {
  try {
    const products = await getBrandingProductsService();
    return products.map(parseBrandingRecord);
  } catch (error) {
    console.error("Error fetching branding products:", error);
    return [];
  }
}

export async function getBrandingProduct(
  id: string,
): Promise<BrandingRecord | null> {
  try {
    return parseBrandingRecord(await getBrandingProductService(id));
  } catch (error) {
    console.error("Error fetching branding product:", error);
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
      error: "Invalid data provided.",
    };
  }

  try {
    await submitBrandingInquiryService(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error("Supabase error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
