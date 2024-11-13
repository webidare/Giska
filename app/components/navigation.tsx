// app/components/navigation.tsx
import { Home, Heart, Search } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6" />
            <span className="font-bold">Love Messages</span>
          </Link>
          <Link href="/" className="text-sm font-medium">Home</Link>
          <Link href="/submit" className="text-sm font-medium">Create</Link>
          <Link href="/browse" className="text-sm font-medium">Browse</Link>
        </div>
      </div>
    </nav>
  );
}
