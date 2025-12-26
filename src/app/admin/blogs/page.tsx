
'use client';

import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { BlogsPageClient } from './_components/blogs-page-client';
import { useEffect, useState } from 'react';
import type { BlogPost } from './actions';
import { Skeleton } from '@/components/ui/skeleton';


export default function AdminBlogsPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { firestore } = useFirebase();

    useEffect(() => {
        const fetchPosts = async () => {
            if (!firestore) return;

            setIsLoading(true);
            try {
                const blogsRef = collection(firestore, 'blogs');
                const q = query(blogsRef, orderBy('publishedAt', 'desc'));
                const querySnapshot = await getDocs(q);

                const fetchedPosts: BlogPost[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedPosts.push({ id: doc.id, ...doc.data() } as BlogPost);
                });

                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, [firestore]);

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
