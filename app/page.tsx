import { getProfile } from '@/lib/sanity.query';
import type { ProfileType } from '@/types';

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className='max-w-7xl mx-auto md:px-16 lg:mt-32 mt-20'>
      <section className='flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16'>
        {profile &&
          profile.map((data) => (
            <div key={data._id} className='lg:max-w-2xl max-w-2xl'>
              <h1>{data.headline}</h1>
            </div>
          ))}
      </section>
    </main>
  );
}
