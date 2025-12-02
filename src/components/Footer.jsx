import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// Simple SVG Icons for Social Media (Placeholder for a more complete set)
const LinkedInIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.32v-5.592c0-1.336-.025-3.056-1.865-3.056-1.868 0-2.155 1.458-2.155 2.96v5.688h-3.32V9.248h3.189v1.464h.045c.444-.842 1.53-1.728 3.14-1.728 3.355 0 3.974 2.203 3.974 5.068v5.88h3.32v-5.88c0-3.35-.916-5.632-4.407-5.632-1.796 0-2.585.97-3.016 1.834h.045V9.248H9.86v11.204h3.32v-5.626c0-1.34.025-2.617 1.865-2.617 1.868 0 2.155 1.34 2.155 2.766v5.477h3.32v-5.477c0-2.203-.257-4.148-3.016-4.148-1.53 0-2.15.828-2.585 1.57h-.045V9.248H9.86v11.204h3.32v-5.626c0-1.34.025-2.617 1.865-2.617 1.868 0 2.155 1.34 2.155 2.766v5.477h3.32v-5.477c0-2.203-.257-4.148-3.016-4.148-1.53 0-2.15.828-2.585 1.57h-.045V9.248H9.86v11.204h3.32v-5.626c0-1.34.025-2.617 1.865-2.617 1.868 0 2.155 1.34 2.155 2.766v5.477zM6.918 6.42a1.769 1.769 0 110-3.538 1.769 1.769 0 010 3.538zM5.25 9.248h3.32v11.204H5.25V9.248z"/></svg>
)
const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.47.067 2.373.3 2.934.512s1.02.503 1.388.871c.368.368.618.89.871 1.388.212.56.445 1.464.512 2.934.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.067 1.47-.3 2.373-.512 2.934s-.503 1.02-.871 1.388c-.368.368-.89.618-1.388.871-.56.212-1.464.445-2.934.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.47-.067-2.373-.3-2.934-.512s-1.02-.503-1.388-.871c-.368-.368-.618-.89-.871-1.388-.212-.56-.445-1.464-.512-2.934-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.067-1.47.3-2.373.512-2.934s.503-1.02.871-1.388c.368-.368.89-.618 1.388-.871.56-.212 1.464-.445 2.934-.512 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.266 0-3.692.013-4.994.072-1.64.076-2.735.352-3.71.724s-1.803.882-2.436 1.515c-.633.633-.91 1.53-.724 2.436s-.732 2.07-.732 4.994c0 3.266.013 3.692.072 4.994.076 1.64.352 2.735.724 3.71s.882 1.803 1.515 2.436c.633.633 1.53.91 2.436.724s2.07.732 4.994.732c3.266 0 3.692-.013 4.994-.072 1.64-.076 2.735-.352 3.71-.724s1.803-.882 2.436-1.515c.633-.633.91-1.53.724-2.436s-.732-2.07-.732-4.994c0-3.266-.013-3.692-.072-4.994-.076-1.64-.352-2.735-.724-3.71s-.882-1.803-1.515-2.436c-.633-.633-1.53-.91-2.436-.724s-2.07-.732-4.994-.732zm0 3.99c2.21 0 4.01 1.8 4.01 4.01s-1.8 4.01-4.01 4.01-4.01-1.8-4.01-4.01 1.8-4.01 4.01-4.01zm0 2.163c1.02 0 1.847.827 1.847 1.847s-.827 1.847-1.847 1.847-1.847-.827-1.847-1.847.827-1.847 1.847-1.847zm6.536-2.887c-.638 0-1.157.519-1.157 1.157s.519 1.157 1.157 1.157 1.157-.519 1.157-1.157-.519-1.157-1.157-1.157z"/></svg>
)
const YoutubeIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.195a2.76 2.76 0 00-1.93-1.93c-1.39-0.37-7.052-0.37-8.442 0a2.76 2.76 0 00-1.93 1.93c-0.37 1.39-0.37 7.052 0 8.442a2.76 2.76 0 001.93 1.93c1.39 0.37 7.052 0.37 8.442 0a2.76 2.76 0 001.93-1.93c0.37-1.39 0.37-7.052 0-8.442zM9.99 15.68V8.32L15.67 12 9.99 15.68z"/></svg>
)
const FacebookIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.916 3.084a10.99 10.99 0 00-16.711 0c-4.463 4.463-4.463 11.696 0 16.159l3.327-3.327h-2.58v-2.844h2.58V10.74c0-3.327 2.029-5.158 5.011-5.158 1.417 0 2.63.104 2.977.151v2.85h-1.68c-1.657 0-1.976.787-1.976 1.942v2.541h3.766l-.5 3.844h-3.266V22c5.625 0 10.156-4.531 10.156-10.156s-4.531-10.159-10.156-10.159z"/></svg>
)
const MapPinIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
)
const MailIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.84 5.23L19 8M3 8v12a2 2 0 002 2h14a2 2 0 002-2V8M3 8h18"/></svg>
)
const PhoneIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a1 1 0 011-1h2.586a1 1 0 01.707.293l3.586 3.586a1 1 0 010 1.414l-3.586 3.586a1 1 0 01-1.414 0l-3.586-3.586a1 1 0 010-1.414L3.707 6.707A1 1 0 014 6H3z"/></svg>
)


// Reusable Link Component
const FooterLink = ({ to, children, isArabic }) => (
  <Link
    to={to}
    className={`hover:text-orange-500 transition-colors duration-200 text-sm font-light leading-relaxed 
      ${isArabic ? 'text-right' : 'text-left'}`}
  >
    {children}
  </Link>
)

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  
  // Custom style for RTL layout
  const rtlStyle = isArabic ? { direction: 'rtl', textAlign: 'right' } : { direction: 'ltr', textAlign: 'left' }

  const sections = [
    { 
      titleKey: 'footer_products', 
      links: [
        { key: 'pipes', to: '/products/pipes' },
        { key: 'fittings', to: '/products/fittings' },
        { key: 'flanges', to: '/products/flanges' },
        { key: 'accessories', to: '/products/accessories' },
      ]
    },
    { 
      titleKey: 'nav_about', 
      links: [
        { key: 'about vision', to: '/about#vision' },
        { key: 'about history', to: '/about#history' },
        { key: 'about corporate video', to: '/about#video' },
        { key: 'about key stats', to: '/about#stats' },
        { key: 'about whats new', to: '/news' },
        { key: 'about blogs', to: '/blog' },
       
        { key: 'about projects', to: '/projects' },
      ]
    },
    { 
      titleKey: 'footer_support', 
      links: [
        { key: 'support services', to: '/support/services' },
        { key: 'support industries', to: '/support/industries' },
        { key: 'support project packages', to: '/support/packages' },
        { key: 'support project management', to: '/support/management' },
        { key: 'support terms conditions', to: '/legal/terms' },
        { key: 'support_privacy_policy', to: '/legal/privacy' },
      ]
    },
    // The fourth column is Contact Info and Map, handled separately
  ];

  return (
    <footer className="bg-gray-900 text-gray-200" style={rtlStyle}>
      {/* Top Section: Main Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1, 2, 3 (Products, About, Support) */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <h3 className="text-lg font-bold text-orange-500 mb-3 uppercase tracking-wider border-b border-orange-500/50 pb-2">
                {t(section.titleKey)}
              </h3>
              <div className="flex flex-col space-y-1.5">
                {section.links.map(link => (
                  <FooterLink key={link.key} to={link.to} isArabic={isArabic}>
                    {t(link.key)}
                  </FooterLink>
                ))}
              </div>
            </div>
          ))}

          {/* Column 4: Contact Us & Map */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-orange-500 mb-3 uppercase tracking-wider border-b border-orange-500/50 pb-2">
              {t('nav_contact')}
            </h3>

            {/* Contact Details */}
            <div className="space-y-3 text-sm font-light">
                <p className={`flex items-start gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <MapPinIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{t('contact_address_line1')}</span>
                </p>
                <a href="mailto:info@arrowpipes.com" className={`flex items-center gap-3 hover:text-orange-500 transition-colors ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                    <MailIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span>info@arrowpipes.com</span>
                </a>
                <a href="tel:+97148832300" className={`flex items-center gap-3 hover:text-orange-500 transition-colors ${isArabic ? 'flex-row-reverse justify-end' : ''}`}>
                    <PhoneIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span>+971 4 883 2300</span>
                </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-4 border border-gray-700/80 w-full h-32 overflow-hidden rounded-lg shadow-inner">
                {/* In a real app, this would be an embedded Google Map iframe or a map component. 
                  For now, we use a placeholder image structure to mimic the reference.
                */}
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Interactive Map Here</span>
                </div>
            </div>
            <a href="#" className="text-xs text-orange-500 hover:text-orange-400 font-medium mt-1 block">
                {t('view_larger_map')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Copyright, Socials, Legal Links */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className={`max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 ${isArabic ? 'flex-col-reverse md:flex-row-reverse' : ''}`}>
          


          {/* Social Media Links */}
          <div className={`flex space-x-4 order-2 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-orange-500 transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="hover:text-orange-500 transition-colors" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Facebook"><FacebookIcon /></a>
          </div>

          {/* Legal and Sitemap Links */}
          <div className={`flex space-x-4 order-1 md:order-3 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
            
          </div>
        </div>
      </div>
    </footer>
  )
}