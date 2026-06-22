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

const emailSchema = z.string().trim().email("Invalid email address");
const optionalNullableEmailSchema = optionalNullableStringSchema(emailSchema);

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

export const tenantSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1, "Name is required"),
  email: optionalNullableEmailSchema,
  propertyId: nullableStringSchema(z.string()), // camelCase
  status: z.enum(["Active", "Inactive", "Pending"]),
  leaseEndDate: nullableDateSchema, // camelCase
  avatarUrl: nullableImageSourceSchema(
    "Must be a valid image URL or app path.",
  ).optional(), // camelCase
});

export type Tenant = z.infer<typeof tenantSchema>;

export const paymentSchema = z.object({
  id: z.string().optional(),
  amount: numberInputSchema(
    z.number().positive("Amount must be a positive number"),
  ),
  date: dateInputSchema,
  status: z.enum(["Paid", "Pending", "Late"]),
  tenantId: optionalNullableStringSchema(z.string()), // camelCase
});

export type Payment = z.infer<typeof paymentSchema>;
