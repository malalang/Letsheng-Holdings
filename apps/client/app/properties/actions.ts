"use server";

import { submitLeaseApplication as submitLeaseApplicationService } from "@repo/supabase/Mutations/properties";
import {
  propertySchema,
  type Property,
} from "@repo/contracts/property";
import { leaseApplicationSchema, type LeaseApplication } from "@repo/contracts/leaseApplication";
import { type ActionResult } from "@repo/contracts/actionResult";
import { getCachedPropertyRowById, getCachedPropertyRows } from "../_lib/cached-public-data";

export type PropertyRecord = Property & { id: string };

function parsePropertyRecord(data: unknown): PropertyRecord {
  const property = propertySchema.parse(data);
  if (!property.id) {
    throw new Error("Property record is missing an id.");
  }
  return property as PropertyRecord;
}

export async function getProperties(): Promise<PropertyRecord[]> {
  const properties = await getCachedPropertyRows();
  return properties.map(parsePropertyRecord);
}

export async function getPropertyById(id: string): Promise<PropertyRecord> {
  return parsePropertyRecord(await getCachedPropertyRowById(id));
}

export async function submitLeaseApplication(
  data: LeaseApplication,
): Promise<ActionResult> {
  const validatedData = leaseApplicationSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      ok: false,
      error: "Invalid data",
      fieldErrors: validatedData.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await submitLeaseApplicationService(validatedData.data);
    return { ok: true, message: "Application submitted successfully!" };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
}
