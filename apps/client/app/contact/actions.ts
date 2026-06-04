'use server';

import {
  contactMessageSchema,
  type ContactMessage,
} from "@repo/supabase";
import { submitContactMessage } from "@repo/supabase/services/contact";

export async function sendContactMessage(
  data: ContactMessage,
): Promise<{ success: boolean; error?: string }> {
  const validatedFields = contactMessageSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid contact details provided.",
    };
  }

  try {
    await submitContactMessage(validatedFields.data);
    return { success: true };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
