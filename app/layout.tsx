import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'CLUCK & STACK — Chicken & Waffles',
  description: 'Crispy. Stacked. No Apologies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev" />
      </head>
      <body className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
