import {
  AlertCircle,
  CheckCircle2,
  Clock,
  CreditCard,
  History,
  Receipt,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTenants } from "../tenants/actions";
import { getPayments } from "./actions";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return <Badge className="bg-green-500 text-white">Paid</Badge>;
    case "Late":
      return <Badge variant="destructive">Late</Badge>;
    case "Pending":
      return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default async function PaymentsPage() {
  const [payments, tenants] = await Promise.all([getPayments(), getTenants()]);

  const overduePayments = payments.filter((p) => p.status === "Late");
  const pendingPayments = payments.filter((p) => p.status === "Pending");
  const _recentPayments = payments
    .filter((p) => p.status === "Paid")
    .slice(0, 10);

  const totalRevenue = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + (p.amount || 0), 0);

  const totalOverdue = overduePayments.reduce(
    (sum, p) => sum + (p.amount || 0),
    0,
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Payments Workspace
          </h1>
          <p className="text-muted-foreground">
            Manage tenant ledgers, track revenue, and handle arrears.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Receipt className="h-4 w-4" /> Export Ledger
          </Button>
          <Button className="gap-2 bg-primary text-white">
            <CreditCard className="h-4 w-4" /> Record Payment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-brand-card">
          <CardHeader className="pb-2">
            <CardDescription className="text-primary/70 font-medium uppercase tracking-wider text-[10px]">
              Total Revenue
            </CardDescription>
            <CardTitle className="text-3xl font-bold flex items-baseline gap-1">
              <span className="text-sm font-normal text-muted-foreground mr-1">
                R
              </span>
              {totalRevenue.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-green-500 font-bold">
              <TrendingUp className="h-3 w-3" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-brand-card border-red-200/50">
          <CardHeader className="pb-2">
            <CardDescription className="text-destructive/70 font-medium uppercase tracking-wider text-[10px]">
              Total Overdue
            </CardDescription>
            <CardTitle className="text-3xl font-bold text-destructive flex items-baseline gap-1">
              <span className="text-sm font-normal text-muted-foreground mr-1">
                R
              </span>
              {totalOverdue.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-destructive font-bold">
              <AlertCircle className="h-3 w-3" />
              <span>{overduePayments.length} outstanding accounts</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-brand-card">
          <CardHeader className="pb-2">
            <CardDescription className="text-primary/70 font-medium uppercase tracking-wider text-[10px]">
              Collection Rate
            </CardDescription>
            <CardTitle className="text-3xl font-bold">94.2%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-full h-1.5 mt-2">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{ width: "94.2%" }}
              ></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overdue" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:w-auto h-auto p-1 bg-muted/50 border">
          <TabsTrigger value="overdue" className="gap-2">
            <AlertCircle className="h-3.5 w-3.5" /> <span>Overdue</span>
          </TabsTrigger>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="h-3.5 w-3.5" /> <span>Pending</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-3.5 w-3.5" /> <span>History</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overdue" className="mt-6">
          {overduePayments.length === 0 ? (
            <Card className="border-dashed py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold">No overdue payments</h3>
                <p className="text-sm text-muted-foreground">
                  All tenants are up to date with their payments.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {overduePayments.map((p) => {
                const tenant = tenants.find((t) => t.id === p.tenantId);
                return (
                  <Card key={p.id} className="border-l-4 border-l-destructive">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <User className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-lg">
                              {tenant?.name || "Unknown Tenant"}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" /> Arrears since{" "}
                              {p.date
                                ? new Date(p.date).toLocaleDateString()
                                : "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">
                              Amount Due
                            </p>
                            <p className="text-xl font-bold text-destructive">
                              R {p.amount?.toLocaleString()}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-primary text-white font-bold"
                            asChild
                          >
                            <Link
                              href={`/dashboard/tenants/tenant/${p.tenantId}`}
                            >
                              Manage
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          {pendingPayments.length === 0 ? (
            <Card className="border-dashed py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <Clock className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <h3 className="text-lg font-semibold">No pending payments</h3>
                <p className="text-sm text-muted-foreground">
                  All recent payments have been processed.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {pendingPayments.map((p) => {
                const tenant = tenants.find((t) => t.id === p.tenantId);
                return (
                  <Card key={p.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold">
                              {tenant?.name || "Unknown Tenant"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Received on{" "}
                              {p.date
                                ? new Date(p.date).toLocaleDateString()
                                : "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-xl font-bold">
                              R {p.amount?.toLocaleString()}
                            </p>
                            <Badge
                              variant="outline"
                              className="bg-yellow-50 text-yellow-700 border-yellow-200"
                            >
                              Pending Verification
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Ledger</CardTitle>
              <CardDescription>
                Comprehensive record of all property-related financial
                transactions.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {tenants.map((tenant) => {
                  const tenantPayments = payments.filter(
                    (p) => p.tenantId === tenant.id,
                  );
                  if (tenantPayments.length === 0) return null;

                  return (
                    <AccordionItem
                      key={tenant.id}
                      value={tenant.id!}
                      className="border-b last:border-0 px-6"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-left">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                            {tenant.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold leading-none">
                              {tenant.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground uppercase mt-1">
                              {tenantPayments.length} Transactions
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-3 mt-2">
                          {tenantPayments.map((p) => (
                            <div
                              key={p.id}
                              className="flex items-center justify-between bg-muted/30 p-3 rounded-lg border border-muted"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-background rounded border">
                                  <Receipt className="h-3.5 w-3.5 text-muted-foreground" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold">
                                    {p.date
                                      ? new Date(p.date).toLocaleDateString(
                                          "en-ZA",
                                          {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                          },
                                        )
                                      : "N/A"}
                                  </p>
                                  <p className="text-[10px] text-muted-foreground">
                                    {p.id.slice(0, 8)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <p className="font-mono text-sm font-bold">
                                  R {p.amount?.toLocaleString()}
                                </p>
                                {getStatusBadge(p.status || "")}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
