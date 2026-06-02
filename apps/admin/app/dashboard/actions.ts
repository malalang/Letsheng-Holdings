'use server';

import { getDashboardKpis as getDashboardKpisService, getRecentLeases as getRecentLeasesService } from "@repo/supabase";

export async function getDashboardKpis() {
    return await getDashboardKpisService();
}

export async function getRecentLeases() {
    return await getRecentLeasesService();
}
