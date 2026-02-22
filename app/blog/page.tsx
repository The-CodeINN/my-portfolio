import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Posts from "../components/pages/Posts";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
    title: "Blog | Richard Emijere",
    metadataBase: new URL("https://thecodeinn.vercel.app/blog"),
    description: "Read latest stories from Richard Emijere's Blog",
    openGraph: {
        title: "Blog | Richard Emijere",
        url: "https://thecodeinn.vercel.app/blog",
        description: "Read latest stories from Richard Emijere's Blog",
    },
};

export default async function Blog() {
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            <PageHeading
                title="Blog"
                description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm hacking on and just general findings."
            />

            <Slide delay={0.1}>
                <div className="flex items-center gap-x-3 mb-8">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
                </div>
                <Posts />
            </Slide>
        </main>
    );
}
