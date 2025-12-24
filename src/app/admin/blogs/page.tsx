
import { getBlogPosts } from '@/lib/blogs';
import { BlogsPageClient } from './_components/blogs-page-client';

export const revalidate = 0; // Don't cache this page

export default async function AdminBlogsPage() {
    const posts = await getBlogPosts();

    return (
        <BlogsPageClient posts={posts} />
    );
}
