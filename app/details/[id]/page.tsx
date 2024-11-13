// app/details/[id]/page.tsx
import Navigation from '../../components/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getMessage } from '../../lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Details({ params }: { params: { id: string } }) {
  const message = await getMessage(params.id);

  if (!message) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto">
          <Card className="shadow-lg border-pink-100 transform hover:scale-102 transition-transform duration-200">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Love Message for {message.recipient}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{message.message}</p>
              <div className="text-pink-500 mb-8">
                Love Intensity: {message.intensity}/10
              </div>
              <Link href="/">
                <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
