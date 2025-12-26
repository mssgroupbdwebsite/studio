
'use client';

import { z } from 'zod';
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getSdks } from '@/firebase';

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

function createSlug(title: string, uniqueSuffix: string) {
    const slugBase = title.toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    return `${slugBase}-${uniqueSuffix}`;
}

export async function addBlogPost(data: BlogPostFormValues) {
  const validation = blogPostSchema.safeParse(data);

  if (!validation.success) {
      return { success: false, error: "Invalid data provided." };
  }

  try {
    const { firestore } = getSdks();
    const blogsCollection = collection(firestore, 'blogs');
    const uniquePart = Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000);
    const slug = createSlug(validation.data.title, uniquePart);

    await addDoc(blogsCollection, { ...validation.data, hidden: false, slug });
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
        const { firestore } = getSdks();
        const postRef = doc(firestore, 'blogs', id);
        
        let newSlug;
        if(postData.title){
             const uniquePart = id.slice(0, 4);
             newSlug = createSlug(postData.title, uniquePart);
        }
        
        const updateData: any = {...postData};
        if (newSlug) {
            updateData.slug = newSlug;
        }
        
        await updateDoc(postRef, updateData);

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
        const { firestore } = getSdks();
        const postRef = doc(firestore, 'blogs', postId);
        await deleteDoc(postRef);
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete blog post.' };
    }
}
