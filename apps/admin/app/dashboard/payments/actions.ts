"use server";

import { getPayments as getPaymentsService } from "@repo/supabase/Queries/tenants";

export async function getPayments() {
  try {
    const payments = await getPaymentsService();
    return payments || [];
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
}
