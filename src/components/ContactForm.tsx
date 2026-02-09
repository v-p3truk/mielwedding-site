'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface ContactFormProps {
  locale: 'en' | 'ru'
}

const content = {
  en: {
    name: 'Your Name',
    namePlaceholder: 'How should we call you?',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone / WhatsApp',
    phonePlaceholder: '+1 234 567 8900',
    date: 'Approximate Wedding Date',
    datePlaceholder: 'e.g., June 2025',
    message: 'Message',
    messagePlaceholder: 'Tell us about your wishes...',
    submit: 'Send Request',
    submitting: 'Sending...',
    consent: 'By clicking the button, you agree to the processing of personal data',
    thankYouPath: '/contacts/thank-you',
  },
  ru: {
    name: 'Ваше имя',
    namePlaceholder: 'Как к вам обращаться?',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Телефон / WhatsApp',
    phonePlaceholder: '+7 123 456 78 90',
    date: 'Примерная дата свадьбы',
    datePlaceholder: 'например, июнь 2025',
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите о ваших пожеланиях...',
    submit: 'Отправить заявку',
    submitting: 'Отправляем...',
    consent: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных',
    thankYouPath: '/ru/kontakty/spasibo',
  },
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const t = content[locale]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        router.push(t.thankYouPath)
      } else {
        router.push(t.thankYouPath)
      }
    } catch {
      router.push(t.thankYouPath)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gold transition-colors"
          placeholder={t.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gold transition-colors"
          placeholder={t.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gold transition-colors"
          placeholder={t.phonePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium mb-2">
          {t.date}
        </label>
        <input
          type="text"
          id="date"
          name="date"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gold transition-colors"
          placeholder={t.datePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder={t.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
      <p className="text-sm text-dark-light text-center">
        {t.consent}
      </p>
    </form>
  )
}
