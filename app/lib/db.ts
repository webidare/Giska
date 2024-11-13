// app/lib/db.ts
import { sql } from '@vercel/postgres';
import { nanoid } from 'nanoid';

export interface LoveMessage {
  id: string;
  recipient: string;
  message: string;
  intensity: number;
  created_at: Date;
}

export async function createMessage(recipient: string, message: string, intensity: number): Promise<string> {
  const id = nanoid();
  await sql`
    INSERT INTO love_messages (id, recipient, message, intensity)
    VALUES (${id}, ${recipient}, ${message}, ${intensity})
  `;
  return id;
}

export async function getMessage(id: string): Promise<LoveMessage | null> {
  const { rows } = await sql<LoveMessage>`
    SELECT * FROM love_messages WHERE id = ${id}
  `;
  return rows[0] || null;
}

export async function searchMessages(recipient: string): Promise<LoveMessage[]> {
  const { rows } = await sql<LoveMessage>`
    SELECT * FROM love_messages 
    WHERE recipient ILIKE ${`%${recipient}%`}
    ORDER BY created_at DESC
    LIMIT 10
  `;
  return rows;
}

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
