'use server';

import { createClient } from "@/lib/supabase/server";
import { Property, leaseApplicationSchema } from "@/lib/validations/schemas";
import { z } from "zod";

export async function getProperties(){
  const supabase = await createClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return data ;
}

export async function getPropertyById(id: string){
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data
}

export async function submitLeaseApplication(data: z.infer<typeof leaseApplicationSchema>) {
    const supabase = await createClient();
    const validatedData = leaseApplicationSchema.safeParse(data);

    if (!validatedData.success) {
        return { success: false, error: 'Invalid data' };
    }

    const { applicant_name, email, phone, employment, message, property_id } = validatedData.data;

    const { error } = await supabase.from('lease_applications').insert([
        { applicant_name, email, phone, employment, message, property_id, status: 'pending' },
    ]);

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true };
}
