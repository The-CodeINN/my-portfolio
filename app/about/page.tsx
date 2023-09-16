import { getProfile } from "@/lib/sanity.query";
import { ProfileType } from "@/types";
import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Richard Emijere",
  metadataBase: new URL("https://thecodeinn.vercel.app/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Richard Emijere",
    url: "https://thecodeinn.vercel.app/about",
    description:
      "Learn more about my skills, experience and technical background",
    images: "",
  },
};

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className='relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6'>
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className='relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center'>
              <div className='order-2 lg:order-none'>
                <Slide>
                  <h1 className='font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8'>
                    I&apos;m {data.fullName}. I live in {data.location}, where I
                    build the future.
                  </h1>
                  <div className='dark:text-zinc-400 text-zinc-600 leading-relaxed'>
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </Slide>
              </div>

              <aside className='flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12'>
                <Slide delay={0.1}>
                  <div className='sticky top-10'>
                    <Image
                      className='rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top'
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                      placeholder='blur'
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />
                  </div>
                </Slide>
              </aside>
            </section>
          </div>
        ))}
    </main>
  );
}
