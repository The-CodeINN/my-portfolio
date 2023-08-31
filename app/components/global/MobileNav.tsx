"use client";
import Image from "next/image";
import { useState } from "react";
import { Camera, FlaskConical, Bookmark, X, User2, Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    {
      title: "About",
      href: "/about",
      icon: User2,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: FlaskConical,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: Bookmark,
    },
    {
      title: "Photos",
      href: "/photos",
      icon: Camera,
    },
  ];

  const onToggleMenu = () => {
    setShowMenu((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <>
      <button
        aria-label='Toggle Menu'
        onClick={onToggleMenu}
        className='md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2'
      >
        <Menu className='text-xl' />
      </button>

      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          showMenu ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between mt-6 px-8'>
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

          <button
            aria-label='Toggle Menu'
            onClick={onToggleMenu}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !showMenu && "-rotate-[360deg]"
            }
            `}
          >
            <X className='text-xl' />
          </button>
        </div>

        <nav className='flex flex-col mt-6 items-center'>
          {navLinks.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className='flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group'
              onClick={onToggleMenu}
            >
              <link.icon
                className='text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300'
                aria-hidden='true'
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
