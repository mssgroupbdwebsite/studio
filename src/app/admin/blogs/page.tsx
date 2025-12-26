
'use client';

import { getBlogPosts } from '@/lib/blogs';
import { BlogsPageClient } from './_components/blogs-page-client';
import { useEffect, useState } from 'react';
import type { BlogPost } from './actions';
import { Skeleton } from '@/components/ui/skeleton';


export default function AdminBlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const fetchedPosts = await getBlogPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (isLoading) {
       return (
         <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-8">
                 <div>
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-4 w-64 mt-2" />
                </div>
                <Skeleton className="h-10 w-[120px]" />
            </div>
            <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
            </div>
        </div>
       )
    }

    return (
        <BlogsPageClient posts={posts} />
    );
}
