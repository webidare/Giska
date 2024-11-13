// app/page.tsx
import { Navigation } from './components/navigation';
import { MessageCarousel } from './components/message-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { searchMessages } from './lib/db';

export default async function Home() {
  // Fetch some recent messages
  const recentMessages = await searchMessages('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Send Love Messages</h1>
          <p className="text-xl text-gray-600 mb-8">Express your feelings with our beautiful love messages</p>
          <Link href="/submit">
            <Button size="lg">Create Message</Button>
          </Link>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Messages</h2>
            <MessageCarousel messages={recentMessages} />
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto text-center text-gray-600">
          <p>Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
