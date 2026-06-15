"use client";

import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

import { deleteBrandingInquiry, updateBrandingInquiryStatus } from "./actions";

const statusVariantMap: {
  [key: string]: "default" | "secondary" | "destructive";
} = {
  New: "secondary",
  Contacted: "default",
};

// Extends the base BrandingInquiry to include database-specific fields
interface BrandingInquiryWithProduct {
  id: string;
  created_at: string;
  status: string;
  customer_name: string;
  email: string;
  company: string | null;
  quantity: number;
  message: string | null;
  product_title: string;
  product_id: string;
}

interface BrandingInquiriesTableProps {
  inquiries: BrandingInquiryWithProduct[];
}

export function BrandingInquiriesTable({
  inquiries,
}: BrandingInquiriesTableProps) {
  const [selectedInquiry, setSelectedInquiry] =
    useState<BrandingInquiryWithProduct | null>(null);

  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateBrandingInquiryStatus(id, status);
    if (result.ok) {
      toast.success(`Inquiry marked as ${status}.`);
    } else {
      toast.error(result.error || "Failed to update status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      const result = await deleteBrandingInquiry(id);
      if (result.ok) {
        toast.success("Inquiry has been deleted.");
      } else {
        toast.error(result.error || "Failed to delete inquiry.");
      }
    }
  };

  return (
    <>
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
                <TableHead>Company</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/dashboard/branding/brand/${inquiry.product_id}`}
                      className="hover:underline"
                    >
                      {inquiry.product_title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{inquiry.customer_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {inquiry.email}
                    </div>
                  </TableCell>
                  <TableCell>{inquiry.company || "N/A"}</TableCell>
                  <TableCell className="text-center">
                    {inquiry.quantity}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[inquiry.status]}>
                      {inquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
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
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onSelect={() => setSelectedInquiry(inquiry)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusUpdate(inquiry.id, "Contacted")
                          }
                        >
                          Mark as Contacted
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(inquiry.id)}
                        >
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

      {selectedInquiry && (
        <Dialog
          open={!!selectedInquiry}
          onOpenChange={(isOpen: boolean) =>
            !isOpen && setSelectedInquiry(null)
          }
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                Inquiry for {selectedInquiry.product_title}
              </DialogTitle>
              <DialogDescription>
                Submitted on{" "}
                {new Date(selectedInquiry.created_at).toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <h4 className="font-semibold">Contact Information</h4>
                <p>Name: {selectedInquiry.customer_name}</p>
                <p>Email: {selectedInquiry.email}</p>
                <p>Company: {selectedInquiry.company || "Not provided"}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">Project Details</h4>
                <p>Quantity: {selectedInquiry.quantity}</p>
                <div>
                  <h5 className="font-semibold">Message:</h5>
                  <p className="text-sm text-gray-700 mt-1">
                    {selectedInquiry.message || "No message provided."}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
