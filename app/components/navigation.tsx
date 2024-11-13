// app/components/navigation.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            Giska
          </Link>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/browse">Browse</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/submit">Submit</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
