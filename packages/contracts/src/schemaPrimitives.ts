import { z } from "zod";

export const parseWithSchema = <Schema extends z.ZodTypeAny>(
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

export const nullableStringSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
) =>
  z.union([
    z.string().transform((value, ctx) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") return null;
      return parseWithSchema(schema, trimmedValue, ctx);
    }),
    z.null(),
  ]);

export const optionalNullableStringSchema = <Schema extends z.ZodTypeAny>(
  schema: Schema,
) => nullableStringSchema(schema).optional();

export const emailSchema = z.string().trim().email("Invalid email address");

export const isValidImageSource = (value: string) => {
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

export const imageSourceSchema = (message: string) =>
  z.string().trim().min(1, message).refine(isValidImageSource, message);

export const nullableImageSourceSchema = (message: string) =>
  nullableStringSchema(imageSourceSchema(message));

export const numberInputSchema = (schema: z.ZodNumber) =>
  z.union([
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
