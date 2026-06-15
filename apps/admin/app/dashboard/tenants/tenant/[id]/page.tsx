import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTenantById, getPaymentsByTenantId } from "@repo/supabase/Queries/tenants";

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Inactive":
      return "bg-red-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    case "Paid":
      return "bg-green-100 text-green-800";
    case "Late":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tenant = await getTenantById(id);

  if (!tenant) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Tenant not found</h1>
        <Link href="/dashboard/tenants">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
      </div>
    );
  }

  const payments = await getPaymentsByTenantId(id);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href="/dashboard/tenants">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tenants
          </Button>
        </Link>
        <Link href={`/dashboard/tenants/tenant/${tenant.id}/edit`}>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Tenant
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={tenant.avatarUrl || ""} alt={tenant.name} />
                <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className=" font-bold">{tenant.name}</CardTitle>
                <CardDescription className="text-lg">
                  {tenant.id}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Property</p>
                <p className="font-semibold">{tenant.properties?.title}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <Badge className={getStatusBadgeClass(tenant.status)}>
                  {tenant.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Lease End Date
                </p>
                <p className="font-semibold">{tenant.leaseEndDate ? new Date(tenant.leaseEndDate).toLocaleDateString() : "N/A"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${(payment.amount as number).toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeClass(payment.status)}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
