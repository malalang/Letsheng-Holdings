import { z } from "zod";
import { galleryItemSchema, reviewSchema } from "./property";
import {
  emailSchema,
  nullableImageSourceSchema,
  numberInputSchema,
  optionalNullableStringSchema,
} from "./utils";

export const specItemSchema = z.object({
  label: z.string().trim().min(1, "Label is required"),
  value: z.string().trim().min(1, "Value is required"),
});

export type SpecItemType = z.infer<typeof specItemSchema>;

export const brandingSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  category: z.string().trim().min(3, "Category is required"),
  description: optionalNullableStringSchema(z.string().trim()),
  image: nullableImageSourceSchema("Must be a valid image URL or app path"),
  specs: z.array(specItemSchema).optional().nullable(),
  isFeatured: z.boolean(), // camelCase
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type BrandingType = z.infer<typeof brandingSchema>;

export const brandingInquirySchema = z.object({
  customerName: z.string().trim().min(1, "Name is required"), // camelCase
  email: emailSchema,
  company: optionalNullableStringSchema(z.string().trim()),
  quantity: numberInputSchema(
    z
      .number()
      .int("Quantity must be a whole number")
      .positive("Quantity must be a positive number"),
  ),
  message: optionalNullableStringSchema(z.string().trim()),
  productId: z.string().min(1, "Product is required"), // camelCase
});

export type BrandingInquiryType = z.infer<typeof brandingInquirySchema>;
