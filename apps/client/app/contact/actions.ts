"use server";

import { submitContactMessage } from "@repo/supabase/Mutations/contact";
import {
  type ContactMessage,
  contactMessageSchema,
} from "@repo/contracts/contact";
import { type ActionResult } from "@repo/contracts/actionResult";

export async function sendContactMessage(
  data: ContactMessage,
): Promise<ActionResult> {
  const validatedFields = contactMessageSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ok: false,
      error: "Invalid contact details provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await submitContactMessage(validatedFields.data);
    return { ok: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
