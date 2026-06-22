import { z } from "zod";
import { galleryItemSchema, reviewSchema } from "./property";

const parseWithSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
  value: unknown,
  ctx: z.RefinementCtx,
): z.output<Schema> => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    ctx.addIssue({
      code: "custom",
      message: parsed.error.issues[0]?.message ?? "Invalid value",
    });
    return z.NEVER;
  }
  return parsed.data;
};

const nullableStringSchema = <Schema extends z.ZodTypeAny>(schema: Schema) =>
  z.union([
    z.string().transform((value, ctx) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") return null;
      return parseWithSchema(schema, trimmedValue, ctx);
    }),
    z.null(),
  ]);

const optionalNullableStringSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
) => nullableStringSchema(schema).optional();

const numberInputSchema = (schema: z.ZodNumber) =>
  z.union([
    z.number().transform((value, ctx) => parseWithSchema(schema, value, ctx)),
    z.string().trim().transform((value, ctx) => {
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

const isValidImageSource = (value: string) => {
  if (value.startsWith("/") && !value.startsWith("//")) {
    return value.length > 1;
  }
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const imageSourceSchema = (message: string) =>
  z.string().trim().min(1, message).refine(isValidImageSource, message);

const nullableImageSourceSchema = (message: string) =>
  nullableStringSchema(imageSourceSchema(message));

const emailSchema = z.string().trim().email("Invalid email address");

export const specItemSchema = z.object({
  label: z.string().trim().min(1, "Label is required"),
  value: z.string().trim().min(1, "Value is required"),
});

export type SpecItem = z.infer<typeof specItemSchema>;

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

export type Branding = z.infer<typeof brandingSchema>;

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

export type BrandingInquiry = z.infer<typeof brandingInquirySchema>;
