import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  ArrowUpRight,
  DollarSign,
  Edit,
  MoreHorizontal,
  Package,
  Percent,
  Trash2,
  Building2,
  User,
  CreditCard,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDashboardKpis, getRecentLeases } from "./actions";

interface KpiData {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  href?: string;
  color?: string;
}

const KpiCard = ({ item }: { item: KpiData }) => {
  const CardWrapper = item.href ? Link : 'div';
  return (
    <CardWrapper href={item.href || '#'}>
      <Card className={`bg-brand-card hover:shadow-md transition-all cursor-pointer group ${item.color === 'destructive' ? 'border-destructive/20' : ''}`}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.title}</CardTitle>
          <item.icon className={`h-4 w-4 ${item.color === 'destructive' ? 'text-destructive' : 'text-primary'}`} />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${item.color === 'destructive' ? 'text-destructive' : ''}`}>{item.value}</div>
          <p className="text-[10px] text-muted-foreground mt-1 font-medium">{item.change}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default async function DashboardPage() {
  const kpis = await getDashboardKpis();
  const recentLeases = await getRecentLeases();

  const kpiData: KpiData[] = kpis
    ? [
        {
          title: "Total Monthly Revenue",
          value: `R${kpis.totalRevenue.toLocaleString()}`,
          icon: DollarSign,
          change: "Total potential collection",
          href: "/dashboard/payments"
        },
        {
          title: "Occupancy Rate",
          value: `${kpis.occupancyRate.toFixed(1)}%`,
          icon: Percent,
          change: "Across all properties",
          href: "/dashboard/properties"
        },
        {
          title: "Branding Inquiries",
          value: kpis.pendingOrders.toString(),
          icon: Package,
          change: "Awaiting response",
          href: "/dashboard/submissions"
        },
        {
          title: "Overdue Payments",
          value: `R${kpis.overdueAmount.toLocaleString()}`,
          icon: AlertCircle,
          change: `${kpis.overdueCount} tenants in arrears`,
          href: "/dashboard/payments",
          color: "destructive"
        },
      ]
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Executive Dashboard</h1>
        <p className="text-muted-foreground">Portfolio performance and operational overview.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((item) => (
          <KpiCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-brand-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-4 border-b">
            <div className="grid gap-1">
              <CardTitle className="text-lg">Recent Lease Activity</CardTitle>
              <CardDescription>Latest property assignments and status updates.</CardDescription>
            </div>
            <Button asChild size="sm" variant="ghost" className="gap-1 text-primary hover:text-primary hover:bg-primary/10">
              <Link href="/dashboard/properties">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentLeases.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground italic text-sm">No recent lease activity.</div>
              ) : (
                recentLeases.map((lease) => (
                  <div key={lease.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors group">
                    <div className="flex items-center gap-4">
                       <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-none mb-1">{lease.property}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          {lease.tenant}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                       <p className="text-xs font-bold font-mono">{lease.amount}</p>
                       <Badge
                          variant="outline"
                          className={`text-[10px] px-1.5 py-0 h-4 uppercase font-black tracking-tighter ${
                            lease.status === "Late Payment"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : "bg-green-50 text-green-700 border-green-200"
                          }`}
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

        <Card className="bg-brand-card shadow-sm border-primary/20">
           <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Revenue Health
                </CardTitle>
                <Badge className="bg-primary text-white">94% Collection</Badge>
              </div>
              <CardDescription>Property collection performance vs target.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Collected Revenue</span>
                  <span className="font-bold">R{kpis?.totalRevenue.toLocaleString()} / R{(kpis?.totalRevenue || 0) + (kpis?.overdueAmount || 0)}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                 <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">New Submissions</p>
                    <p className="text-2xl font-bold">{kpis?.pendingOrders}</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Property Yield</p>
                    <p className="text-2xl font-bold">12.4%</p>
                 </div>
              </div>
              
              <Button className="w-full bg-primary text-white font-bold h-11" asChild>
                <Link href="/dashboard/payments">Manage Collections</Link>
              </Button>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
