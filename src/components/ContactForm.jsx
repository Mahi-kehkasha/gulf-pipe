import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Section from './Section'
import mapImg from '../assets/map-placeholder.svg'

export default function ContactForm() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, message } = formData
    const subject = encodeURIComponent('Investment Inquiry from Website')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:investors@gpss.com?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" titleKey={t('section_contact')} isMirrored>
      <div className={`w-full md:w-1/2 p-6 bg-white rounded-lg shadow-xl animate-fade-in-up ${isArabic ? 'text-right' : 'text-left'}`}>
        <h3 className="text-2xl font-bold mb-6 text-blue-800">{t('contact_form_title')}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t('contact_form_name')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 ${isArabic ? 'text-right' : 'text-left'}`}
              aria-label={t('contact_form_name')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('contact_form_email')}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 ${isArabic ? 'text-right' : 'text-left'}`}
              aria-label={t('contact_form_email')}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t('contact_form_message')}
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 ${isArabic ? 'text-right' : 'text-left'}`}
              aria-label={t('contact_form_message')}
            />
          </div>
          <button type="submit" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
            {t('contact_form_submit')}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500 italic">{t('contact_form_note')}</p>
      </div>
      <div className={`w-full md:w-1/2 p-6 bg-gray-50 rounded-lg shadow-inner flex flex-col justify-center items-center animate-fade-in-up ${isArabic ? 'text-right' : 'text-left'}`}>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Office Location</h3>
        <img src={mapImg} alt="Map showing Al Jubail, Saudi Arabia" className="h-48 w-full rounded-md object-cover shadow-md" />
        <p className="mt-4 text-gray-600">Al Jubail, Saudi Arabia</p>
      </div>
    </Section>
  )
}

