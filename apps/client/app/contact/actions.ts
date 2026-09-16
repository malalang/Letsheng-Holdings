"use server";

import type { ActionResult } from "@letsheng-holdings/contracts/actionResult";
import {
  type ContactType,
  contactMessageSchema,
} from "@letsheng-holdings/contracts/contact";
import { submitContactMessage } from "@letsheng-holdings/supabase/Mutations/contact";

export async function sendContactMessage(
  data: ContactType,
): Promise<ActionResult> {
  const validatedFields = contactMessageSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ok: false,
      error: "Invalid contact details provided.",
      fieldErrors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
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
