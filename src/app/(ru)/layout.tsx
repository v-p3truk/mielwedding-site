import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Miel Wedding — Свадьба в Грузии',
  description: 'Организация свадеб и церемоний в Грузии. Официальная регистрация брака за 1 день. Тбилиси, Кахетия, Гудаури.',
  keywords: 'свадьба в грузии, регистрация брака грузия, свадебная церемония тбилиси, свадебное агентство грузия',
}

export default function RussianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header locale="ru" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer locale="ru" />
    </>
  )
}
