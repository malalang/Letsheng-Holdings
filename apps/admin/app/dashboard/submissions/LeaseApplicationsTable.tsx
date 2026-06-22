"use client";

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Eye,
  Inbox,
  Mail,
  MapPin,
  MessageSquare,
  MoreVertical,
  Phone,
  Trash2,
  User,
  UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ClientDate } from "@/components/ClientDate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  deleteLeaseApplication,
  updateLeaseApplicationStatus,
} from "./actions";

const statusVariantMap: Record<string, string> = {
  Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Reviewed: "bg-blue-50 text-blue-700 border-blue-200",
};

interface LeaseApplicationWithDetails {
  id: string;
  createdAt: string;
  status: string;
  applicantName: string;
  email: string;
  phone: string | null;
  employment: "employed" | "self-employed" | "unemployed" | "student" | null;
  message: string | null;
  propertyTitle: string;
  propertyId: string;
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
      propertyId: propertyId,
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

  if (applications.length === 0) {
    return (
      <Card className="border-dashed py-20 text-center">
        <CardContent className="flex flex-col items-center">
          <Inbox className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-semibold">No lease applications</h3>
          <p className="text-sm text-muted-foreground">
            You don't have any incoming lease applications at the moment.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 mt-6">
      {applications.map((app) => (
        <Card key={app.id} className="overflow-hidden group border-muted">
          <Accordion type="single" collapsible>
            <AccordionItem value={app.id} className="border-none">
              <div className="flex items-center p-6 gap-4">
                <AccordionTrigger className="flex-1 hover:no-underline p-0 py-0 [&>svg]:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left w-full">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg leading-none truncate">
                          {app.applicantName}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`capitalize px-2 py-0 h-5 text-[10px] font-bold ${statusVariantMap[app.status]}`}
                        >
                          {app.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          {app.propertyTitle}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <ClientDate dateString={app.createdAt} />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onSelect={() => setSelectedApplication(app)}
                      >
                        <Eye className="mr-2 h-4 w-4" /> View Full Details
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusUpdate(app.id, "Reviewed")}
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as
                        Reviewed
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleAddTenant(
                            app.applicantName,
                            app.email,
                            app.propertyId,
                          )
                        }
                      >
                        <UserPlus className="mr-2 h-4 w-4" /> Add as Tenant
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(app.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Decline
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <AccordionContent className="px-6 pb-6 pt-2 border-t bg-muted/20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <User className="h-3 w-3" /> Contact Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`mailto:${app.email}`}
                          className="text-primary hover:underline"
                        >
                          {app.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{app.phone || "No phone provided"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Briefcase className="h-3 w-3" /> Employment Status
                    </h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="capitalize">
                        {app.employment || "Not specified"}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <MessageSquare className="h-3 w-3" /> Applicant Message
                    </h4>
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      &quot;{app.message || "No additional message provided."}
                      &quot;
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    className="bg-primary text-white font-bold"
                    onClick={() => handleStatusUpdate(app.id, "Reviewed")}
                  >
                    Accept for Review
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleAddTenant(
                        app.applicantName,
                        app.email,
                        app.propertyId,
                      )
                    }
                  >
                    Create Tenant Account
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}

      {selectedApplication && (
        <Dialog
          open={!!selectedApplication}
          onOpenChange={(isOpen: boolean) =>
            !isOpen && setSelectedApplication(null)
          }
        >
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Lease Application Detail</DialogTitle>
              <DialogDescription>
                Submitted by {selectedApplication.applicantName} for{" "}
                {selectedApplication.propertyTitle}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase">
                    Applicant
                  </p>
                  <p className="font-medium">
                    {selectedApplication.applicantName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase">
                    Email
                  </p>
                  <p className="font-medium truncate">
                    {selectedApplication.email}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase">
                    Phone
                  </p>
                  <p className="font-medium">
                    {selectedApplication.phone || "—"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase">
                    Employment
                  </p>
                  <p className="font-medium capitalize">
                    {selectedApplication.employment || "—"}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-bold uppercase">
                  Property Interested In
                </p>
                <p className="font-medium">
                  {selectedApplication.propertyTitle}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-bold uppercase">
                  Message
                </p>
                <div className="bg-muted p-4 rounded-md border text-sm leading-relaxed italic">
                  &quot;{selectedApplication.message || "No message provided."}
                  &quot;
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-white"
                  onClick={() =>
                    handleStatusUpdate(selectedApplication.id, "Reviewed")
                  }
                >
                  Mark Reviewed
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
