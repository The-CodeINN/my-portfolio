import Image from 'next/image';
import UnmountStudio from './Unmount';

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className='border-t dark:border-zinc-800/50 border-zinc-100 mt-44 relative'>
        {/* Gradient accent line */}
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />

        <div className='max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16'>
          <div className='flex md:flex-row flex-col items-center gap-x-2'>
            <h3 className='font-medium'>Built with:</h3>
            <ul className='flex items-center gap-x-4 text-sm dark:text-zinc-400 text-zinc-500 md:mt-0 mt-3'>
              <li>
                <a
                  href='https://sanity.io'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='flex items-center gap-x-2 dark:text-zinc-300 text-zinc-600 hover:text-primary dark:hover:text-primary transition-colors duration-300'
                >
                  <Image
                    src='/sanity.png'
                    alt='Sanity Logo'
                    width={20}
                    height={20}
                  />{' '}
                  Sanity
                </a>
              </li>
              <li className='dark:text-zinc-700 text-zinc-300'>•</li>
              <li>
                <a
                  href='https://vercel.com'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='flex items-center gap-x-2 dark:text-zinc-300 text-zinc-600 hover:text-primary dark:hover:text-primary transition-colors duration-300'
                >
                  <Image
                    src='/vercel.svg'
                    alt='Vercel Logo'
                    width={20}
                    height={20}
                  />{' '}
                  Vercel
                </a>
              </li>
              <li className='dark:text-zinc-700 text-zinc-300'>•</li>
              <li>
                <a
                  href='https://nextjs.org'
                  rel='noreferrer noopener'
                  target='_blank'
                  className='flex items-center gap-x-2 dark:text-zinc-300 text-zinc-600 hover:text-primary dark:hover:text-primary transition-colors duration-300'
                >
                  <Image
                    src='/next.svg'
                    alt='NextJS Logo'
                    width={20}
                    height={20}
                  />{' '}
                  NextJS
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col lg:items-end items-center lg:text-start text-center'>
            <small className='text-zinc-500'>
              Copyright &copy; TheCodeINN {new Date().getFullYear()} All rights
              Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
