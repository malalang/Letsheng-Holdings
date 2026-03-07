'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

// Action to update the status of a branding inquiry
export async function updateBrandingInquiryStatus(id: string, status: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('branding_inquiries')
    .update({ status })
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/submissions');
  return { success: true };
}

// Action to delete a branding inquiry
export async function deleteBrandingInquiry(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('branding_inquiries').delete().eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/submissions');
  return { success: true };
}

// Action to update the status of a lease application
export async function updateLeaseApplicationStatus(id: string, status: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('lease_applications')
    .update({ status })
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/submissions');
  return { success: true };
}

// Action to delete a lease application
export async function deleteLeaseApplication(id: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('lease_applications')
    .delete()
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/dashboard/submissions');
  return { success: true };
}

// Fetches all lease applications with property titles
export async function getLeaseApplications() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('lease_applications')
    .select(
      `
      *,
      properties ( id, title )
      `
    );

  if (error) {
    console.error('Error fetching lease applications:', error);
    return [];
  }
  if (!data) {
    return [];
  }

  return data.map((app: any) => ({
    ...app,
    property_title: app.properties?.title ?? 'Property Not Found',
    property_id: app.properties?.id ?? '',
  }));
}

// Fetches all branding inquiries with product titles
export async function getBrandingInquiries() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('branding_inquiries')
    .select(
      `
      *,
      branding ( id, title )
      `
    );

  if (error) {
    console.error('Error fetching branding inquiries:', error);
    return [];
  }
  if (!data) {
    return [];
  }

  return data.map((inquiry: any) => ({
    ...inquiry,
    product_title: inquiry.branding?.title ?? 'Product Not Found',
    product_id: inquiry.branding?.id ?? '',
  }));
}
