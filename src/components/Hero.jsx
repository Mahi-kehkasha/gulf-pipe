import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero/placeholder-hero.svg'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const textAlignClass = isArabic ? 'text-right items-end' : 'text-left items-start'
  const orderImage = isArabic ? 'md:order-2' : 'md:order-1'
  const orderContent = isArabic ? 'md:order-1' : 'md:order-2'

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 text-white"
      aria-label={t('hero_main_message')}
    >
      {/* subtle radial glow in the corner, similar to reference */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-600/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 lg:py-24">
        <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
          {/* Image side */}
          <div className={`${orderImage}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.75)] ring-2 ring-slate-800/80">
              <img
                src={heroImage}
                alt={t('image_alt_inventory') || 'Industrial worker cutting metal pipes with sparks flying'}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content side */}
          <div className={`${orderContent} flex flex-col gap-6 lg:gap-8 ${textAlignClass}`}>
            <p className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] uppercase text-orange-400 font-semibold">
              <span className="h-[2px] w-8 bg-orange-500 rounded-full" />
              Carbon. Stainless. Duplex. Alloys.
            </p>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                {isArabic ? (
                  <>
                    حلول صناعية <br /> في الوقت المناسب
                  </>
                ) : (
                  <>
                    Factory–grade <br /> power in supply.
                  </>
                )}
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-slate-200 max-w-xl">
                {t('company_name')} — {t('hero_tagline') || 'Your reliable partner in piping supply and services.'}
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 mt-4 ${isArabic ? 'justify-end' : 'justify-start'}`}>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-sm md:text-base font-semibold uppercase tracking-wide shadow-lg shadow-orange-600/40 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {isArabic ? 'اعرف عنا أكثر' : 'About Us'}
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300/40 bg-transparent text-sm md:text-base font-semibold uppercase tracking-wide text-slate-100 hover:border-orange-400 hover:text-orange-300 transition-colors"
              >
                {t('contact_us_cta') || (isArabic ? 'تواصل معنا' : 'Contact Us')}
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-xs md:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span>{isArabic ? 'مخزون جاهز للمشاريع العاجلة' : 'Stock ready for fast-track projects'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>{isArabic ? 'دعم فني وخدمة موثوقة' : 'Technical support & reliable service'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}