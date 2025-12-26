
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getBlogPosts } from '@/lib/blogs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
  description: `Latest news, insights, and stories from the apparel industry by ${siteConfig.name}.`,
};

export const revalidate = 300; // Revalidate every 5 minutes

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.filter(p => !p.hidden);

  return (
    <div className="bg-background">
      <header className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Blog</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
            News & Insights
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the latest trends, stories, and expert opinions from the world of apparel manufacturing.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              // Validate imageUrl - use fallback if invalid or corrupted
              const isValidImageUrl = post.imageUrl &&
                post.imageUrl.startsWith('http') &&
                !post.imageUrl.includes('rules_version');

              const imageUrl = isValidImageUrl
                ? post.imageUrl
                : 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800&h=400&fit=crop'; // Fallback image

              return (
              <Card key={post.id} className="group overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                 <Link href={`/blog/${post.slug}`} className="block relative">
                    <div className="aspect-video relative overflow-hidden">
                        <Image
                            src={imageUrl}
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
                <CardFooter>
                     <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight />
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold">No posts yet!</h2>
            <p className="mt-4 text-muted-foreground">Check back soon for news and insights.</p>
          </div>
        )}
      </main>
    </div>
  );
}
