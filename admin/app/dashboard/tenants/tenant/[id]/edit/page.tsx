import { getTenantById } from "../../../actions";
import TenantForm from "../../../tenant-form";

export default async function EditTenantPage({ params }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const tenant = await getTenantById(id);

    if (!tenant) {
        return <div>Tenant not found</div>;
    }

    return (
        <TenantForm tenant={tenant} />
    );
}
