"use client";

import { 
  MoreVertical, 
  User, 
  ShoppingCart, 
  Calendar, 
  Mail, 
  Building2, 
  MessageSquare,
  Eye,
  CheckCircle2,
  Trash2,
  Inbox,
  Layers
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { deleteBrandingInquiry, updateBrandingInquiryStatus } from "./actions";

const statusVariantMap: Record<string, string> = {
  New: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Contacted: "bg-blue-50 text-blue-700 border-blue-200",
};

interface BrandingInquiryWithProduct {
  id: string;
  createdAt: string;
  status: string;
  customerName: string;
  email: string;
  company: string | null;
  quantity: number;
  message: string | null;
  productTitle: string;
  productId: string;
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

  if (inquiries.length === 0) {
    return (
      <Card className="border-dashed py-20 text-center">
        <CardContent className="flex flex-col items-center">
          <Inbox className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-semibold">No branding inquiries</h3>
          <p className="text-sm text-muted-foreground">You don't have any incoming branding project inquiries.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 mt-6">
      {inquiries.map((inquiry) => (
        <Card key={inquiry.id} className="overflow-hidden group border-muted">
           <Accordion type="single" collapsible>
            <AccordionItem value={inquiry.id} className="border-none">
              <div className="flex items-center p-6 gap-4">
                <AccordionTrigger className="flex-1 hover:no-underline p-0 py-0 [&>svg]:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left w-full">
                     <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <ShoppingCart className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg leading-none truncate">{inquiry.customerName}</h3>
                        <Badge variant="outline" className={`capitalize px-2 py-0 h-5 text-[10px] font-bold ${statusVariantMap[inquiry.status]}`}>
                          {inquiry.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-primary" />
                          {inquiry.productTitle}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(inquiry.createdAt).toLocaleDateString()}
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
                      <DropdownMenuItem onSelect={() => setSelectedInquiry(inquiry)}>
                        <Eye className="mr-2 h-4 w-4" /> View Full Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(inquiry.id, "Contacted")}>
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Contacted
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(inquiry.id)} className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
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
                        <a href={`mailto:${inquiry.email}`} className="text-primary hover:underline">{inquiry.email}</a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span>{inquiry.company || "No company provided"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Layers className="h-3 w-3" /> Order Details
                    </h4>
                    <div className="space-y-1">
                       <p className="text-sm font-medium">Quantity: <Badge variant="secondary">{inquiry.quantity}</Badge></p>
                       <p className="text-sm font-medium">Product: <span className="text-muted-foreground">{inquiry.productTitle}</span></p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <MessageSquare className="h-3 w-3" /> Customer Message
                    </h4>
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      &quot;{inquiry.message || "No additional message provided."}&quot;
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                   <Button size="sm" className="bg-primary text-white font-bold" onClick={() => handleStatusUpdate(inquiry.id, "Contacted")}>
                     Mark as Contacted
                   </Button>
                   <Button variant="outline" size="sm" asChild>
                     <Link href={`/dashboard/branding/brand/${inquiry.productId}`}>View Product</Link>
                   </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}

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
                Branding Inquiry Detail
              </DialogTitle>
              <DialogDescription>
                Submitted by {selectedInquiry.customerName} on {new Date(selectedInquiry.createdAt).toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <p className="text-xs text-muted-foreground font-bold uppercase">Customer</p>
                   <p className="font-medium">{selectedInquiry.customerName}</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-xs text-muted-foreground font-bold uppercase">Email</p>
                   <p className="font-medium truncate">{selectedInquiry.email}</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-xs text-muted-foreground font-bold uppercase">Company</p>
                   <p className="font-medium">{selectedInquiry.company || "—"}</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-xs text-muted-foreground font-bold uppercase">Quantity</p>
                   <p className="font-medium">{selectedInquiry.quantity}</p>
                 </div>
              </div>

               <div className="space-y-1">
                 <p className="text-xs text-muted-foreground font-bold uppercase">Product Requested</p>
                 <p className="font-medium">{selectedInquiry.productTitle}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-bold uppercase">Message</p>
                <div className="bg-muted p-4 rounded-md border text-sm leading-relaxed italic">
                  &quot;{selectedInquiry.message || "No message provided."}&quot;
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t">
                 <Button variant="outline" size="sm" onClick={() => setSelectedInquiry(null)}>Close</Button>
                 <Button size="sm" className="bg-primary text-white" onClick={() => handleStatusUpdate(selectedInquiry.id, "Contacted")}>Mark Contacted</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
