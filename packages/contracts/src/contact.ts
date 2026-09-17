import { z } from "zod";
import { emailSchema, optionalNullableStringSchema } from "./utils";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: emailSchema,
  phone: optionalNullableStringSchema(z.string().trim()),
  subject: optionalNullableStringSchema(z.string().trim()),
  message: z.string().trim().min(1, "Message is required"),
});

export type ContactType = z.infer<typeof contactSchema>;
