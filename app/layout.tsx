import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const monument = localFont({
  src: [
    {
      path: '../assets/fonts/monument/MonumentExtended-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/monument/MonumentExtended-Ultrabold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-monument'
})

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Bold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Black.otf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-satoshi'
})

export const metadata: Metadata = {
  title: 'Creon',
  description: 'Creon crypto app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${satoshi.variable} ${monument.variable}`}>{children}</body>
    </html>
  )
}
