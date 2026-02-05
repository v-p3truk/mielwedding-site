import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contacts — Miel Wedding',
  description: 'Contact Miel Wedding. Phone, email, office address in Tbilisi.',
}

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-dark-light">
              Get in touch with us in any way that works for you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-8">How to Reach Us</h2>

              <div className="space-y-6">
                <a
                  href="tel:+995505053424"
                  className="flex items-start gap-4 p-4 border rounded-lg hover:border-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-dark-light">+995 505 05 34 24</p>
                    <p className="text-sm text-dark-light">Call or text anytime</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/995505053424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border rounded-lg hover:border-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-dark-light">+995 505 05 34 24</p>
                    <p className="text-sm text-dark-light">Quick response guaranteed</p>
                  </div>
                </a>

                <a
                  href="mailto:weddingmiel@gmail.com"
                  className="flex items-start gap-4 p-4 border rounded-lg hover:border-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-dark-light">weddingmiel@gmail.com</p>
                    <p className="text-sm text-dark-light">For detailed inquiries</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/mielwedding.georgia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border rounded-lg hover:border-gold transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-dark-light">@mielwedding.georgia</p>
                    <p className="text-sm text-dark-light">See our work</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-dark-light">2 Shota Rustaveli Avenue</p>
                    <p className="text-dark-light">Tbilisi, 0108, Georgia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-dark-light">Mon-Fri: 10:00 AM - 7:00 PM</p>
                    <p className="text-dark-light">Sat-Sun: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send a Request</h2>
              <ContactForm locale="en" />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-cream">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-dark/20 mx-auto mb-4" />
            <p className="text-dark-light">Google Maps</p>
          </div>
        </div>
      </section>
    </>
  )
}
