"use client";

import {
  Calendar,
  CheckCircle2,
  Inbox,
  Loader2,
  Mail,
  MoreVertical,
  Phone,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { Empty } from "@/components/ui/empty";
import { statusBadgeClass } from "@/lib/statusBadge";
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

type ContactMessagesCardsProps = {
  messages: ContactMessage[];
};

export function ContactMessagesCards({ messages }: ContactMessagesCardsProps) {
  const [deleteTarget, setDeleteTarget] = useState<ContactMessage | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleStatusUpdate = async (id: string, status: string) => {
    const result = await updateContactMessageStatus(id, status);
    if (result.ok) {
      toast.success(`Message marked as ${status}.`);
    } else {
      toast.error(result.error || "Failed to update message status.");
    }
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    try {
      const result = await deleteContactMessage(id);
      if (result.ok) {
        toast.success("Contact message has been deleted.");
        setDeleteTarget(null);
      } else {
        toast.error(result.error || "Failed to delete contact message.");
        setDeleteTarget(null);
      }
    } catch {
      toast.error("Failed to delete contact message. Please try again.");
      setDeleteTarget(null);
    } finally {
      setIsDeleting(false);
    }
  };

  if (messages.length === 0) {
    return (
      <Empty
        icon={Inbox}
        title="No contact messages"
        description="You do not have any general contact messages yet."
        className="mt-6"
      />
    );
  }

  return (
    <div className="grid gap-4 mt-6">
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
                      className={`capitalize px-2 py-0 min-h-5 text-xs font-bold ${statusBadgeClass(message.status)}`}
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
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-9 max-md:size-11"
                    aria-label={`Actions for message from ${message.name}`}
                  >
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
                    onSelect={() => setDeleteTarget(message)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border-t border-border pt-5">
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

      <AlertDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this contact message?</AlertDialogTitle>
            <AlertDialogDescription>
              The message from "{deleteTarget?.name}" will be permanently
              removed. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={isDeleting}
              onClick={(event) => {
                event.preventDefault();
                if (deleteTarget) {
                  void handleDelete(deleteTarget.id);
                }
              }}
            >
              {isDeleting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              )}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
