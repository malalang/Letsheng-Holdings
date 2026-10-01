import {
  AlertCircle,
  ArrowRight,
  Building2,
  CreditCard,
  DollarSign,
  Package,
  Percent,
  User,
} from "lucide-react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

import type { AnalysisHeaderItem } from "@/components/admin/AnalysisHeader";
import AnalysisHeader from "@/components/admin/AnalysisHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { statusBadgeClass } from "@/lib/statusBadge";
import { getDashboardKpis, getRecentLeases } from "./actions";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Portfolio performance and operational overview for Letsheng Holdings.",
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
export default async function DashboardPage() {
  const kpis = await getDashboardKpis();
  const recentLeases = await getRecentLeases();

  const kpiData: AnalysisHeaderItem[] = kpis
    ? [
        {
          title: "Total Monthly Revenue",
          value: `R${kpis.totalRevenue.toLocaleString()}`,
          icon: DollarSign,
          description: "Total potential collection",
          href: "/dashboard/payments",
        },
        {
          title: "Occupancy Rate",
          value: `${kpis.occupancyRate.toFixed(1)}%`,
          icon: Percent,
          description: "Across all properties",
          href: "/dashboard/properties",
        },
        {
          title: "Branding Inquiries",
          value: kpis.pendingOrders.toString(),
          icon: Package,
          description: "Awaiting response",
          href: "/dashboard/submissions",
        },
        {
          title: "Overdue Payments",
          value: `R${kpis.overdueAmount.toLocaleString()}`,
          icon: AlertCircle,
          description: `${kpis.overdueCount} tenants in arrears`,
          href: "/dashboard/payments",
          color: "destructive",
        },
      ]
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Executive Dashboard
        </h1>
        <p className="text-muted-foreground">
          Portfolio performance and operational overview.
        </p>
      </div>

      <AnalysisHeader items={kpiData} />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-border">
            <div className="grid gap-1">
              <CardTitle className="text-lg">Recent Lease Activity</CardTitle>
              <CardDescription>
                Latest property assignments and status updates.
              </CardDescription>
            </div>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="gap-1 text-primary hover:text-primary/80 hover:bg-primary/20"
            >
              <Link href="/dashboard/properties">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentLeases.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground italic text-sm">
                  No recent lease activity.
                </div>
              ) : (
                recentLeases.map((lease) => (
                  <div
                    key={lease.id}
                    className="flex items-center justify-between p-4 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-none mb-1">
                          {lease.property}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          {lease.tenant}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <p className="text-xs font-bold font-mono">
                        {lease.amount}
                      </p>
                      <Badge
                        variant="outline"
                        className={`text-xs px-1.5 py-0 min-min-h-5 uppercase font-black tracking-tighter ${statusBadgeClass(lease.status)}`}
                      >
                        {lease.status}
                      </Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Revenue Health
              </CardTitle>
              <Badge className="bg-primary text-primary-foreground">94% Collection</Badge>
            </div>
            <CardDescription>
              Property collection performance vs target.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Collected Revenue</span>
                <span className="font-bold">
                  R{kpis?.totalRevenue.toLocaleString()} / R
                  {(kpis?.totalRevenue || 0) + (kpis?.overdueAmount || 0)}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  New Submissions
                </p>
                <p className="text-2xl font-bold">{kpis?.pendingOrders}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Property Yield
                </p>
                <p className="text-2xl font-bold">12.4%</p>
              </div>
            </div>

            <Button
              className="w-full bg-primary text-primary-foreground font-bold h-11"
              asChild
            >
              <Link href="/dashboard/payments">Manage Collections</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
