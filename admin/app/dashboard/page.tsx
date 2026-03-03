import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  AlertTriangle,
  ArrowRight,
  Building,
  Printer,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const kpiData = [
  {
    title: "Managed Properties",
    value: "18",
    icon: Building,
    link: "/dashboard/properties",
    color: "text-sky-500",
  },
  {
    title: "Active Print Orders",
    value: "5",
    icon: Printer,
    link: "/dashboard/printing-orders",
    color: "text-emerald-500",
  },
  {
    title: "System Users",
    value: "126",
    icon: Users,
    link: "/dashboard/users",
    color: "text-amber-500",
  },
  {
    title: "Critical Alerts",
    value: "2",
    icon: AlertTriangle,
    link: "/dashboard/alerts",
    color: "text-red-500",
  },
];

const recentActivity = [
  {
    id: 1,
    type: "NEW PROPERTY",
    description: "'Executive Waterfront Residence' was listed.",
    timestamp: "1h ago",
  },
  {
    id: 2,
    type: "ORDER UPDATE",
    description: "Order #PRJ-007 status changed to In Production.",
    timestamp: "3h ago",
  },
  {
    id: 3,
    type: "NEW USER",
    description: "Client 'John Doe' created an account.",
    timestamp: "8h ago",
  },
  {
    id: 4,
    type: "PAYMENT RECEIVED",
    description: "Lease payment of R12,500 for 'Tranquil Garden Cottage' confirmed.",
    timestamp: "1d ago",
  },
];

const KpiCard = ({ item }: { item: (typeof kpiData)[0] }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">
        {item.title}
      </CardTitle>
      <item.icon className={`h-5 w-5 ${item.color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-extrabold">{item.value}</div>
      <Link href={item.link} className="mt-4 block">
        <Button variant="outline" size="sm" className="w-full">
          Manage <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Administrator Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Master overview of Letsheng Holdings operations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((item) => (
          <KpiCard key={item.title} item={item} />
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Recent Operational Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="w-12 text-center">
                    <span className="font-bold text-xs bg-brand-Blue/10 text-brand-Blue border border-brand-Blue/30 rounded-full px-2 py-1">
                      {activity.type}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">
                      {activity.description}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 shrink-0">
                    {activity.timestamp}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-3">
            <Link href="/dashboard/properties/new">
              <Button variant="secondary" className="w-full justify-start">
                <PlusCircle className="h-4 w-4 mr-3" /> Add New Property
              </Button>
            </Link>
            <Link href="/dashboard/printing-orders/new">
              <Button variant="secondary" className="w-full justify-start">
                <PlusCircle className="h-4 w-4 mr-3" />
                Log New Print Project
              </Button>
            </Link>
            <Link href="/dashboard/users/invite">
              <Button variant="secondary" className="w-full justify-start">
                <PlusCircle className="h-4 w-4 mr-3" />
                Invite Admin User
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
