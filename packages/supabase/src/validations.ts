import { z } from "zod";

const addSchemaIssue = (ctx: z.RefinementCtx, error: z.ZodError) => {
  ctx.addIssue({
    code: "custom",
    message: error.issues[0]?.message ?? "Invalid value",
  });
};

const parseWithSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
  value: unknown,
  ctx: z.RefinementCtx,
): z.output<Schema> => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    addSchemaIssue(ctx, parsed.error);
    return z.NEVER;
  }

  return parsed.data;
};

const nullableStringSchema = <Schema extends z.ZodTypeAny>(schema: Schema) =>
  z.union([
    z.string().transform((value, ctx) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        return null;
      }

      return parseWithSchema(schema, trimmedValue, ctx);
    }),
    z.null(),
  ]);

const optionalNullableStringSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
) =>
  nullableStringSchema(schema).optional();

const emailSchema = z.string().trim().email("Invalid email address");
const optionalNullableEmailSchema = optionalNullableStringSchema(emailSchema);

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

const dateInputSchema = z.union([
  z.date(),
  z.string().trim().transform((value, ctx) => {
    if (value === "") {
      ctx.addIssue({
        code: "custom",
        message: "Date is required.",
      });
      return z.NEVER;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a valid date.",
      });
      return z.NEVER;
    }

    return date;
  }),
]);

const nullableDateSchema = z.union([
  z.string().trim().length(0).transform(() => null),
  z.null(),
  dateInputSchema,
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

// Schema for a single gallery item
export const galleryItemSchema = z.object({
  imageUrl: imageSourceSchema("Please enter a valid image URL or app path."),
  title: z.string().trim().min(1, "Title is required"),
  description: optionalNullableStringSchema(z.string().trim()),
});
export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type galleryItem = GalleryItem;

// Schema for a single review
export const reviewSchema = z.object({
  id: z.string().optional(),
  author: z.string().trim().min(1, "Author is required"),
  rating: numberInputSchema(z.number().int().min(1).max(5)),
  comment: z.string().trim().min(1, "Comment is required"),
});
export type Review = z.infer<typeof reviewSchema>;

// Schema for a single feature, which is just a string
export const featureSchema = z.string().trim().min(1, "Feature is required");

// Schema for a property
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
  imageUrl: nullableImageSourceSchema("Must be a valid image URL or app path"),
  bedrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bedroom"),
  ),
  bathrooms: nullableNumberSchema(
    z.number().int().min(1, "Must have at least one bathroom"),
  ),
  type: nullableStringSchema(z.string().trim().min(1, "Type is required")),
  features: z.array(featureSchema).optional().nullable(),
  isFeatured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Property = z.infer<typeof propertySchema>;

// Schema for a branding product specification
export const specItemSchema = z.object({
  label: z.string().trim().min(1, "Label is required"),
  value: z.string().trim().min(1, "Value is required"),
});
export type SpecItem = z.infer<typeof specItemSchema>;

// Schema for a branding product. Note: `image` is used for the main image URL.
export const brandingSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  category: z.string().trim().min(3, "Category is required"),
  description: optionalNullableStringSchema(z.string().trim()),
  image: nullableImageSourceSchema("Must be a valid image URL or app path"),
  specs: z.array(specItemSchema).optional().nullable(),
  isFeatured: z.boolean(),
  gallery: z.array(galleryItemSchema).optional().nullable(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

export type Branding = z.infer<typeof brandingSchema>;

// Schema for a tenant
export const tenantSchema = z.object({
    id: z.string().optional(),
    name: z.string().trim().min(1, "Name is required"),
    email: optionalNullableEmailSchema,
    propertyId: nullableStringSchema(z.string()),
    status: z.enum(["Active", "Inactive", "Pending"]),
    leaseEndDate: nullableDateSchema,
    avatarUrl: nullableImageSourceSchema(
      "Must be a valid image URL or app path.",
    ).optional(),
  });

export type Tenant = z.infer<typeof tenantSchema>;

// Schema for a payment
export const paymentSchema = z.object({
  id: z.string().optional(),
  amount: numberInputSchema(
    z.number().positive("Amount must be a positive number"),
  ),
  date: dateInputSchema,
  status: z.enum(["Paid", "Pending", "Late"]),
  tenantId: optionalNullableStringSchema(z.string()),
});

export type Payment = z.infer<typeof paymentSchema>;

// Schema for a branding inquiry
export const brandingInquirySchema = z.object({
  customerName: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  company: optionalNullableStringSchema(z.string().trim()),
  quantity: numberInputSchema(
    z
      .number()
      .int("Quantity must be a whole number")
      .positive("Quantity must be a positive number"),
  ),
  message: optionalNullableStringSchema(z.string().trim()),
  productId: z.string().min(1, "Product is required"),
});

export type BrandingInquiry = z.infer<typeof brandingInquirySchema>;

// Schema for a general contact message
export const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  subject: optionalNullableStringSchema(z.string().trim()),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;

// Schema for a lease application
export const leaseApplicationSchema = z.object({
  applicantName: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  employment: z.enum(["employed", "self-employed", "unemployed", "student"]),
  message: optionalNullableStringSchema(z.string().trim()),
  propertyId: z.string(),
});

export type LeaseApplication = z.infer<typeof leaseApplicationSchema>;
