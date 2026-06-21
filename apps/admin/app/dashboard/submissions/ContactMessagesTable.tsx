"use client";

import { Calendar, CheckCircle2, Inbox, Mail, MoreVertical, Phone, Trash2, User } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteContactMessage, updateContactMessageStatus } from "./actions";

type ContactMessage = {
  id: string;
  createdAt: string;
  email: string;
  message: string;
  name: string;
  phone: string | null;
  status: string;
  subject: string | null;
};

type ContactMessagesTableProps = {
  messages: ContactMessage[];
};

const statusVariantMap: Record<string, string> = {
  New: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Contacted: "bg-blue-50 text-blue-700 border-blue-200",
  Resolved: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function ContactMessagesTable({ messages }: ContactMessagesTableProps) {
  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateContactMessageStatus(id, status);
    if (result.ok) {
      toast.success(`Message marked as ${status}.`);
    } else {
      toast.error(result.error || "Failed to update message status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact message?")) {
      return;
    }

    const result = await deleteContactMessage(id);
    if (result.ok) {
      toast.success("Contact message has been deleted.");
    } else {
      toast.error(result.error || "Failed to delete contact message.");
    }
  };

  if (messages.length === 0) {
    return (
      <Card className="border-dashed py-20 text-center mt-6">
        <CardContent className="flex flex-col items-center">
          <Inbox className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-lg font-semibold">No contact messages</h3>
          <p className="text-sm text-muted-foreground">
            You do not have any general contact messages yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 mt-6">
      {messages.map((message) => (
        <Card key={message.id} className="overflow-hidden border-muted">
          <CardContent className="p-6 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4 min-w-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg leading-none truncate">
                      {message.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`capitalize px-2 py-0 h-5 text-[10px] font-bold ${statusVariantMap[message.status] ?? "bg-muted text-muted-foreground"}`}
                    >
                      {message.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-muted-foreground font-medium">
                    <a
                      href={`mailto:${message.email}`}
                      className="flex items-center gap-1.5 text-primary hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {message.email}
                    </a>
                    {message.phone && (
                      <a
                        href={`tel:${message.phone}`}
                        className="flex items-center gap-1.5 hover:underline"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {message.phone}
                      </a>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => handleStatusUpdate(message.id, "Contacted")}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Contacted
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleStatusUpdate(message.id, "Resolved")}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Resolved
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDelete(message.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border-t pt-5">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-bold uppercase flex items-center gap-2">
                  <User className="h-3 w-3" /> Subject
                </p>
                <p className="text-sm font-medium">
                  {message.subject || "General enquiry"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-bold uppercase">
                  Message
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {message.message}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
