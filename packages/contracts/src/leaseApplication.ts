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

export const leaseApplicationSchema = z.object({
  applicantName: z.string().trim().min(1, "Name is required"), // camelCase
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  employment: z.enum(["employed", "self-employed", "unemployed", "student"]),
  message: optionalNullableStringSchema(z.string().trim()),
  propertyId: z.string(), // camelCase
});

export type LeaseApplication = z.infer<typeof leaseApplicationSchema>;
