import { z } from "zod";

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

const nullableNumberSchema = (schema: z.ZodNumber) =>
  z.union([
    z.string().trim().length(0).transform(() => null),
    z.null(),
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

export const galleryItemSchema = z.object({
  imageUrl: imageSourceSchema("Please enter a valid image URL or app path."),
  title: z.string().trim().min(1, "Title is required"),
  description: optionalNullableStringSchema(z.string().trim()),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;

export const reviewSchema = z.object({
  id: z.string().optional(),
  author: z.string().trim().min(1, "Author is required"),
  rating: numberInputSchema(z.number().int().min(1).max(5)),
  comment: z.string().trim().min(1, "Comment is required"),
});

export type Review = z.infer<typeof reviewSchema>;

export const featureSchema = z.string().trim().min(1, "Feature is required");

export const propertySchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  description: optionalNullableStringSchema(z.string().trim()),
  price: numberInputSchema(z.number().positive("Price must be a positive number")),
  location: nullableStringSchema(z.string().trim().min(3, "Location is required")),
  availability: z.boolean(),
  imageUrl: nullableImageSourceSchema("Must be a valid image URL or app path"), // camelCase
  bedrooms: nullableNumberSchema(z.number().int().min(1, "Must have at least one bedroom")),
  bathrooms: nullableNumberSchema(z.number().int().min(1, "Must have at least one bathroom")),
  type: nullableStringSchema(z.string().trim().min(1, "Type is required")),
  features: z.array(featureSchema).optional().nullable(),
  isFeatured: z.boolean(), // camelCase
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;
