import { ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
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

const sampleOrders = [
  {
    id: "PRJ-007",
    customer: "John Doe",
    company: "Acme Inc.",
    date: "2023-10-26",
    status: "Proof Pending",
    total: 3500,
  },
  {
    id: "PRJ-006",
    customer: "Jane Smith",
    company: "Stark Industries",
    date: "2023-10-24",
    status: "In Production",
    total: 12500,
  },
  {
    id: "PRJ-005",
    customer: "Peter Jones",
    company: "Wayne Enterprises",
    date: "2023-10-22",
    status: "Shipped",
    total: 800,
  },
  {
    id: "PRJ-004",
    customer: "Samuel Wilson",
    company: "Daily Planet",
    date: "2023-10-21",
    status: "Completed",
    total: 2100,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Proof Pending":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "In Production":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "Shipped":
      return "bg-purple-500/20 text-purple-400 border-purple-500/50";
    case "Completed":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export default function PrintOrdersPage() {
  return (
    <Card className="bg-brand-navy/50 text-white border-brand-Blue/20 shadow-lg backdrop-blur-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl">Print Operations Hub</CardTitle>
          <CardDescription className="text-gray-400 mt-1">
            Monitor and manage all incoming and ongoing printing projects.
          </CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ListFilter className="mr-2 h-4 w-4" /> Filter Orders
          </Button>
          <Link href="/dashboard/printing-orders/new">
            <Button className="bg-brand-Blue text-brand-navy font-bold hover:bg-brand-Blue/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Log New Project
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b-white/10">
              <TableHead className="text-white/80">Project ID</TableHead>
              <TableHead className="text-white/80">Customer</TableHead>
              <TableHead className="text-white/80">Submission Date</TableHead>
              <TableHead className="text-white/80">Status</TableHead>
              <TableHead className="text-white/80 text-right">
                Value (ZAR)
              </TableHead>
              <TableHead className="text-white/80 text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow
                key={order.id}
                className="border-b-white/10 hover:bg-white/5"
              >
                <TableCell className="font-mono text-sm text-gray-300">
                  {order.id}
                </TableCell>
                <TableCell>
                  <div className="font-medium text-white">{order.customer}</div>
                  <div className="text-sm text-gray-400">{order.company}</div>
                </TableCell>
                <TableCell className="text-gray-400">{order.date}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`font-semibold ${getStatusBadge(order.status)}`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-white">
                  R {order.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/dashboard/printing-orders/${order.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand-Blue/50 text-brand-Blue hover:bg-brand-Blue hover:text-brand-navy"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
