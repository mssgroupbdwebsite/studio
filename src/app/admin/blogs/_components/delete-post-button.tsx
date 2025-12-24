
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
import { useToast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { deleteBlogPost } from "../actions";

export function DeletePostButton({ postId }: { postId: string }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deleteBlogPost(postId);
      if (result.success) {
        toast({
          title: "Post Deleted",
          description: "The blog post has been successfully removed.",
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
            Delete Post
          </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this post?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the blog post.
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
