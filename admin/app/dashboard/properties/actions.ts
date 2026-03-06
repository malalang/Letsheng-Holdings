'use server';

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { propertySchema, Property } from "@/lib/validations/schemas";

export async function getProperties(): Promise<Property[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return (data as Property[]) || [];
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data as Property | null;
}

export async function createProperty(data: Property) {
  const supabase = await createClient();
  const validatedData = propertySchema.parse(data);

  const { error } = await supabase.from("properties").insert([validatedData]);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/properties");
}

export async function updateProperty(
  id: string,
  data: Property,
) {
  const supabase = await createClient();
  const validatedData = propertySchema.parse(data);

  const { error } = await supabase
    .from("properties")
    .update(validatedData)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/properties");
  revalidatePath(`/dashboard/properties/property/${id}`);
}

export async function deleteProperty(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/properties");
}
