import { Heart, Users, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'О компании — Miel Wedding',
  description: 'Miel Wedding — свадебное агентство в Грузии. Организуем свадьбы и церемонии с 2018 года.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <p className="text-lg text-dark-light">
              Miel Wedding — это команда профессионалов, влюблённых в Грузию и в своё дело
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <div className="prose prose-lg text-dark-light">
              <p>
                Miel Wedding родился из любви к Грузии и желания делиться её красотой с парами со всего мира.
                Мы начали с организации свадеб для друзей и знакомых, а сегодня помогаем сотням пар
                создавать незабываемые моменты.
              </p>
              <p>
                Грузия — это не просто красивые пейзажи. Это страна с богатой историей,
                невероятным гостеприимством и уникальной атмосферой, которая делает каждую
                свадьбу особенной.
              </p>
              <p>
                Наша команда знает все тонкости организации свадеб в Грузии: от оформления
                документов до выбора идеальной локации. Мы работаем с лучшими фотографами,
                декораторами и площадками страны.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-dark-light">Свадеб организовано</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-dark-light">Стран мира</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-dark-light">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-dark-light">День на регистрацию</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-dark-light">
                  Каждая пара уникальна. Мы создаём свадьбы, которые отражают вашу историю любви.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold mb-2">Внимание к деталям</h3>
                <p className="text-dark-light">
                  От первого звонка до последнего танца — мы продумываем каждую мелочь.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-semibold mb-2">Прозрачность</h3>
                <p className="text-dark-light">
                  Никаких скрытых платежей. Вы всегда знаете, за что платите.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Давайте познакомимся</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Расскажите нам о своих мечтах, и мы поможем воплотить их в жизнь
          </p>
          <Link href="/kontakty" className="btn-secondary">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  )
}
