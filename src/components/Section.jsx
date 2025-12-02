import { useTranslation } from 'react-i18next'

export default function Section({ id, titleKey, children, isMirrored = false }) {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const directionClass = isArabic ? 'rtl text-right' : 'ltr text-left'
  const contentMirrorClass = isMirrored && isArabic ? 'flex-row-reverse' : 'flex-row'

  return (
    <section id={id} className={`py-16 md:py-20 border-b border-gray-100 ${directionClass}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-blue-900 border-b-2 border-orange-500 pb-2 ${isArabic ? 'mr-auto' : 'ml-auto'}`}>
          {titleKey}
        </h2>
        <div className={`flex flex-wrap md:flex-nowrap gap-8 ${contentMirrorClass}`}>{children}</div>
      </div>
    </section>
  )
}
