// app/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Navigation from "./components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Welcome to Giska
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Giska is a platform for sharing and discovering amazing things.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/browse">Browse</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/submit">Submit</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl border-pink-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Discover</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore amazing content shared by our community.
              </p>
            </CardContent>
          </Card>
          <Card className="transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl border-pink-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Share</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Submit your own content and let others discover it.
              </p>
            </CardContent>
          </Card>
          <Card className="transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl border-pink-100 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join our growing community of creators and explorers.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
