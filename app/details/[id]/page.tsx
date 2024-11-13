// app/details/[id]/page.tsx
import { Navigation } from '@/components/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getMessage } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Details({ params }: { params: { id: string } }) {
  const message = await getMessage(params.id);

  if (!message) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-12">
        <div className="max-w-xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Love Message for {message.recipient}</h2>
              <p className="text-gray-600 mb-4">{message.message}</p>
              <div className="text-sm text-gray-500 mb-6">
                Love Intensity: {message.intensity}/10
              </div>
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
