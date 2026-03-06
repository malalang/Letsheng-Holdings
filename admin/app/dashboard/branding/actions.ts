'use server';

import { createClient } from '@/lib/supabase/server';
import { type Branding } from '@/lib/validations/schemas';
import { revalidatePath } from 'next/cache';

// Action to fetch all branding products
export async function getBrandingProducts(): Promise<Branding[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('branding').select('*');

  if (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }

  return data as any;
}

// Action to fetch a single branding product by its ID
export async function getBrandingProduct(id: string): Promise<Branding | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('branding')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching branding product:', error);
    return null;
  }

  return data as any;
}

// Action to create a new branding product
export async function createBrandingProduct(
  product: Branding,
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from('branding').insert([product]);

  if (error) {
    console.error('Error creating branding product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/branding');
  return { success: true };
}

// Action to update an existing branding product
export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from('branding').update(product).eq('id', id);

  if (error) {
    console.error('Error updating branding product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/branding');
  revalidatePath(`/dashboard/branding/brand/${id}`);
  return { success: true };
}

// Action to delete a branding product
export async function deleteBrandingProduct(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from('branding').delete().eq('id', id);

  if (error) {
    console.error('Error deleting branding product:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/branding');
  return { success: true };
}
