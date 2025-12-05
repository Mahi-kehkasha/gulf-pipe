import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Metrics from '../components/Metrics'
import InventoryShowcase from '../components/InventoryShowcase'
import ContactForm from '../components/ContactForm'
import yardImage from '../assets/products/pipes.svg'
import ceoPortrait from '../assets/hero/Ceo.jpeg'

// --- Reusable Style Variables & Base Classes ---
const CARD_BASE = "bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full";
const TEXT_BASE = "text-base leading-relaxed text-gray-700";
const TEXT_LG_BASE = "text-lg text-gray-700 leading-relaxed"; // New base class for overview paragraphs
const ACCENT_BULLET = "text-orange-500 font-extrabold text-2xl mr-3";

// --- Custom Components & Icons ---
const PeopleIcon = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.232 0M7 13v-1c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.232 0M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>);
const TargetIcon = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6.737a2 2 0 01-1.789-2.894l3.5-7A2 2 0 019.236 10H14zm-4 0v4m-4 0h4m-4 0l-4-4m8 8l4 4" /></svg>);
const BoltIcon = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);

const CardTitle = ({ title, icon: Icon, accentColor = 'text-blue-600' }) => (
  <div className="flex items-center space-x-3 mb-4">
    <Icon className={`h-8 w-8 ${accentColor} flex-shrink-0`} aria-hidden="true" />
    <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h3>
  </div>
)

const DifferentiatorList = ({ t }) => (
    <ul className="grid md:grid-cols-3 gap-6 text-lg text-gray-800">
        <li className='flex items-start'>
            <span className={ACCENT_BULLET}>•</span>
            <div className='flex-grow'>
                <p className="font-semibold">{t('differentiator_1') || 'Global Sourcing & Stock:'}</p>
                <p className="ml-1 text-gray-600 text-base">{t('differentiator_1_desc') || 'Access to global stock, superior sourcing, and reliable supply chains.'}</p>
            </div>
        </li>
        <li className='flex items-start'>
            <span className={ACCENT_BULLET}>•</span>
            <div className='flex-grow'>
                <p className="font-semibold">{t('differentiator_2') || 'Certified Quality:'}</p>
                <p className="ml-1 text-gray-600 text-base">{t('differentiator_2_desc') || 'Adherence to certified quality standards (ISO, API, etc.) for safety.'}</p>
            </div>
        </li>
        <li className='flex items-start'>
            <span className={ACCENT_BULLET}>•</span>
            <div className='flex-grow'>
                <p className="font-semibold">{t('differentiator_3') || 'Dedicated Support:'}</p>
                <p className="ml-1 text-gray-600 text-base">{t('differentiator_3_desc') || 'Dedicated technical support, efficient logistics, and timely delivery.'}</p>
            </div>
        </li>
    </ul>
);

export default function EnglishPage() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />


      {/* 2. OVERVIEW Section (Enhanced Structure) */}
      <Section id="overview" titleKey={t('section_overview') || 'Company Overview'} className="bg-white">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="space-y-6 md:col-span-3">
            <h3 className="text-3xl font-bold text-gray-900 border-b-2 border-orange-500 w-fit pb-1">
              {t('overview_subtitle_1') || 'Leading Supplier in the MENA Region'}
            </h3>
            <p className={TEXT_LG_BASE}>{t('overview_p1') || 'Paragraph 1 of company overview.'}</p>
            <p className={TEXT_LG_BASE}>{t('overview_p2') || 'Paragraph 2 of company overview.'}</p>
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-600 pl-4 py-2 italic bg-blue-50/50">
              "{t('overview_p3') || 'GPSS staff are highly experienced, ready to provide required technical guidance and economical solutions, ensuring best after-sales service.'}"
            </p>
          </div>
          <div className="md:col-span-2 h-72 rounded-lg shadow-2xl overflow-hidden ring-4 ring-gray-100/50">
            <img
              src={yardImage}
              alt={t('image_alt_inventory') || 'Large industrial pipes and fittings in a warehouse'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Differentiators - Now using the consolidated component */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-2xl font-bold text-gray-800 mb-6">{t('differentiators_heading') || 'Key Differentiators'}</h4>
          <DifferentiatorList t={t} />
        </div>
      </Section>

      {/* 3. METRICS Section (Kept as separate component) */}
      <Metrics />

      {/* 4. INVENTORY SHOWCASE Section (Kept as separate component) */}
      <InventoryShowcase detailed />

      {/* 5. LEADERSHIP Section (Refined for maximum impact) */}
      <Section id="leadership" titleKey={t('section_team') || 'Our Leadership Team'} className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto p-10 bg-gray-800 rounded-xl shadow-2xl grid md:grid-cols-3 gap-8 items-center border-b-4 border-orange-600">
          <div className="md:col-span-1 h-64 bg-gray-600 rounded-lg shadow-inner overflow-hidden mx-auto w-full border-4 border-orange-500" aria-label="Portrait of Team Lead">
            <img
              src={ceoPortrait}
              alt={t('ceo_image_alt') || 'Portrait of Mohammed Eid Rashid Al Khater, CEO'}
              className="w-full h-full object-contain bg-gray-900"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-orange-400">{t('leadership_role') || 'Executive Leadership'}</h3>
            <p className="text-4xl font-extrabold text-white">{t('team_lead') || 'Mohammed Eid Rashid Al Khater'}</p>
            <p className="text-xl font-semibold text-blue-400">{t('team_title') || 'CEO'}</p>
            <blockquote className="text-lg text-gray-300 italic border-l-4 border-orange-500 pl-4 py-2 mt-4">
              {t('team_quote') || '"Our commitment is to deliver quality and value, fostering long-term trust with every partner."'}
            </blockquote>
          </div>
        </div>
      </Section>

      {/* 6. CONTACT FORM Section (Kept as separate component) */}
      <ContactForm />
    </>
  )
}