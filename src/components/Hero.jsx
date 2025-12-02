import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Hero background image
// Replace the contents of this file with your actual yard photo later,
// but keep the same filename so the import continues to work.
import heroImage from '../assets/hero/placeholder-hero.svg'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  // Determine the CSS class for text/item alignment based on language
  const alignmentClass = isArabic ? 'items-end text-right' : 'items-start text-left'

  return (
    <section
      className="relative h-screen max-h-[900px] min-h-[600px] text-white" // Increased height for visual impact
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%', // Adjust position to show more of the yard/pipes
      }}
      aria-label={t('hero_main_message')}
    >
      {/* Dark Overlay for superior readability (Matches dark header theme) */}
      <div className="absolute inset-0 bg-gray-900/70" />

      <div
        className={`relative z-10 max-w-7xl mx-auto h-full px-6 md:px-8 flex flex-col justify-center transition-all duration-500 ${alignmentClass}`}
      >
        
        {/* Subtitle/Key Products */}
        <p className="mb-4 text-sm md:text-base tracking-widest uppercase text-orange-400 font-medium">
          {/* This is the product scope text from the reference */}
          Carbon. Stainless. Duplex. Super Duplex. Alloys.
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl lg:text-8xl font-black mb-4 leading-tight drop-shadow-lg">
          {/* Main message from the reference image */}
          In Stock. <br /> On Time.
        </h1>
        
        {/* Supporting Text / Company */}
        <p className="text-xl md:text-3xl mb-10 text-white max-w-3xl font-light">
          {t('company_name')} — {t('hero_tagline') || 'Your reliable partner in piping supply and services.'}
        </p>

        {/* Call-to-Action Buttons */}
        <div className={`flex flex-wrap gap-5 ${isArabic ? 'justify-end' : 'justify-start'}`}>
          <Link
            to="/about"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 text-lg uppercase tracking-wider rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
            aria-label="Find out more about Arrow Pipes"
          >
            Know About Us
          </Link>
          
          <a
            href="#contact" // Link to the contact section in the footer or a dedicated contact page
            className="border-2 border-white hover:border-orange-500 bg-transparent text-white font-bold py-3 px-8 text-lg uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
            aria-label={t('contact_us_cta') || 'Contact Us'}
          >
            {t('contact_us_cta') || 'Get in Touch'}
          </a>
        </div>
      </div>
      
      {/* Visual aid for context. The actual component uses the imported heroImage. */}
      
    </section>
  )
}