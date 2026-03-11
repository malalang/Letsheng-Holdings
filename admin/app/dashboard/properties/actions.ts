'use server';

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { propertySchema, Property } from "@/lib/validations/schemas";

export async function getProperties() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("properties").select("*");
  if (error) throw new Error(error.message);
  return propertySchema.array().parse(data);
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return propertySchema.parse(data);
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
): Promise<{ success: boolean; error: string | null }> {
  const supabase = await createClient();
  try {
    const validatedData = propertySchema.parse(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, ...updateData } = validatedData;

    const { error } = await supabase
      .from("properties")
      .update(updateData)
      .eq("id", id);

    if (error) {
      console.error("Supabase update error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/dashboard/properties");
    revalidatePath(`/dashboard/properties/property/${id}`);
    return { success: true, error: null };
  } catch (e) {
    const error = e as Error;
    console.error("Validation or unexpected error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteProperty(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/properties");
}
