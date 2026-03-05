import TenantForm from "../tenant-form";

export default function NewTenantPage() {
    return (
        <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl font-bold mb-4">
                Create New Tenant
            </h1>
            <TenantForm />
        </div>
    )
}
