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

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Proof Pending":
      return "secondary";
    case "In Production":
      return "default";
    case "Shipped":
      return "default";
    case "Completed":
      return "outline";
    default:
      return "outline";
  }
};

export default function PrintOrdersPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl">Print Operations Hub</CardTitle>
          <CardDescription className="mt-1">
            Monitor and manage all incoming and ongoing printing projects.
          </CardDescription>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <ListFilter className="mr-2 h-4 w-4" /> Filter Orders
          </Button>
          <Link href="/dashboard/printing-orders/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Log New Project
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Value (ZAR)</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-sm text-gray-600">
                  {order.id}
                </TableCell>
                <TableCell>
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-sm text-gray-500">{order.company}</div>
                </TableCell>
                <TableCell className="text-gray-600">{order.date}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  R {order.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/dashboard/printing-orders/${order.id}`}>
                    <Button variant="outline" size="sm">
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
