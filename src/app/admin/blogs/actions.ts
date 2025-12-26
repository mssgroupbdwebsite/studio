
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { addPostToFirestore, updatePostInFirestore, deletePostFromFirestore } from '@/lib/blogs';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  hidden?: boolean;
}

const blogPostSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    content: z.string().min(1, "Content is required"),
    imageUrl: z.string().min(1, "Image is required").url("Must be a valid URL."),
    publishedAt: z.string().min(1, "Published date is required"),
});

export type BlogPostFormValues = z.infer<typeof blogPostSchema>;

export async function addBlogPost(data: BlogPostFormValues) {
  const validation = blogPostSchema.safeParse(data);

  if (!validation.success) {
      return { success: false, error: "Invalid data provided." };
  }

  try {
    await addPostToFirestore({ ...validation.data, hidden: false });
    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message || 'Failed to add blog post.' };
  }
}

export async function updateBlogPost(data: BlogPostFormValues) {
    const validation = blogPostSchema.safeParse(data);

    if (!validation.success || !data.id) {
      return { success: false, error: "Invalid data or missing post ID." };
    }
    
    const { id, ...postData } = validation.data;

    try {
        await updatePostInFirestore(id, postData);
        revalidatePath('/admin/blogs');
        revalidatePath('/blog');
        revalidatePath(`/blog/${id}`);
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to update blog post.' };
    }
}

export async function deleteBlogPost(postId: string) {
    if (!postId) {
        return { success: false, error: "Post ID is required." };
    }

    try {
        const deleted = await deletePostFromFirestore(postId);
        if (deleted) {
            revalidatePath('/admin/blogs');
            revalidatePath('/blog');
            return { success: true };
        }
        return { success: false, error: 'Post not found.' };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete blog post.' };
    }
}
