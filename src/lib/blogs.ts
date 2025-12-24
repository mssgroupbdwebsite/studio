
'use server';

import fs from 'fs/promises';
import path from 'path';

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

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json');

async function readPostsFromFile(): Promise<BlogPost[]> {
    try {
        await fs.access(dataFilePath);
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent) as BlogPost[];
    } catch {
        await fs.writeFile(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
        return [];
    }
}

async function writePostsToFile(posts: BlogPost[]): Promise<void> {
    const sortedPosts = posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    await fs.writeFile(dataFilePath, JSON.stringify(sortedPosts, null, 2), 'utf-8');
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const posts = await readPostsFromFile();
    return posts;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await readPostsFromFile();
    return posts.find(p => p.slug === slug);
}


export async function addPostToFile(postData: Omit<BlogPost, 'id' | 'slug'>): Promise<BlogPost> {
    const posts = await readPostsFromFile();
    const newId = `blog_${Date.now()}`;
    const slug = postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    
    const newPost: BlogPost = {
        ...postData,
        id: newId,
        slug: `${slug}-${newId.slice(-4)}`,
    };

    const updatedPosts = [...posts, newPost];
    await writePostsToFile(updatedPosts);
    return newPost;
}

export async function updatePostInFile(postId: string, updateData: Partial<Omit<BlogPost, 'id' | 'slug'>>): Promise<BlogPost | null> {
    const posts = await readPostsFromFile();
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return null;
    }

    const currentPost = posts[postIndex];
    
    const updatedPostData = {
        ...currentPost,
        ...updateData
    };
    
    // If title changes, update slug
    if (updateData.title && updateData.title !== currentPost.title) {
        const newSlug = updateData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        updatedPostData.slug = `${newSlug}-${postId.slice(-4)}`;
    }


    posts[postIndex] = updatedPostData;

    await writePostsToFile(posts);
    return updatedPostData;
}

export async function deletePostFromFile(postId: string): Promise<boolean> {
    let posts = await readPostsFromFile();
    const initialLength = posts.length;
    posts = posts.filter(p => p.id !== postId);

    if (posts.length < initialLength) {
        await writePostsToFile(posts);
        return true;
    }
    return false;
}
