import { z } from "zod";
import {
  emailSchema,
  nullableImageSourceSchema,
  nullableStringSchema,
  numberInputSchema,
  optionalNullableStringSchema,
  parseWithSchema,
} from "./utils";

const optionalNullableEmailSchema = optionalNullableStringSchema(emailSchema);

const dateInputSchema = z.union([
  z.date(),
  z
    .string()
    .trim()
    .transform((value, ctx) => {
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
  z
    .string()
    .trim()
    .length(0)
    .transform(() => null),
  z.null(),
  dateInputSchema,
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

export type TenantType = z.infer<typeof tenantSchema>;

export const paymentSchema = z.object({
  id: z.string().optional(),
  amount: numberInputSchema(
    z.number().positive("Amount must be a positive number"),
  ),
  date: dateInputSchema,
  status: z.enum(["Paid", "Pending", "Late"]),
  tenantId: optionalNullableStringSchema(z.string()), // camelCase
});

export type PaymentType = z.infer<typeof paymentSchema>;
