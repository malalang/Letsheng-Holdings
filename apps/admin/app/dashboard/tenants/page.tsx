import { PlusCircle, Search, Users } from "lucide-react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { getTenants } from "./actions";
import TenantCard from "./TenantCard";

export const metadata: Metadata = {
  title: "Tenants",
  description:
    "Manage your Letsheng Holdings resident portfolio and lease agreements.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export default async function AdminTenantsPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const rawQuery = resolvedSearchParams?.q;
  const query =
    (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery)?.trim() ?? "";

  const tenants = await getTenants();
  const normalizedQuery = query.toLowerCase();
  const filteredTenants = normalizedQuery
    ? tenants.filter(
        (tenant) =>
          tenant.name.toLowerCase().includes(normalizedQuery) ||
          (tenant.email ?? "").toLowerCase().includes(normalizedQuery),
      )
    : tenants;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tenant Management
          </h1>
          <p className="text-muted-foreground">
            Manage your resident portfolio and lease agreements.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="bg-primary text-primary-foreground font-bold"
          >
            <Link href="/dashboard/tenants/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Tenant
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 py-4">
        <form
          action="/dashboard/tenants"
          method="get"
          className="relative flex-1 max-w-sm"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            name="q"
            defaultValue={query}
            placeholder="Search tenants..."
            aria-label="Search tenants by name or email"
            className="pl-9 h-10"
          />
        </form>
        <div className="text-sm font-medium text-muted-foreground tabular-nums">
          {normalizedQuery
            ? `${filteredTenants.length} of ${tenants.length} tenants match "${query}"`
            : `${tenants.length} tenants total`}
        </div>
      </div>

      {tenants.length === 0 ? (
        <Empty
          icon={Users}
          title="No tenants found"
          description="You haven't added any tenants yet. Click the button above to create your first tenant record."
        />
      ) : filteredTenants.length === 0 ? (
        <Empty
          icon={Search}
          title={`No tenants match "${query}"`}
          description="No tenant name or email matches this search. Clear the search to see the full portfolio."
        >
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/tenants">Clear search</Link>
          </Button>
        </Empty>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTenants.map((tenant) => (
            <TenantCard key={tenant.id} tenant={tenant} />
          ))}
        </div>
      )}
    </div>
  );
}
