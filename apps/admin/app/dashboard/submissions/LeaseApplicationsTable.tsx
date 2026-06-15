"use client";

import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ClientDate } from "@/components/ClientDate";
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

import {
  deleteLeaseApplication,
  updateLeaseApplicationStatus,
} from "./actions";

const statusVariantMap: {
  [key: string]: "default" | "secondary" | "destructive";
} = {
  Pending: "secondary",
  Reviewed: "default",
};

// Extends the base LeaseApplication to include database-specific fields
interface LeaseApplicationWithDetails {
  id: string;
  created_at: string;
  status: string;
  applicant_name: string;
  email: string;
  phone: string | null;
  employment: "employed" | "self-employed" | "unemployed" | "student" | null;
  message: string | null;
  property_title: string;
  property_id: string;
}

interface LeaseApplicationsTableProps {
  applications: LeaseApplicationWithDetails[];
}

export function LeaseApplicationsTable({
  applications,
}: LeaseApplicationsTableProps) {
  const router = useRouter();
  const [selectedApplication, setSelectedApplication] =
    useState<LeaseApplicationWithDetails | null>(null);

  const handleAddTenant = (
    applicantName: string,
    email: string,
    propertyId: string,
  ) => {
    const params = new URLSearchParams({
      name: applicantName,
      email,
      property_id: propertyId,
    });
    router.push(`/dashboard/tenants/new?${params.toString()}`);
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateLeaseApplicationStatus(id, status);
    if (result.ok) {
      toast.success(`Application marked as ${status}.`);
    } else {
      toast.error(result.error || "Failed to update status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      const result = await deleteLeaseApplication(id);
      if (result.ok) {
        toast.success("Application has been deleted.");
      } else {
        toast.error(result.error || "Failed to delete application.");
      }
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Lease Applications</CardTitle>
          <CardDescription>
            Review and manage all property lease applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Applicant</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">
                    <Link
                      href={`/dashboard/properties/property/${app.property_id}`}
                      className="hover:underline"
                    >
                      {app.property_title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{app.applicant_name}</div>
                    <div className="text-sm text-muted-foreground">
                      {app.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[app.status]}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <ClientDate dateString={app.created_at} />
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
                          onSelect={() => setSelectedApplication(app)}
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleStatusUpdate(app.id, "Reviewed")}
                        >
                          Mark as Reviewed
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleAddTenant(
                              app.applicant_name,
                              app.email,
                              app.property_id,
                            )
                          }
                        >
                          Add as Tenant
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(app.id)}>
                          Decline
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
      {selectedApplication && (
        <Dialog
          open={!!selectedApplication}
          onOpenChange={(isOpen: boolean) =>
            !isOpen && setSelectedApplication(null)
          }
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                Lease Application for {selectedApplication.property_title}
              </DialogTitle>
              <DialogDescription>
                Submitted by {selectedApplication.applicant_name} on{" "}
                <ClientDate
                  dateString={selectedApplication.created_at}
                  format="datetime"
                />
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <h4 className="font-semibold">Applicant Details</h4>
                <p>Name: {selectedApplication.applicant_name}</p>
                <p>Email: {selectedApplication.email}</p>
                <p>Phone: {selectedApplication.phone || "Not provided"}</p>
                <p>
                  Employment:{" "}
                  {selectedApplication.employment || "Not specified"}
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">Additional Information</h4>
                <p className="text-sm text-gray-700">
                  {selectedApplication.message || "No message provided."}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
