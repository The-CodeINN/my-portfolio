"use client";

import { useState } from "react";
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";

type SharePostProps = {
    title: string;
    slug: string;
    description: string;
};

export default function SharePost({ title, slug, description }: SharePostProps) {
    const [copied, setCopied] = useState(false);
    const url = `https://thecodeinn.vercel.app/blog/${slug}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
        }
    };

    return (
        <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
            <h3 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-x-2">
                <Share2 className="w-5 h-5" />
                Share
            </h3>
            <div className="flex items-center gap-3">
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center w-10 h-10 rounded-lg dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 hover:text-primary transition-colors duration-200"
                    aria-label="Share on Twitter"
                >
                    <Twitter className="w-4 h-4" />
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center w-10 h-10 rounded-lg dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 hover:text-primary transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                >
                    <Linkedin className="w-4 h-4" />
                </a>
                <button
                    onClick={handleCopy}
                    className="flex items-center justify-center w-10 h-10 rounded-lg dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 hover:text-primary transition-colors duration-200"
                    aria-label="Copy link"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-primary" />
                    ) : (
                        <LinkIcon className="w-4 h-4" />
                    )}
                </button>
            </div>
        </section>
    );
}
