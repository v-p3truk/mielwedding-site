'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { getFAQItems } from '@/data/faq'

const faqItems = getFAQItems('ru')

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        className="w-full py-4 flex items-start justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 text-gold" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0 text-dark-light" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-dark-light">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-lg text-dark-light">
              Ответы на самые популярные вопросы о свадьбах в Грузии
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли ответ?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами — мы ответим на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakty" className="btn-secondary">
              Задать вопрос
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
