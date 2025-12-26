
'use server';

import { getAdminServices } from '@/firebase/server-init';
import { revalidatePath } from 'next/cache';
import type { FieldValue } from 'firebase-admin/firestore';

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

const { firestore } = getAdminServices();
const blogsCollection = firestore.collection('blogs');

export async function getBlogPosts(): Promise<BlogPost[]> {
    const snapshot = await blogsCollection.orderBy('publishedAt', 'desc').get();
    if (snapshot.empty) {
        return [];
    }
    const posts: BlogPost[] = [];
    snapshot.forEach(doc => {
        posts.push({ id: doc.id, ...(doc.data() as Omit<BlogPost, 'id'>) });
    });
    return posts;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const snapshot = await blogsCollection.where('slug', '==', slug).limit(1).get();
    if (snapshot.empty) {
        return undefined;
    }
    const doc = snapshot.docs[0];
    return { id: doc.id, ...(doc.data() as Omit<BlogPost, 'id'>) };
}

function createSlug(title: string, id: string) {
    const slugBase = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    return `${slugBase}-${id.slice(0, 4)}`;
}

export async function addPostToFile(postData: Omit<BlogPost, 'id' | 'slug'>): Promise<BlogPost> {
    const docRef = blogsCollection.doc();
    const slug = createSlug(postData.title, docRef.id);
    
    const newPost: Omit<BlogPost, 'id'> = {
        ...postData,
        slug: slug,
    };
    
    await docRef.set(newPost);
    
    revalidatePath('/admin/blogs');
    revalidatePath('/blog');

    return { ...newPost, id: docRef.id };
}

export async function updatePostInFile(postId: string, updateData: Partial<Omit<BlogPost, 'id' | 'slug'>>): Promise<BlogPost | null> {
    const docRef = blogsCollection.doc(postId);
    const doc = await docRef.get();
    if (!doc.exists) {
        return null;
    }

    const currentData = doc.data() as BlogPost;
    const newData = { ...updateData };

    // If title changes, update slug
    if (updateData.title && updateData.title !== currentData.title) {
        (newData as Partial<BlogPost>).slug = createSlug(updateData.title, postId);
    }
    
    await docRef.update(newData);

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    if ((newData as Partial<BlogPost>).slug) {
        revalidatePath(`/blog/${(newData as Partial<BlogPost>).slug}`);
    }
    if (currentData.slug) {
         revalidatePath(`/blog/${currentData.slug}`);
    }

    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...(updatedDoc.data() as Omit<BlogPost, 'id'>) };
}

export async function deletePostFromFile(postId: string): Promise<boolean> {
    const docRef = blogsCollection.doc(postId);
    const doc = await docRef.get();
    if (!doc.exists) {
        return false;
    }

    await docRef.delete();
    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    return true;
}
