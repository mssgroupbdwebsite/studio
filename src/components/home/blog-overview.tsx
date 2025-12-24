
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBlogPosts, type BlogPost } from '@/lib/blogs';
import { format } from 'date-fns';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function PostCard({ post }: { post: BlogPost }) {
    return (
         <Card className="group overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
             <Link href={`/blog/${post.slug}`} className="block relative">
                <div className="aspect-video relative overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>
            <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                </div>
                <CardTitle className="mt-2">
                    <Link href={`/blog/${post.slug}`} className="text-xl font-bold font-headline hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.content}</p>
            </CardContent>
        </Card>
    )
}

function PostSkeleton() {
    return (
        <Card className="flex flex-col">
            <Skeleton className="w-full aspect-video" />
            <CardHeader>
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-full mt-2" />
            </CardHeader>
             <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
            </CardContent>
        </Card>
    )
}

export function BlogOverview() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const allPosts = await getBlogPosts();
                const visiblePosts = allPosts.filter(p => !p.hidden).slice(0, 3);
                setPosts(visiblePosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">From The Blog</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                Latest News & Insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the latest trends, stories, and developments in the apparel industry.
            </p>
        </motion.div>
        
        <motion.div variants={stagger} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
                <>
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </>
            ) : posts.length > 0 ? (
                posts.map((post) => (
                    <motion.div key={post.id} variants={fadeUp}>
                        <PostCard post={post} />
                    </motion.div>
                ))
            ) : (
                <motion.div variants={fadeUp} className="col-span-full text-center py-16">
                     <h3 className="text-xl font-semibold">No Posts Yet</h3>
                    <p className="text-muted-foreground mt-2">Check back soon for our latest articles.</p>
                </motion.div>
            )}
        </motion.div>
        
        {posts.length > 0 && (
             <motion.div variants={fadeUp} className="mt-16 text-center">
                <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                    Read More Articles <ArrowRight />
                    </Link>
                </Button>
            </motion.div>
        )}
      </div>
    </motion.section>
  );
}
