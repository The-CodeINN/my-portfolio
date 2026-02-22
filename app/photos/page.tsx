import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const images = [
    {
        id: "1",
        src: "https://images.unsplash.com/photo-1585618256754-241cfe4e8113?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=100",
        alt: "Developer workspace",
    },
    {
        id: "2",
        src: "https://images.unsplash.com/photo-1585619203238-70e7631cc672?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        alt: "Coding session",
    },
    {
        id: "3",
        src: "https://images.unsplash.com/photo-1585619443911-c2bb23fb2a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        alt: "Tech setup",
    },
];

export const metadata: Metadata = {
    title: "Photos | Richard Emijere",
    metadataBase: new URL("https://thecodeinn.vercel.app/photos"),
    description: "Explore photos taken by Richard Emijere",
    openGraph: {
        title: "Photos | Richard Emijere",
        url: "https://thecodeinn.vercel.app/photos",
        description: "Explore photos taken by Richard Emijere",
    },
};

export default function Photos() {
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
            <PageHeading
                title="Photos"
                description="A collection of moments captured through my lens. This page is still under construction..."
            />
            <figure className="my-6">
                <Slide delay={0.12} className="flex flex-wrap gap-4">
                    {images.map((image) => (
                        <Image
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            width={350}
                            height={800}
                            className="dark:bg-primary-bg bg-secondary-bg rounded-xl hover:scale-[1.02] transition-transform duration-300"
                        />
                    ))}
                </Slide>
            </figure>
        </main>
    );
}
