import { NextRequest, NextResponse } from 'next/server'

function escapeHTML(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

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
      '🔔 <b>Новая заявка с сайта mielwedding.com</b>',
      '',
      `👤 <b>Имя:</b> ${escapeHTML(name || '—')}`,
      `📧 <b>Email:</b> ${escapeHTML(email || '—')}`,
      `📱 <b>Телефон:</b> ${escapeHTML(phone || '—')}`,
      `📅 <b>Дата свадьбы:</b> ${escapeHTML(date || '—')}`,
      `💬 <b>Сообщение:</b> ${escapeHTML(message || '—')}`,
    ].join('\n')

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text()
      console.error('Telegram API error:', errorText)
      return NextResponse.json({ ok: false, error: errorText }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
