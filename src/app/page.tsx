import Hero from '@/components/Hero/Hero';
import Navigation from '@/components/Navigation/Navigation';

import './globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navigation />
      <Hero />
    </main>
  )
}
