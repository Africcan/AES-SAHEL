import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MapBackground from '@/components/MapBackground'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'AES SAHEL COIN - West African Cryptocurrency',
  description: 'Revolutionary cryptocurrency platform for West Africa with airdrop, staking, and trading features.',
  keywords: ['cryptocurrency', 'aes sahel', 'blockchain', 'west africa', 'defi'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <MapBackground />
        <Header />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
