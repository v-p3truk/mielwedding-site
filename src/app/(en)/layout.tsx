import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Miel Wedding — Wedding Agency in Georgia',
  description: 'Organize your dream wedding in Georgia. Marriage registration in 1 day, stunning locations, complete organization.',
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header locale="en" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer locale="en" />
    </>
  )
}
