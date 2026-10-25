"use client";

import { Edit, Eye, Loader2, MoreVertical, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DeleteActionResult = { ok: boolean; error?: string };

interface RecordActionsMenuProps {
  /** Human name of the record, used in the trigger's accessible name and the confirm copy. */
  recordName: string;
  /** Domain word for the record type, e.g. "property", "branding product". */
  recordType: string;
  editHref: string;
  viewHref: string;
  deleteId?: string;
  /** Server action that deletes the record by id. Omit to hide the delete item. */
  deleteAction?: (id: string) => Promise<DeleteActionResult>;
}

export function RecordActionsMenu({
  recordName,
  recordType,
  editHref,
  viewHref,
  deleteId,
  deleteAction,
}: RecordActionsMenuProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const canDelete = Boolean(deleteAction && deleteId);

  const handleDelete = async () => {
    if (!deleteAction || !deleteId) return;
    setIsDeleting(true);
    try {
      const result = await deleteAction(deleteId);
      if (result.ok) {
        toast.success(`The ${recordType} has been deleted.`);
        setConfirmOpen(false);
        router.refresh();
      } else {
        toast.error(result.error || `Failed to delete the ${recordType}.`);
        setConfirmOpen(false);
      }
    } catch {
      toast.error(`Failed to delete the ${recordType}. Please try again.`);
      setConfirmOpen(false);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 max-md:size-11"
            aria-label={`Actions for ${recordName}`}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href={editHref} className="flex w-full items-center">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={viewHref} className="flex w-full items-center">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Link>
          </DropdownMenuItem>
          {canDelete && (
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onSelect={() => {
                setMenuOpen(false);
                setConfirmOpen(true);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this {recordType}?</AlertDialogTitle>
            <AlertDialogDescription>
              "{recordName}" will be permanently removed. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={isDeleting}
              onClick={(event) => {
                event.preventDefault();
                void handleDelete();
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
    </>
  );
}
