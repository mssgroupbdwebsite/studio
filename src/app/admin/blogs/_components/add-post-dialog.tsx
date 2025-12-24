
"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlogPostForm } from "./blog-post-form";
import { PlusCircle } from 'lucide-react';

export function AddPostDialog() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Blog Post</DialogTitle>
          <DialogDescription>
            Fill in the details for the new post. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <BlogPostForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
