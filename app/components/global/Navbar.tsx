"use client";
import Link from "next/link";
import UnmountStudio from "./Unmount";
import Image from "next/image";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    // },
    {
      title: "Photos",
      href: "/photos",
    },
  ];

  return (
    <UnmountStudio>
      <header className='text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10'>
        <div className='max-w-6xl mx-auto flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='/white-logo.png'
              width={35}
              height={35}
              alt='Logo'
              className='mx-auto'
            />
            <span className='dark:text-white text-zinc-600 text-base mt-4'>
              TheCodeINN
            </span>
          </Link>

          <nav className='md:block hidden'>
            <ul className='flex items-center gap-x-8'>
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`duration-300 text-base
                    ${
                      pathname === link.href
                        ? "text-primary-color"
                        : "dark:text-white text-zinc-600 dark:hover:text-primary-color/60 hover:text-zinc-900"
                    }
                    `}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-x-4'>
            <Theme />
            <MobileNav />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
};

export default Navbar;
