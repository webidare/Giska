// app/submit/page.tsx
import Navigation from '../components/navigation';
import { MessageForm } from '../components/message-form';
import { createMessage } from '../lib/db';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Submit() {
  async function handleSubmit(data: any) {
    'use server';
    const id = await createMessage(data.recipient, data.message, data.intensity);
    redirect(`/details/${id}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Share Your Message
          </h1>
          <Card className="shadow-lg border-pink-100">
            <CardContent className="p-6">
              <MessageForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
