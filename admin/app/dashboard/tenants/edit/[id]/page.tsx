import { samplePayments, sampleTenants } from "../../data";
import { TenantForm } from "./form";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const tenant = sampleTenants.find((t) => t.id === id)

    const payments = samplePayments.filter((p) => p.tenantId === id)

    return <TenantForm tenant={tenant} payments={payments} />;
}
