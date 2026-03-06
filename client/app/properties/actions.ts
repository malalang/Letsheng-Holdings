'use server';

import { createClient } from "@/lib/supabase/server";
import { Property } from "@/lib/validations/schemas";

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
