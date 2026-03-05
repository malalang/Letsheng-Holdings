import {
  File,
  ListFilter,
  PlusCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { sampleTenants, Tenant } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getStatusBadgeClass = (status: Tenant['status']) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Inactive":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
  }
};

export default function AdminTenantsPage() {
  return (
    <div>
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
                <h1 className='text-2xl font-bold'>Tenant Management</h1>
                <p className='text-muted-foreground'>View and manage all tenants in your properties.</p>
            </div>
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
                {sampleTenants.map((tenant) => (
                <TableRow key={tenant.id}>
                    <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={tenant.avatarUrl} alt={tenant.name} />
                                <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-0.5">
                                <p className="font-bold">{tenant.name}</p>
                                <p className="text-xs text-muted-foreground">{tenant.id}</p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                        <Link href={`/dashboard/properties/${tenant.propertyId}`} className="hover:underline">
                            {tenant.property}
                        </Link>
                    </TableCell>
                    <TableCell className="text-center">
                        <Badge className={getStatusBadgeClass(tenant.status)}>
                            {tenant.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                        {tenant.leaseEndDate}
                    </TableCell>
                    <TableCell className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Link href={`/dashboard/tenants/edit/${tenant.id}`} className="flex items-center w-full">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href={`/dashboard/tenants/edit/${tenant.id}`} className="flex items-center w-full">
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
