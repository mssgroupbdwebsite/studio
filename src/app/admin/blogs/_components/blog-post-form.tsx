
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addBlogPost, updateBlogPost, BlogPostFormValues } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2, CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import type { BlogPost } from '../actions';
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CldUploadButton, CldImage } from 'next-cloudinary';
import Image from 'next/image';

const blogPostSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    content: z.string().min(1, "Content is required"),
    imageUrl: z.string().min(1, "Image is required").url("Must be a valid URL."),
    publishedAt: z.string().min(1, "Published date is required"),
});

interface BlogPostFormProps {
  post?: BlogPost;
  onSuccess?: () => void;
}

export function BlogPostForm({ post, onSuccess }: BlogPostFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: post ? {
      ...post,
      publishedAt: new Date(post.publishedAt).toISOString(),
    } : {
      title: "",
      author: "",
      content: "",
      imageUrl: "",
      publishedAt: new Date().toISOString(),
    },
  });

  const isEditing = !!post;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    if (post) {
      form.reset({
        ...post,
        publishedAt: new Date(post.publishedAt).toISOString(),
      });
    } else {
      form.reset({
          title: "",
          author: "Admin",
          content: "",
          imageUrl: "",
          publishedAt: new Date().toISOString(),
      });
    }
  }, [post, form]);

  async function onSubmit(data: BlogPostFormValues) {
    const action = isEditing ? updateBlogPost : addBlogPost;
    const payload = isEditing ? { ...data, id: post.id } : data;
    const result = await action(payload);

    if (result.success) {
      toast({
        title: `Post ${isEditing ? 'updated' : 'added'} successfully`,
        description: `"${data.title}" has been saved.`,
      });
      onSuccess?.();
      router.refresh();
    } else {
      toast({
        variant: "destructive",
        title: `Failed to ${isEditing ? 'update' : 'add'} post`,
        description: result.error || "An error occurred. Please try again.",
      });
    }
  }

  const handleUploadSuccess = (result: any) => {
    form.setValue('imageUrl', result.info.secure_url);
    toast({
      title: 'Image Uploaded',
      description: 'The image URL has been set.',
    });
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. The Future of Sustainable Fashion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your blog post here..." {...field} rows={8} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <FormControl>
                <div className="flex items-center gap-4">
                    {field.value && cloudName ? (
                    <div className="w-24 h-24 relative">
                        <Image
                            src={field.value}
                            alt="Featured image preview"
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                    ) : null}
                     <CldUploadButton
                        onSuccess={handleUploadSuccess}
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                        options={{
                            sources: ['local', 'url'],
                            multiple: false,
                        }}
                    >
                       <div className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium">
                            Upload Image
                       </div>
                    </CldUploadButton>
                    <Input {...field} placeholder="Or paste image URL" className="flex-1" />
                </div>
                </FormControl>
                <FormDescription>
                Upload an image or paste a URL for the post's featured image.
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />

        <div className="grid grid-cols-2 gap-4">
           <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                    <Input placeholder="e.g. John Doe" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="publishedAt"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Publish Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={(date) => field.onChange(date?.toISOString())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
            {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Save Changes" : "Add Post"}
        </Button>
      </form>
    </Form>
  );
}
