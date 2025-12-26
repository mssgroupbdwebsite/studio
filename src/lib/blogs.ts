
'use server';

import { getAdminServices } from '@/firebase/server-init';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  publishedAt: string; // ISO 8601 string
  hidden?: boolean;
}

const { firestore: db } = getAdminServices();
const blogsCollection = db.collection('blogs');


async function readPostsFromFirestore(): Promise<BlogPost[]> {
    try {
        const snapshot = await blogsCollection.orderBy('publishedAt', 'desc').get();
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    } catch (error) {
        console.error("Error fetching blog posts from Firestore:", error);
        return [];
    }
}


export async function getBlogPosts(): Promise<BlogPost[]> {
    const posts = await readPostsFromFirestore();
    return posts.filter(post => post && post.slug);
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const snapshot = await blogsCollection.where('slug', '==', slug).limit(1).get();
    if (snapshot.empty) {
        return undefined;
    }
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as BlogPost;
}


function createSlug(title: string, uniqueSuffix: string) {
    const slugBase = title.toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    return `${slugBase}-${uniqueSuffix}`;
}


export async function addPostToFirestore(postData: Omit<BlogPost, 'id' | 'slug'>): Promise<BlogPost> {
    const uniquePart = Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000);
    const slug = createSlug(postData.title, uniquePart);
    
    const docRef = await blogsCollection.add({
        ...postData,
        slug: slug
    });

    const newPost: BlogPost = {
        id: docRef.id,
        slug: slug,
        ...postData
    };
    return newPost;
}

export async function updatePostInFirestore(postId: string, updateData: Partial<Omit<BlogPost, 'id'>>): Promise<BlogPost | null> {
    const docRef = blogsCollection.doc(postId);

    if (updateData.title) {
        const uniquePart = postId.slice(0, 4); 
        updateData.slug = createSlug(updateData.title, uniquePart);
    }
    
    await docRef.update(updateData);
    const updatedDoc = await docRef.get();
     if (!updatedDoc.exists) {
        return null;
    }

    return { id: updatedDoc.id, ...updatedDoc.data() } as BlogPost;
}


export async function deletePostFromFirestore(postId: string): Promise<boolean> {
    await blogsCollection.doc(postId).delete();
    return true;
}
