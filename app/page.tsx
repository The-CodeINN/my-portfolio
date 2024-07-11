import type { ProfileType } from '@/types';
import HeroSvg from './icons/HeroSvg';
import { Slide } from './animation/Slide';
import Social from './components/shared/Social';
import Job from './components/pages/Job';
import { sanityFetch } from '@/lib/sanity.client';
import { profileQuery } from '@/lib/sanity.query';

export default async function Home() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ['profile'],
  });
  return (
    <main className='max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20'>
      <section className='flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16'>
        {profile &&
          profile.map((data) => (
            <div key={data._id} className='lg:max-w-2xl max-w-2xl'>
              <Slide>
                <h1 className='font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full'>
                  {data.headline}
                </h1>
                <p className='text-base dark:text-zinc-400 text-zinc-600 leading-relaxed'>
                  {data.shortBio}
                </p>
              </Slide>
              <Slide delay={0.1}>
                <Social type='social' />
              </Slide>
            </div>
          ))}
        <Slide delay={0.1}>
          <HeroSvg />
        </Slide>
      </section>
      <Job />
    </main>
  );
}
