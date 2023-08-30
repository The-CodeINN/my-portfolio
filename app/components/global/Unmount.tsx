'use client';

import { usePathname } from 'next/navigation';

export default function UnmountStudio({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  if (path.startsWith('/studio')) {
    return null;
  }
  return <>{children}</>;
}
