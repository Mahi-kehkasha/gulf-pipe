import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Metrics from '../components/Metrics'
import InventoryShowcase from '../components/InventoryShowcase'
import ContactForm from '../components/ContactForm'

export default function EnglishPage() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      {/* Who We Are / Mission / Core Values summary block directly after landing hero */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
            Company Profile
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Built on Reliability, Quality &amp; Long-Term Partnerships
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:gap-10 md:grid-cols-3 text-gray-700">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-7 h-full">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
              Who We Are
            </h3>
            <p className="text-sm leading-relaxed">
              Gulf Pipe Supply &amp; Services (GPSS) is a trusted trading and contracting company
              headquartered in the industrial hub of Al Jubail, Saudi Arabia. With a solid
              reputation built over years of dedicated service, GPSS serves key sectors including
              Oil &amp; Gas, Petrochemicals, Electromechanical, Marine Engineering, and related
              industrial fields.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              We specialize in delivering high-quality materials, reliable supply solutions, and
              technical support that help industries operate safely, efficiently, and on schedule.
              Backed by a team of highly qualified and experienced professionals, GPSS is committed
              to providing cost-effective, timely, and value-driven solutions that meet the
              evolving needs of our clients.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              Our success is built on strong relationships, trust, and a continued commitment to
              excellence in every project we undertake.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-7 h-full">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
              Our Mission
            </h3>
            <p className="text-sm leading-relaxed">
              To deliver unparalleled customer satisfaction by providing sincere, continuous, and
              innovative services tailored to our clients&apos; specific needs. We strive to offer
              reliable, customer-friendly solutions while remaining a trustworthy business partner
              dedicated to mutual growth and long-term success.
            </p>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mt-6 mb-2">
              Our Vision
            </h3>
            <p className="text-sm leading-relaxed">
              To be a leading provider of cost-effective supply and service solutions for the
              industrial sector — empowering industries today and contributing to a sustainable and
              progressive future.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-7 h-full">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2">
              Our Core Values
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Integrity:</span> We conduct our business with
                honesty, transparency, and accountability, ensuring trust at every stage.
              </li>
              <li>
                <span className="font-semibold">Customer Focus:</span> We place our customers at the
                center of everything we do, providing tailored, reliable, and result-oriented
                solutions.
              </li>
              <li>
                <span className="font-semibold">Quality Excellence:</span> We deliver high-standard
                materials and services that ensure safety, performance, and long-term value.
              </li>
              <li>
                <span className="font-semibold">Innovation:</span> We continuously seek smarter,
                more efficient, and cost-effective ways to meet evolving industry needs.
              </li>
              <li>
                <span className="font-semibold">Commitment to Time:</span> We understand the
                importance of deadlines and ensure timely delivery without compromising quality.
              </li>
              <li>
                <span className="font-semibold">Teamwork:</span> Our strength lies in a professional
                team united by collaboration, responsibility, and shared goals.
              </li>
              <li>
                <span className="font-semibold">Long-Term Relationships:</span> We believe in
                building strong, enduring partnerships with clients, suppliers, and stakeholders.
              </li>
            </ul>
          </div>
        </div>
      </section>

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
      <InventoryShowcase detailed />
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

