'use server';

import { createClient } from '@/lib/supabase/server';
import { type Branding, brandingInquirySchema, type BrandingInquiry } from '@/lib/validations/schemas';
import { revalidatePath } from 'next/cache';

export async function getBrandingProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('branding').select('*').order("is_featured", { ascending: false });

  if (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }

  return data;
}

export async function getBrandingProduct(id: string) {
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

  return data;
}

export async function createBrandingProduct(product: Branding) {
  const supabase = await createClient();
  const { is_featured, ...rest } = product;
  const productForDb = { ...rest, is_featured: is_featured };

  const { data, error } = await supabase.from('branding').insert([productForDb]);

  if (error) {
    console.error('Error creating branding product:', error);
    return { error };
  }

  revalidatePath('/dashboard/branding');
  return { data };
}

export async function updateBrandingProduct(
  id: string,
  product: Partial<Branding>,
) {
  const supabase = await createClient();
  const { is_featured, ...rest } = product;

  const updateData: { [key: string]: any } = { ...rest };
  if (is_featured !== undefined) {
    updateData.is_featured = is_featured;
  }

  const { data, error } = await supabase
    .from('branding')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('Error updating branding product:', error);
    return { error };
  }

  revalidatePath('/dashboard/branding');
  revalidatePath(`/dashboard/branding/brand/${id}`);
  return { data };
}

export async function deleteBrandingProduct(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from('branding').delete().eq('id', id);

  if (error) {
    console.error('Error deleting branding product:', error);
    return { error };
  }

  revalidatePath('/dashboard/branding');
  return { data };
}

export async function submitBrandingInquiry(data: BrandingInquiry): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  const validatedFields = brandingInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid data provided.',
    };
  }

  const { error } = await supabase.from('branding_inquiries').insert({
    customer_name: validatedFields.data.name,
    email: validatedFields.data.email,
    company: validatedFields.data.company,
    quantity: validatedFields.data.quantity,
    message: validatedFields.data.message,
    product_id: validatedFields.data.productId,
    status: 'New', // Default status for new inquiries
  });

  if (error) {
    console.error('Supabase error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }

  revalidatePath('/branding'); // Or a more specific path if you prefer

  return {
    success: true,
  };
}
