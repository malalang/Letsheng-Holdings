'use server';

import { createClient } from '@/lib/supabase/server';
import { type Branding } from '@/lib/validations/schemas';

export async function getBrandingProducts(): Promise<Branding[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from('branding').select('*');

  if (error) {
    console.error('Error fetching branding products:', error);
    return [];
  }

  return data as any;
}

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
