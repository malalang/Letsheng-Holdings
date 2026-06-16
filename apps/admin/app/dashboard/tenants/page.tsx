import { getTenants } from "./actions";
import { PlusCircle, Search, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TenantCard from "./TenantCard";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdminTenantsPage() {
  const tenants = await getTenants();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenant Management</h1>
          <p className="text-muted-foreground">
            Manage your resident portfolio and lease agreements.
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Link href="/dashboard/tenants/new">
            <Button className="bg-primary text-white font-bold">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Tenant
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 py-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tenants..." className="pl-9 h-10 shadow-sm" />
        </div>
        <div className="text-sm font-medium text-muted-foreground">
          {tenants.length} tenants total
        </div>
      </div>

      {tenants.length === 0 ? (
        <Card className="border-dashed py-20 text-center">
          <CardContent className="flex flex-col items-center">
            <Users className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold">No tenants found</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-2">
              You haven't added any tenants yet. Click the button above to create your first tenant record.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tenants.map((tenant) => (
            <TenantCard key={tenant.id} tenant={tenant} />
          ))}
        </div>
      )}
    </div>
  );
}
