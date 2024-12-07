import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nujuum - Learn Spoken Arabic',
  description: 'Daily guided lessons from native speakers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 