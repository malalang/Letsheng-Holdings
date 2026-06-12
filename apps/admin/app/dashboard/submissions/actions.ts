"use server";

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
import { triggerRevalidation } from "@/lib/revalidation";

// Action to update the status of a branding inquiry
export async function updateBrandingInquiryStatus(id: string, status: string) {
  try {
    const result = await updateBrandingInquiryStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to delete a branding inquiry
export async function deleteBrandingInquiry(id: string) {
  try {
    const result = await deleteBrandingInquiryService(id);
    revalidatePath("/dashboard/submissions");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to update the status of a lease application
export async function updateLeaseApplicationStatus(id: string, status: string) {
  try {
    const result = await updateLeaseApplicationStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Action to delete a lease application
export async function deleteLeaseApplication(id: string) {
  try {
    const result = await deleteLeaseApplicationService(id);
    revalidatePath("/dashboard/submissions");
    await triggerRevalidation(result.revalidate);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// Fetches all lease applications with property titles
export async function getLeaseApplications() {
  try {
    const data = await getLeaseApplicationsService();
    return data.map((app: any) => ({
      ...app,
      property_title: app.properties?.title ?? "Property Not Found",
      property_id: app.properties?.id ?? "",
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
    return data.map((inquiry: any) => ({
      ...inquiry,
      product_title: inquiry.branding?.title ?? "Product Not Found",
      product_id: inquiry.branding?.id ?? "",
    }));
  } catch (error) {
    console.error("Error fetching branding inquiries:", error);
    return [];
  }
}
