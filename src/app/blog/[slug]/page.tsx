
import { getBlogPosts, getPostBySlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: `Not Found - ${siteConfig.name}`,
    };
  }

  return {
    title: `${post.title} - ${siteConfig.name}`,
    description: post.content.substring(0, 160),
    openGraph: {
        title: post.title,
        description: post.content.substring(0, 160),
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author],
        images: [
            {
                url: post.imageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            },
        ],
    },
     twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.content.substring(0, 160),
        images: [post.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post || post.hidden) {
    notFound();
  }
  
  const authorInitial = post.author.charAt(0).toUpperCase();

  return (
    <article>
        <header className="relative h-[60vh] flex items-end text-white py-12 md:py-24">
            <div className="absolute inset-0">
                <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                 <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-lg">
                    {post.title}
                </h1>
                <div className="mt-6 flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-white/50">
                             <AvatarFallback>{authorInitial}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-xs">Author</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <time dateTime={post.publishedAt}>
                            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </time>
                    </div>
                </div>
            </div>
        </header>

        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
                <p>{post.content}</p>
            </div>
        </div>
    </article>
  );
}
