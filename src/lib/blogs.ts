
'use server';

import { promises as fs } from 'fs';
import path from 'path';

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

const blogsFilePath = path.join(process.cwd(), 'data', 'blogs.json');

async function readPostsFromFile(): Promise<BlogPost[]> {
    try {
        const fileContent = await fs.readFile(blogsFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            return []; // File not found, which is fine, start with empty array
        }
        throw error; // For other errors, re-throw
    }
}

async function writePostsToFile(posts: BlogPost[]): Promise<void> {
    // Sort by date before writing to keep it consistent
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    await fs.writeFile(blogsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
}


export async function getBlogPosts(): Promise<BlogPost[]> {
    const posts = await readPostsFromFile();
    return posts;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await readPostsFromFile();
    return posts.find(post => post.slug === slug);
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


export async function addPostToFile(postData: Omit<BlogPost, 'id' | 'slug'>): Promise<BlogPost> {
    const posts = await readPostsFromFile();
    const uniquePart = Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000);
    
    const newPost: BlogPost = {
        ...postData,
        id: `blog_${Date.now()}`,
        slug: createSlug(postData.title, uniquePart)
    };

    posts.push(newPost);
    await writePostsToFile(posts);
    return newPost;
}

export async function updatePostInFile(postId: string, updateData: Partial<Omit<BlogPost, 'id'>>): Promise<BlogPost | null> {
     const posts = await readPostsFromFile();
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return null;
    }

    const currentPost = posts[postIndex];
    
    // If the title is being updated, regenerate the slug
    if (updateData.title && updateData.title !== currentPost.title) {
        const uniquePart = postId.slice(-4);
        updateData.slug = createSlug(updateData.title, uniquePart);
    }
    
    const updatedPost = { ...currentPost, ...updateData };
    posts[postIndex] = updatedPost;
    await writePostsToFile(posts);
    return updatedPost;
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
