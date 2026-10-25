"use server";

import { requireAdminUser } from "@letsheng-holdings/supabase/auth";
import { getPayments as getPaymentsService } from "@letsheng-holdings/supabase/Queries/tenants";

export async function getPayments() {
  await requireAdminUser();
  try {
    const payments = await getPaymentsService();
    return payments || [];
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
}
