import { requireAdminUser } from "../auth";
import { createSupabaseServerClient } from "../server";

export async function getDashboardKpis() {
    await requireAdminUser();
    const supabase = await createSupabaseServerClient();

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
    const occupancyRate = properties.length > 0 ? (occupiedCount / properties.length) * 100 : 0;

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
    await requireAdminUser();
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
        .from('tenants')
        .select(`
            id,
            name,
            status,
            properties(title, price)
        `)
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error fetching recent leases:', error);
        return [];
    }

    return data.map((lease) => {
        const property = Array.isArray(lease.properties)
            ? lease.properties[0]
            : lease.properties;

        return {
            id: lease.id,
            tenant: lease.name,
            property: property?.title || 'N/A',
            amount: property?.price ? `R${property.price.toLocaleString()}/mo` : 'N/A',
            status: lease.status,
        };
    });
}
