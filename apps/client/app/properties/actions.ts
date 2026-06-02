'use server';

import { getProperties as getPropertiesService, getPropertyById as getPropertyByIdService, submitLeaseApplication as submitLeaseApplicationService, leaseApplicationSchema } from "@repo/supabase";
import { z } from "zod";

export async function getProperties(){
  return await getPropertiesService();
}

export async function getPropertyById(id: string){
  return await getPropertyByIdService(id);
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
