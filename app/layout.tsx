import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bahía Brava',
  description: 'Una propuesta gastronómica Del Mar a la mesa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className} style={{
        overflowY: 'hidden'
      }}>{children}</body>
    </html>
  )
}
