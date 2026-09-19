"use server";

import type { ActionResult } from "@letsheng-holdings/contracts/actionResult";
import {
  type LeaseApplicationType,
  leaseApplicationSchema,
} from "@letsheng-holdings/contracts/leaseApplication";
import {
  type PropertyType,
  propertySchema,
} from "@letsheng-holdings/contracts/property";
import { submitLeaseApplication as submitLeaseApplicationService } from "@letsheng-holdings/supabase/Mutations/properties";
import {
  getCachedPropertyRowById,
  getCachedPropertyRows,
} from "../../_lib/cached-public-data";

export type PropertyRecord = PropertyType & { id: string };

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
  data: LeaseApplicationType,
): Promise<ActionResult> {
  const validatedData = leaseApplicationSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      ok: false,
      error: "Invalid data",
      fieldErrors: validatedData.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  try {
    await submitLeaseApplicationService(validatedData.data);
    return { ok: true, message: "Application submitted successfully!" };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
    };
  }
}
