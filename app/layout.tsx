import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samudra Auto Service | Bengkel & Home Service Pekanbaru',
  description: 'Bengkel mobil fisik dan home service di Pekanbaru untuk service berkala, kaki-kaki, ganti oli, transmisi matic, dan kopling.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>
}
