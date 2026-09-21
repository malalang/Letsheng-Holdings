import { z } from "zod";
import { emailSchema, optionalNullableStringSchema } from "./schemaPrimitives";

export const leaseApplicationSchema = z.object({
  applicantName: z.string().trim().min(1, "Name is required"), // camelCase
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  employment: z.enum(["employed", "self-employed", "unemployed", "student"]),
  message: optionalNullableStringSchema(z.string().trim()),
  propertyId: z.string(), // camelCase
});

export type LeaseApplicationType = z.infer<typeof leaseApplicationSchema>;
