// app/browse/page.tsx
import { Navigation } from '../components/navigation';
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto py-12">
        <div className="max-w-xl mx-auto space-y-8">
          <form className="flex gap-2">
            <Input
              name="q"
              defaultValue={searchParams.q}
              placeholder="Search by recipient..."
            />
            <Button type="submit">Search</Button>
          </form>

          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{message.recipient}</h3>
                  <p className="text-gray-600 mb-4">{message.message}</p>
                  <div className="text-sm text-gray-500">
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
