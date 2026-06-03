import { Edit, Eye, MoreHorizontal, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTenants } from "./actions";
import { type Tenant } from "@repo/supabase";

const getStatusBadgeClass = (status: Tenant["status"]) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Inactive":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default async function AdminTenantsPage() {
  const tenants = await getTenants();
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground">
            View and manage all tenants in your properties.
          </p>
        </div>
        <Link href="/dashboard/tenants/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Tenant
          </Button>
        </Link>
      </div>
      <Card className="bg-brand-card">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Property</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Lease End Date</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={tenant.avatar_url ?? undefined} alt={tenant.name} />
                        <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <p className="font-bold">{tenant.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {tenant.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {tenant.property_id ? (
                      <Link
                        href={`/dashboard/properties/property/${tenant.property_id}`}
                        className="hover:underline"
                      >
                        {tenant.property?.title ?? 'N/A'}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getStatusBadgeClass(tenant.status as Tenant["status"])}>
                      {tenant.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {tenant.lease_end_date ? new Date(tenant.lease_end_date).toLocaleDateString() : 'N/A'}
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/tenants/tenant/${tenant.id}`}
                            className="flex items-center w-full"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/dashboard/tenants/tenant/${tenant.id}/edit`}
                            className="flex items-center w-full"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
