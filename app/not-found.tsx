import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error 404 | Richard Emijere",
};

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Page Not Found
      </h2>
      <p className="max-w-md dark:text-zinc-400 text-zinc-600 mb-8">
        Oopsies! The page you&apos;re looking for doesn&apos;t exist. It might
        have been moved or deleted.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
      >
        Go Home
      </Link>
    </main>
  );
}
