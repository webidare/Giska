// app/components/message-form.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export function MessageForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [intensity, setIntensity] = useState(5);

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <h2 className="text-2xl font-bold">Create Love Message</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient name"
          />
        </div>
        <div className="space-y-2">
          <label>Message</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your love message..."
            rows={4}
          />
        </div>
        <div className="space-y-2">
          <label>Love Intensity (1-10)</label>
          <Slider
            value={[intensity]}
            onValueChange={(value) => setIntensity(value[0])}
            min={1}
            max={10}
            step={1}
          />
          <span className="text-sm text-gray-500">{intensity}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSubmit({ recipient, message, intensity })}
          className="w-full"
        >
          Send Love
        </Button>
      </CardFooter>
    </Card>
  );
}
