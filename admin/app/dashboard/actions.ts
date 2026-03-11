'use server';

import { createClient } from "@/lib/supabase/server";

export async function getDashboardKpis() {
    const supabase = await createClient();

    const { data: properties, error: propertiesError } = await supabase
        .from('properties')
        .select('price, availability');

    if (propertiesError) {
        console.error('Error fetching properties:', propertiesError);
        return null;
    }

    const { data: brandingInquiries, error: inquiriesError } = await supabase
        .from('branding_inquiries')
        .select('id, status');

    if (inquiriesError) {
        console.error('Error fetching branding inquiries:', inquiriesError);
        return null;
    }

    const { data: payments, error: paymentsError } = await supabase
        .from('payments')
        .select('amount, status');

    if (paymentsError) {
        console.error('Error fetching payments:', paymentsError);
        return null;
    }

    // Calculate KPIs
    const totalRevenue = properties
        .filter(p => !p.availability) // Assumes occupied properties generate revenue
        .reduce((sum, p) => sum + p.price, 0);

    const occupiedCount = properties.filter(p => !p.availability).length;
    const occupancyRate = (occupiedCount / properties.length) * 100;

    const pendingOrders = brandingInquiries.filter(i => i.status === 'New').length;

    const overduePayments = payments.filter(p => p.status === 'Late');
    const overdueAmount = overduePayments.reduce((sum, p) => sum + p.amount, 0);

    return {
        totalRevenue,
        occupancyRate,
        pendingOrders,
        overdueAmount,
        overdueCount: overduePayments.length,
    };
}

export async function getRecentLeases() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('tenants')
        .select(`
            id,
            name,
            status,
            property:properties(title, price)
        `)
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error fetching recent leases:', error);
        return [];
    }

    return data.map(lease => ({
        id: lease.id,
        tenant: lease.name,
        property: lease.property?.title || 'N/A',
        amount: lease.property?.price ? `R${lease.property.price.toLocaleString()}/mo` : 'N/A',
        status: lease.status,
    }));
}
