import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nujuum',
  description: 'Daily guided lessons from native speakers',
  icons: {
    icon: '/Nujuum-Small.png',
    shortcut: '/Nujuum-Small.png',
    apple: '/Nujuum.png',
  },
  appleWebApp: {
    title: 'Nujuum',
    statusBarStyle: 'default',
    startupImage: '/Nujuum.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen">{children}</body>
    </html>
  )
} 