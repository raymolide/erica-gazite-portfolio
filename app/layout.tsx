import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Érica Gazite - Portfolio',
  description: 'Fashion Designer and Marketing Specialist' 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
