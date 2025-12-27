
'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { deleteInquiry } from "./actions";

export function DeleteInquiryButton({ inquiryId }: { inquiryId: string }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deleteInquiry(inquiryId);
      if (result.success) {
        toast({
          title: "Inquiry Deleted",
          description: "The inquiry has been successfully removed.",
        });
        setOpen(false);
      } else {
        toast({
          variant: "destructive",
          title: "Deletion Failed",
          description: result.error || "An error occurred. Please try again.",
        });
      }
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
          <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-destructive w-full">
            <Trash2 className="h-4 w-4" />
            Delete Inquiry
          </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this inquiry?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the inquiry from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive hover:bg-destructive/90"
            disabled={isPending}
          >
            {isPending ? 'Deleting...' : 'Yes, delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
