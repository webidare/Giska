// app/submit/page.tsx
import  Navigation from '../components/navigation';
import { MessageForm } from '../components/message-form';
import { createMessage } from '../lib/db';
import { redirect } from 'next/navigation';

export default function Submit() {
  async function handleSubmit(data: any) {
    'use server';
    const id = await createMessage(data.recipient, data.message, data.intensity);
    redirect(`/details/${id}`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-12">
        <div className="flex justify-center">
          <MessageForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}
