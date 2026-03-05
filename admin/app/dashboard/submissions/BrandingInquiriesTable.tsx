"use client";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { brandingInquiries } from "./data";

const statusVariantMap: {
  [key: string]: "default" | "secondary" | "destructive";
} = {
  New: "secondary",
  Contacted: "default",
};

export function BrandingInquiriesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Branding Inquiries</CardTitle>
        <CardDescription>
          Review and manage all branding project inquiries.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brandingInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">
                  {inquiry.productTitle}
                </TableCell>
                <TableCell>
                  <div className="font-medium">{inquiry.customerName}</div>
                  <div className="text-sm text-muted-foreground">
                    {inquiry.email}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariantMap[inquiry.status]}>
                    {inquiry.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {inquiry.submittedAt.toLocaleDateString()}
                </TableCell>
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
                      <DropdownMenuItem>View Inquiry</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Contacted</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
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
