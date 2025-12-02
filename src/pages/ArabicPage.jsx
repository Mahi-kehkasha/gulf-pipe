import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Metrics from '../components/Metrics'
import InventoryShowcase from '../components/InventoryShowcase'
import ContactForm from '../components/ContactForm'

export default function ArabicPage() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      <Section id="overview" titleKey={t('section_overview')}>
        <div className="w-full">
          <p className="mb-4 text-gray-700">{t('overview_p1')}</p>
          <p className="mb-4 text-gray-700">{t('overview_p2')}</p>
          <p className="mb-4 text-gray-700">{t('overview_p3')}</p>
          <p className="mb-4 text-gray-700">{t('overview_p4')}</p>
          <p className="mb-4 text-gray-700">{t('overview_p5')}</p>
        </div>
      </Section>
      <Section id="vision-mission" titleKey={`${t('section_vision')} & ${t('section_mission')}`} isMirrored>
        <div className="w-full md:w-1/2 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-blue-900">{t('section_vision')}</h3>
          <p className="text-gray-700 italic">{t('vision_text')}</p>
        </div>
        <div className="w-full md:w-1/2 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-blue-900">{t('section_mission')}</h3>
          <p className="text-gray-700 italic">{t('mission_text')}</p>
        </div>
      </Section>
      <Metrics />
      <InventoryShowcase detailed={false} />
      <Section id="leadership" titleKey={t('section_team')}>
        <div className="w-full p-4 bg-gray-50 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-blue-800">{t('team_lead')}</h3>
          <p className="text-lg text-orange-500">{t('team_title')}</p>
        </div>
      </Section>
      <ContactForm />
    </>
  )
}

