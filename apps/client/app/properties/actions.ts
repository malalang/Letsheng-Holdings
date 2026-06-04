'use server';

import { z } from "zod";
import {
  leaseApplicationSchema,
  propertySchema,
  type Property,
} from "@repo/supabase";
import {
  getProperties as getPropertiesService,
  getPropertyById as getPropertyByIdService,
  submitLeaseApplication as submitLeaseApplicationService,
} from "@repo/supabase/services/properties";

export type PropertyRecord = Property & { id: string };

function parsePropertyRecord(data: unknown): PropertyRecord {
  const property = propertySchema.parse(data);
  if (!property.id) {
    throw new Error("Property record is missing an id.");
  }
  return property as PropertyRecord;
}

export async function getProperties(): Promise<PropertyRecord[]>{
  const properties = await getPropertiesService();
  return properties.map(parsePropertyRecord);
}

export async function getPropertyById(id: string): Promise<PropertyRecord>{
  return parsePropertyRecord(await getPropertyByIdService(id));
}

export async function submitLeaseApplication(data: z.infer<typeof leaseApplicationSchema>) {
    const validatedData = leaseApplicationSchema.safeParse(data);

    if (!validatedData.success) {
        return { success: false, error: 'Invalid data' };
    }

    try {
        await submitLeaseApplicationService(validatedData.data);
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
