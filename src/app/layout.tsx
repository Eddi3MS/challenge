import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const source = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netimóveis - Imóveis para comprar ou alugar',
  description: 'Encontre o imóvel dos seus sonhos...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={source.className}>{children}</body>
    </html>
  )
}

