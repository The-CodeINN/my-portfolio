import Link from "next/link";
import Image from "next/image";
import type { PostType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/sanity.query";
import { formatDate } from "@/app/utils/date";
import EmptyState from "../shared/EmptyState";

export default async function Posts() {
    const posts: PostType[] = await sanityFetch({
        query: postsQuery,
        tags: ["Post"],
    });

    if (!posts.length) {
        return (
            <EmptyState
                value="Blog Posts"
                icon="📝"
            />
        );
    }

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {posts.map((post) => (
                <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-x-4 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-xl p-4 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.01]"
                >
                    {post.coverImage?.image && (
                        <div className="relative w-20 h-20 min-w-[5rem] overflow-hidden rounded-lg">
                            <Image
                                src={post.coverImage.image}
                                alt={post.coverImage.alt || post.title}
                                fill
                                className="object-cover"
                                placeholder={post.coverImage.lqip ? "blur" : "empty"}
                                blurDataURL={post.coverImage.lqip || ""}
                            />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg tracking-tight mb-1 group-hover:text-primary transition-colors duration-200 truncate">
                            {post.title}
                        </h3>
                        <p className="text-sm dark:text-zinc-400 text-zinc-600 line-clamp-2 mb-2">
                            {post.description}
                        </p>
                        <time
                            dateTime={post.date || post._createdAt}
                            className="text-xs dark:text-zinc-500 text-zinc-400 font-mono"
                        >
                            {formatDate(post.date || post._createdAt)}
                        </time>
                    </div>
                </Link>
            ))}
        </div>
    );
}
