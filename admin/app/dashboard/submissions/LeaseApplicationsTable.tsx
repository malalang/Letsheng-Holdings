'use client';

import { MoreHorizontal } from "lucide-react";
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { leaseApplications } from "./data";
import { useRouter } from 'next/navigation';

const statusVariantMap: { [key: string]: "default" | "secondary" | "destructive" } = {
    Pending: "secondary",
    Reviewed: "default",
};

export function LeaseApplicationsTable() {
  const router = useRouter();

  const handleAddTenant = (applicantName: string, email: string) => {
    router.push(`/dashboard/tenants/new?name=${encodeURIComponent(applicantName)}&email=${encodeURIComponent(email)}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lease Applications</CardTitle>
        <CardDescription>Review and manage all property lease applications.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property Title</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaseApplications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.propertyTitle}</TableCell>
                <TableCell>
                    <div className="font-medium">{app.applicantName}</div>
                    <div className="text-sm text-muted-foreground">{app.email}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariantMap[app.status]}>{app.status}</Badge>
                </TableCell>
                <TableCell>{app.submittedAt.toLocaleDateString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Application</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleAddTenant(app.applicantName, app.email)}>
                        Add as Tenant
                      </DropdownMenuItem>
                      <DropdownMenuItem>Decline</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
