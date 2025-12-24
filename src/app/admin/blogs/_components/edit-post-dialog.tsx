
"use client"

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlogPostForm } from "./blog-post-form";
import type { BlogPost } from '@/app/admin/blogs/actions';

interface EditPostDialogProps {
    post: BlogPost;
    children: React.ReactNode;
}

export function EditPostDialog({ post, children }: EditPostDialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Blog Post</DialogTitle>
          <DialogDescription>
            Make changes to the post here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <BlogPostForm post={post} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
