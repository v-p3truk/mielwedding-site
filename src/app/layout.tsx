import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Miel Wedding — Свадьба в Грузии',
  description: 'Организация свадеб и церемоний в Грузии. Официальная регистрация брака за 1 день. Тбилиси, Кахетия, Гудаури.',
  keywords: 'свадьба в грузии, регистрация брака грузия, свадебная церемония тбилиси, свадебное агентство грузия',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
