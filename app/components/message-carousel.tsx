// app/components/message-carousel.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function MessageCarousel({ messages }: { messages: any[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full max-w-xl">
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="font-bold">{messages[current].recipient}</h3>
            <p className="text-gray-600">{messages[current].message}</p>
            <div className="flex justify-center items-center space-x-2">
              <span>Love Intensity:</span>
              <span className="font-bold">{messages[current].intensity}/10</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrent(prev => (prev - 1 + messages.length) % messages.length)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrent(prev => (prev + 1) % messages.length)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
