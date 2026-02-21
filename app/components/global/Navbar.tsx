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
  ];

  return (
    <UnmountStudio>
      <header className='sticky top-0 z-50 glass dark:bg-zinc-900/70 bg-white/70 border-b dark:border-zinc-800/50 border-zinc-200/50 py-4 md:px-16 px-6 md:mb-28 mb-10'>
        <div className='max-w-6xl mx-auto flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-x-3 group'>
            <div className='relative'>
              <Image
                src='/white-logo.png'
                width={35}
                height={35}
                alt='Logo'
                className='transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
            <span className='dark:text-white text-zinc-600 text-base font-semibold tracking-tight'>
              TheCodeINN
            </span>
          </Link>

          <nav className='md:block hidden'>
            <ul className='flex items-center gap-x-8'>
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`relative text-base transition-all duration-300 py-1
                    ${pathname === link.href
                        ? "text-primary font-medium"
                        : "dark:text-zinc-300 text-zinc-600 hover:text-primary/80 dark:hover:text-primary/80"
                      }
                    `}
                  >
                    {link.title}
                    {pathname === link.href && (
                      <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full' />
                    )}
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
