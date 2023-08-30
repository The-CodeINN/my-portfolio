import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers/provider';
import Navbar from './components/global/Navbar';

const inter = Inter({ subsets: ['latin'] });

const options = {
  title: 'Richard Emijere | Software Developer',
  description:
    'Richard Emijere is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities',
  url: 'https://thecodeinn.vercel.app',
  ogImage: 'https://img.icons8.com/ios-filled/50/decentralized-network.png',
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: 'thecodeinn.vercel.app',
    locale: 'en_US',
    type: 'website',
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
