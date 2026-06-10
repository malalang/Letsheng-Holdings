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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { getDashboardKpis, getRecentLeases } from "./actions";

interface KpiData {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

const KpiCard = ({ item }: { item: KpiData }) => (
  <Card className="bg-brand-card">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
      <item.icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{item.value}</div>
      <p className="text-xs text-muted-foreground">{item.change}</p>
    </CardContent>
  </Card>
);

export default async function DashboardPage() {
  const kpis = await getDashboardKpis();
  const recentLeases = await getRecentLeases();

  const kpiData: KpiData[] = kpis
    ? [
        {
          title: "Total Monthly Revenue",
          value: `R${kpis.totalRevenue.toLocaleString()}`,
          icon: DollarSign,
          change: "Based on occupied properties",
        },
        {
          title: "Occupancy Rate",
          value: `${kpis.occupancyRate.toFixed(2)}%`,
          icon: Percent,
          change: "Across all properties",
        },
        {
          title: "Pending Branding Inquiries",
          value: kpis.pendingOrders.toString(),
          icon: Package,
          change: "Newly submitted inquiries",
        },
        {
          title: "Overdue Payments",
          value: `R${kpis.overdueAmount.toLocaleString()}`,
          icon: AlertCircle,
          change: `${kpis.overdueCount} tenants overdue`,
        },
      ]
    : [];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {kpiData.map((item) => (
          <KpiCard key={item.title} item={item} />
        ))}
      </div>
      <Card className="xl:col-span-2 bg-brand-card">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Lease Agreements</CardTitle>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1 bg-primary">
            <a href="/dashboard/properties">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentLeases.map((lease) => (
                <TableRow key={lease.id}>
                  <TableCell>
                    <div className="font-medium">{lease.property}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{lease.tenant}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        lease.status === "Late Payment"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }
                    >
                      {lease.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{lease.amount}</TableCell>
                  <TableCell className="text-right">
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
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
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
