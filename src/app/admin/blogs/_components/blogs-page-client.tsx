
'use client';

import { useState, useEffect } from 'react';
import type { BlogPost } from '@/app/admin/blogs/actions';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { Briefcase, Clock, Inbox, MoreHorizontal, Edit, ExternalLink } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { AddPostDialog } from './add-post-dialog';
import { DeletePostButton } from './delete-post-button';
import { EditPostDialog } from './edit-post-dialog';
import { Skeleton } from '@/components/ui/skeleton';


function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Card className="group relative transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50">
             <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-75 blur"></div>
            <div className="relative bg-card rounded-lg flex items-center p-4 gap-4">
                 <Avatar className="h-16 w-16 border hidden sm:flex">
                    <AvatarImage src={post.imageUrl} alt={post.title} />
                    <AvatarFallback>{post.title.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <p className="font-semibold text-foreground">{post.title}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <Briefcase className="h-3 w-3" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                             {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </span>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                           <EditPostDialog post={post}>
                                <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full">
                                    <Edit className="h-4 w-4" /> Edit
                                </button>
                           </EditPostDialog>
                        </DropdownMenuItem>
                         {post.slug && (
                            <DropdownMenuItem asChild>
                                 <Link href={`/blog/${post.slug}`} target="_blank" className="flex items-center gap-2">
                                     <ExternalLink className="h-4 w-4" /> View Post
                                 </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="p-0">
                            <DeletePostButton postId={post.id} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </Card>
    )
}

interface BlogsPageClientProps {
  posts: BlogPost[];
}

export function BlogsPageClient({ posts: initialPosts }: BlogsPageClientProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

  return (
      <div className="relative min-h-full p-4 sm:p-6">
            <div className="flex items-center justify-between mb-8">
                 <div>
                    <h1 className="text-3xl font-bold tracking-tight font-headline">Blog Posts</h1>
                    <p className="text-muted-foreground">Create and manage your blog content.</p>
                </div>
                {isClient ? <AddPostDialog /> : <Skeleton className="h-10 w-[120px]" />}
            </div>
            
            {!isClient ? (
                 <div className="space-y-4">
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                </div>
            ) : posts.length > 0 ? (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 border-2 border-dashed rounded-lg bg-card/50">
                    <Inbox className="mx-auto h-16 w-16 text-muted-foreground/50" strokeWidth={1}/>
                    <h3 className="mt-6 text-xl font-semibold">No Blog Posts Yet</h3>
                    <p className="mt-2 text-muted-foreground">
                        Click "Add Post" to create your first blog post.
                    </p>
                </div>
            )}
        </div>
  );
}
