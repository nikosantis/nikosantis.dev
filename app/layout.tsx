import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

import { cn } from '@/lib/utils'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  metadataBase: new URL('https://nikosantis.dev/'),
  alternates: {
    canonical: '/'
  },
  title: 'Nikolas Santis | Desarrollador Fullstack | React, Next.js, Node.js',
  description:
    'Soy Nikolas Santis, un desarrollador fullstack con más de 14 años de experiencia, especializado en convertir ideas innovadoras en soluciones web escalables usando tecnologías como React, Next.js, y Node.js. Trabajo remoto desde Villa Alemana, Chile, creando productos de alto rendimiento y optimizando la experiencia de usuario.',
  authors: {
    name: 'Nikolas Santis',
    url: 'https://nikosantis.dev'
  },
  creator: 'Nikolas Santis',
  publisher: 'Nikolas Santis'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        'bg-white text-black dark:bg-neutral-900 dark:text-gray-100'
      )}
    >
      <body className='mx-4 flex min-h-screen max-w-2xl flex-col antialiased lg:mx-auto'>
        <Header />
        <div className='mb-40 h-full flex-1'>{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
