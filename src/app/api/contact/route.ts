import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const date = formData.get('date') as string
    const message = formData.get('message') as string

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID')
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    const text = [
      '🔔 *Новая заявка с сайта mielwedding.com*',
      '',
      `👤 *Имя:* ${name || '—'}`,
      `📧 *Email:* ${email || '—'}`,
      `📱 *Телефон:* ${phone || '—'}`,
      `📅 *Дата свадьбы:* ${date || '—'}`,
      `💬 *Сообщение:* ${message || '—'}`,
    ].join('\n')

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', await telegramResponse.text())
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
