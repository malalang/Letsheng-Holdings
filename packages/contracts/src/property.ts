import { z } from "zod";
import { galleryItemSchema } from "./gallery";
import {
  nullableImageSourceSchema,
  nullableStringSchema,
  numberInputSchema,
  optionalNullableStringSchema,
  parseWithSchema,
} from "./schemaPrimitives";

const nullableNumberSchema = (schema: z.ZodNumber) =>
  z.union([
    z
      .string()
      .trim()
      .length(0)
      .transform(() => null),
    z.null(),
    z.number().transform((value, ctx) => parseWithSchema(schema, value, ctx)),
    z
      .string()
      .trim()
      .transform((value, ctx) => {
        const numericValue = Number(value);
        if (!Number.isFinite(numericValue)) {
          ctx.addIssue({
            code: "custom",
            message: "Please enter a valid number.",
          });
          return z.NEVER;
        }
        return parseWithSchema(schema, numericValue, ctx);
      }),
  ]);

export const reviewSchema = z.object({
  id: z.string().optional(),
  author: z.string().trim().min(1, "Author is required"),
  rating: numberInputSchema(z.number().int().min(1).max(5)),
  comment: z.string().trim().min(1, "Comment is required"),
});

export type ReviewType = z.infer<typeof reviewSchema>;

export const featureSchema = z.string().trim().min(1, "Feature is required");

export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  description: optionalNullableStringSchema(z.string().trim()),
  price: numberInputSchema(
    z.number().positive("Price must be a positive number"),
  ),
  location: nullableStringSchema(
    z.string().trim().min(3, "Location is required"),
  ),
  availability: z.boolean(),
  imageUrl: nullableImageSourceSchema("Must be a valid image URL or app path"), // camelCase
  bedrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bedroom"),
  ),
  bathrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bathroom"),
  ),
  type: nullableStringSchema(z.string().trim().min(1, "Type is required")),
  features: z.array(featureSchema).optional().nullable(),
  isFeatured: z.boolean(), // camelCase
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type PropertyType = z.infer<typeof propertySchema>;
