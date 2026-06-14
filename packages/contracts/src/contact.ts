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

export const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  subject: optionalNullableStringSchema(z.string().trim()),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactMessage = z.infer<typeof contactMessageSchema>;
