// app/browse/page.tsx
import Navigation from '../components/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { searchMessages } from '../lib/db';

export default async function Browse({ 
  searchParams 
}: { 
  searchParams: { q?: string } 
}) {
  const messages = searchParams.q ? await searchMessages(searchParams.q) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Browse Messages
          </h1>
          
          <form className="flex gap-2">
            <Input
              name="q"
              defaultValue={searchParams.q}
              placeholder="Search by recipient..."
              className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              Search
            </Button>
          </form>

          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className="transform hover:scale-102 transition-transform duration-200 shadow-md hover:shadow-lg border-pink-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-pink-600">{message.recipient}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{message.message}</p>
                  <div className="text-sm text-pink-500">
                    Love Intensity: {message.intensity}/10
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
