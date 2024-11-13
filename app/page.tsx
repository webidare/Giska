// app/page.tsx

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navigation from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold">Welcome to Giska</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Giska is a platform for sharing and discovering amazing things.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link href="/browse">Browse</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/submit">Submit</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
