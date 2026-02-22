import Link from "next/link";
import type { PostType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";
import { featuredPostsQuery } from "@/lib/sanity.query";

export default async function FeaturedPosts({
    currentSlug,
}: {
    currentSlug: string;
}) {
    const posts: PostType[] = await sanityFetch({
        query: featuredPostsQuery,
        tags: ["Post"],
    });

    const filteredPosts = posts.filter((post) => post.slug !== currentSlug);

    if (!filteredPosts.length) {
        return (
            <p className="text-sm dark:text-zinc-400 text-zinc-500">
                No featured posts yet.
            </p>
        );
    }

    return (
        <ul className="flex flex-col gap-y-4">
            {filteredPosts.slice(0, 4).map((post) => (
                <li key={post._id}>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="flex flex-col gap-y-1 dark:text-zinc-300 text-zinc-600 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                        <h4 className="text-sm font-medium tracking-tight line-clamp-2">
                            {post.title}
                        </h4>
                        <p className="text-xs dark:text-zinc-500 text-zinc-400 line-clamp-1">
                            {post.description}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
