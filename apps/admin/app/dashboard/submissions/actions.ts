"use server";

import type { ActionResult } from "@repo/contracts/actionResult";
import {
  deleteBrandingInquiry as deleteBrandingInquiryService,
  updateBrandingInquiryStatus as updateBrandingInquiryStatusService,
} from "@repo/supabase/Mutations/branding";
import {
  deleteContactMessage as deleteContactMessageService,
  updateContactMessageStatus as updateContactMessageStatusService,
} from "@repo/supabase/Mutations/contact";
import {
  deleteLeaseApplication as deleteLeaseApplicationService,
  updateLeaseApplicationStatus as updateLeaseApplicationStatusService,
} from "@repo/supabase/Mutations/properties";
import { getBrandingInquiries as getBrandingInquiriesService } from "@repo/supabase/Queries/branding";
import { getContactMessages as getContactMessagesService } from "@repo/supabase/Queries/contact";
import { getLeaseApplications as getLeaseApplicationsService } from "@repo/supabase/Queries/properties";
import { revalidatePath } from "next/cache";

type LeaseApplicationWithProperty = Awaited<
  ReturnType<typeof getLeaseApplicationsService>
>[number] & {
  properties: { id: string; title: string } | null;
};

type BrandingInquiryWithProduct = Awaited<
  ReturnType<typeof getBrandingInquiriesService>
>[number] & {
  branding: { id: string; title: string } | null;
};

type LeaseEmployment =
  | "employed"
  | "self-employed"
  | "unemployed"
  | "student"
  | null;

type LeaseApplicationTableEntry = {
  id: string;
  createdAt: string;
  status: string;
  applicantName: string;
  email: string;
  phone: string | null;
  employment: LeaseEmployment;
  message: string | null;
  propertyTitle: string;
  propertyId: string;
};

const leaseEmploymentValues = new Set([
  "employed",
  "self-employed",
  "unemployed",
  "student",
]);

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected error";
}

function normalizeLeaseEmployment(value: string | null): LeaseEmployment {
  return value && leaseEmploymentValues.has(value)
    ? (value as Exclude<LeaseEmployment, null>)
    : null;
}

export async function updateBrandingInquiryStatus(
  id: string,
  status: string,
): Promise<ActionResult> {
  try {
    await updateBrandingInquiryStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function deleteBrandingInquiry(id: string): Promise<ActionResult> {
  try {
    await deleteBrandingInquiryService(id);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function updateLeaseApplicationStatus(
  id: string,
  status: string,
): Promise<ActionResult> {
  try {
    await updateLeaseApplicationStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function deleteLeaseApplication(
  id: string,
): Promise<ActionResult> {
  try {
    await deleteLeaseApplicationService(id);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function updateContactMessageStatus(
  id: string,
  status: string,
): Promise<ActionResult> {
  try {
    await updateContactMessageStatusService(id, status);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function deleteContactMessage(id: string): Promise<ActionResult> {
  try {
    await deleteContactMessageService(id);
    revalidatePath("/dashboard/submissions");
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function getLeaseApplications(): Promise<
  LeaseApplicationTableEntry[]
> {
  try {
    const data =
      (await getLeaseApplicationsService()) as LeaseApplicationWithProperty[];
    return data.map((app) => ({
      id: app.id,
      createdAt: app.createdAt,
      status: app.status,
      applicantName: app.applicantName,
      email: app.email,
      phone: app.phone,
      employment: normalizeLeaseEmployment(app.employment),
      message: app.message,
      propertyTitle: app.properties?.title ?? "Property Not Found",
      propertyId: app.properties?.id ?? "",
    }));
  } catch (error) {
    console.error("Error fetching lease applications:", error);
    return [];
  }
}

export async function getBrandingInquiries() {
  try {
    const data =
      (await getBrandingInquiriesService()) as BrandingInquiryWithProduct[];
    return data.map((inquiry) => ({
      id: inquiry.id,
      createdAt: inquiry.createdAt,
      status: inquiry.status,
      customerName: inquiry.customerName,
      email: inquiry.email,
      company: inquiry.company,
      quantity: inquiry.quantity,
      message: inquiry.message,
      productTitle: inquiry.branding?.title ?? "Product Not Found",
      productId: inquiry.branding?.id ?? "",
    }));
  } catch (error) {
    console.error("Error fetching branding inquiries:", error);
    return [];
  }
}

export async function getContactMessages() {
  try {
    return await getContactMessagesService();
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return [];
  }
}
