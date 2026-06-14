"use server";

import { submitBrandingInquiry as submitBrandingInquiryService } from "@repo/supabase/Mutations/branding";
import {
  type Branding,
  type BrandingInquiry,
  brandingInquirySchema,
  brandingSchema,
} from "@repo/contracts/branding";
import { type ActionResult } from "@repo/contracts/actionResult";
import { getCachedBrandingRowById, getCachedBrandingRows } from "../_lib/cached-public-data";

export type BrandingRecord = Branding & { id: string };

function parseBrandingRecord(data: unknown): BrandingRecord {
  // Map snake_case from DB to camelCase for schema
  const dbData = data as any;
  const mappedData = {
    ...dbData,
    isFeatured: dbData.is_featured,
  };
  const product = brandingSchema.parse(mappedData);
  if (!product.id) {
    throw new Error("Branding record is missing an id.");
  }
  return product as BrandingRecord;
}

export async function getBrandingProducts(): Promise<BrandingRecord[]> {
  try {
    const products = await getCachedBrandingRows();
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
    return parseBrandingRecord(await getCachedBrandingRowById(id));
  } catch (error) {
    console.error("Error fetching branding product:", error);
    return null;
  }
}

export async function submitBrandingInquiry(
  data: BrandingInquiry,
): Promise<ActionResult> {
  const validatedFields = brandingInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ok: false,
      error: "Invalid data provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const { customerName, productId, ...rest } = validatedFields.data;
    await submitBrandingInquiryService({
      ...rest,
      customer_name: customerName,
      product_id: productId,
    });
    return { ok: true, message: "Inquiry submitted successfully!" };
  } catch (error) {
    console.error("Supabase error:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
