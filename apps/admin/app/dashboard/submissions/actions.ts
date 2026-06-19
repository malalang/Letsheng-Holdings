"use server";

import type { ActionResult } from "@repo/contracts/actionResult";
import {
  deleteBrandingInquiry as deleteBrandingInquiryService,
  updateBrandingInquiryStatus as updateBrandingInquiryStatusService,
} from "@repo/supabase/Mutations/branding";
import {
  deleteLeaseApplication as deleteLeaseApplicationService,
  updateLeaseApplicationStatus as updateLeaseApplicationStatusService,
} from "@repo/supabase/Mutations/properties";
import { getBrandingInquiries as getBrandingInquiriesService } from "@repo/supabase/Queries/branding";
import { getLeaseApplications as getLeaseApplicationsService } from "@repo/supabase/Queries/properties";
import { revalidatePath } from "next/cache";

// Action to update the status of a branding inquiry
export async function updateBrandingInquiryStatus(
  id: string,
  status: string,
): Promise<ActionResult> {
  try {
    await updateBrandingInquiryStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}

// Action to delete a branding inquiry
export async function deleteBrandingInquiry(id: string): Promise<ActionResult> {
  try {
    await deleteBrandingInquiryService(id);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}

// Action to update the status of a lease application
export async function updateLeaseApplicationStatus(
  id: string,
  status: string,
): Promise<ActionResult> {
  try {
    await updateLeaseApplicationStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}

// Action to delete a lease application
export async function deleteLeaseApplication(
  id: string,
): Promise<ActionResult> {
  try {
    await deleteLeaseApplicationService(id);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}

// Fetches all lease applications with property titles
export async function getLeaseApplications() {
  try {
    const data = await getLeaseApplicationsService();
    return data.map((app) => ({
      id: app.id,
      createdAt: app.createdAt,
      status: app.status,
      applicantName: app.applicantName,
      email: app.email,
      phone: app.phone,
      employment: app.employment as any,
      message: app.message,
      propertyTitle: (app.properties as any)?.title ?? "Property Not Found",
      propertyId: (app.properties as any)?.id ?? "",
    }));
  } catch (error) {
    console.error("Error fetching lease applications:", error);
    return [];
  }
}

// Fetches all branding inquiries with product titles
export async function getBrandingInquiries() {
  try {
    const data = await getBrandingInquiriesService();
    return data.map((inquiry) => ({
      id: inquiry.id,
      createdAt: inquiry.createdAt,
      status: inquiry.status,
      customerName: inquiry.customerName,
      email: inquiry.email,
      company: inquiry.company,
      quantity: inquiry.quantity,
      message: inquiry.message,
      productTitle: (inquiry.branding as any)?.title ?? "Product Not Found",
      productId: (inquiry.branding as any)?.id ?? "",
    }));
  } catch (error) {
    console.error("Error fetching branding inquiries:", error);
    return [];
  }
}
