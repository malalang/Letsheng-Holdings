import {
  getPaymentsByTenantId,
  getTenantById,
} from "@letsheng-holdings/supabase/Queries/tenants";
import { ArrowLeft, Edit, Receipt } from "lucide-react";
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
import { Empty } from "@/components/ui/empty";
import { Separator } from "@/components/ui/separator";
import { statusBadgeClass } from "@/lib/statusBadge";

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
                <Badge className={statusBadgeClass(tenant.status)}>
                  {tenant.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Lease End Date
                </p>
                <p className="font-semibold">
                  {tenant.leaseEndDate
                    ? new Date(tenant.leaseEndDate).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            {payments.length === 0 ? (
              <Empty
                icon={Receipt}
                title="No payments yet"
                description="Payments made by this tenant will appear here."
              />
            ) : (
              <ul className="space-y-2">
                {payments.map((payment) => (
                  <li
                    key={payment.id}
                    className="flex items-center justify-between gap-4 rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">
                        {new Date(payment.date).toLocaleDateString()}
                      </p>
                      <Badge className={statusBadgeClass(payment.status)}>
                        {payment.status}
                      </Badge>
                    </div>
                    <p className="font-semibold">
                      ${(payment.amount as number).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
