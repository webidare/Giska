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
