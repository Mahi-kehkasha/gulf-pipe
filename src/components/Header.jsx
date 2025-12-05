import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

// Simple SVG Icons
const MenuIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
)
const CloseIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
)
const GlobeIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3 10h18M3 14h18M7 21a5 5 0 01-5-5M21 16a5 5 0 00-5 5M7 3a5 5 0 00-5 5M21 8a5 5 0 01-5-5" /></svg>
)

// Language/Flag data (simplified to just the required languages)
const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  // Add more languages here if needed
];

// Reusable Tailwind classes
const BASE_LINK_CLASS = "relative font-semibold uppercase tracking-wide text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900";
const ACTIVE_CLASS = "text-orange-500 after:w-full";
const INACTIVE_CLASS = "text-gray-200 hover:text-orange-400 after:w-0";
const AFTER_CLASS = "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef(null)
  
  const isArabic = i18n.language === 'ar'
  const currentLang = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [langDropdownRef])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const changeLanguageAndRoute = (code) => {
    i18n.changeLanguage(code)
    setLangDropdownOpen(false)
    setMobileMenuOpen(false) // Close mobile menu upon selection

    // Handle routing logic
    const path = location.pathname
    if (code === 'ar' && !path.startsWith('/ar')) {
      navigate('/ar')
    } else if (code === 'en' && path.startsWith('/ar')) {
      navigate('/')
    } else if (code !== 'ar' && code !== 'en') {
      navigate('/')
    }
  }

  // Helper for Link Classes - Refined Logic
  const getLinkClass = (path) => {
    const isHomePath = (path === '/' || path === '/ar');
    const locationIsHome = (location.pathname === '/' || location.pathname === '/ar');
    
    // Determine active state for links
    let isActive = false;
    if (isHomePath) {
        isActive = locationIsHome;
    } else if (path.startsWith('#')) {
        // Simple check for hash links (assumes no full routing on anchors)
        isActive = location.hash === path;
    } else {
        isActive = location.pathname.includes(path);
    }

    return `${BASE_LINK_CLASS} ${isActive ? ACTIVE_CLASS : INACTIVE_CLASS} ${AFTER_CLASS}`
  }

  return (
    <header 
      className="sticky top-0 z-50 bg-gray-900 border-b border-orange-600/50 shadow-2xl"
      style={{ direction: isArabic ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <Link to={isArabic ? '/ar' : '/'} aria-label={t('site_title') || 'Home'}>
            <img src={logo} alt="Company Logo" className="h-10 w-auto transition-transform duration-300 hover:scale-105" />
          </Link>
          <Link to={isArabic ? '/ar' : '/'} className="text-xl md:text-2xl font-extrabold text-white tracking-widest uppercase hover:text-orange-500 transition-colors" aria-label={t('site_title')}>
            {t('company_name')}
          </Link>
        </div>

        {/* Desktop Navigation & Language */}
        <div className={`hidden md:flex items-center gap-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
          
          {/* Navigation Links */}
          <nav className={`flex items-center gap-6 ${isArabic ? 'flex-row-reverse' : ''}`} role="navigation" aria-label={t('main_navigation') || 'Main Navigation'}>
            <Link to={isArabic ? '/ar' : '/'} className={getLinkClass(isArabic ? '/ar' : '/')}>
              {t('nav_home')}
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              {t('about us') || 'About Us'}
            </Link>
            <a href="#inventory" className={getLinkClass('#inventory')}>
              {t('nav_inventory')}
            </a>
            <a href="#contact" className={getLinkClass('#contact')}>
              {t('nav_contact')}
            </a>
          </nav>

          {/* Language Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-expanded={langDropdownOpen}
              aria-label={t('language_switcher') || 'Language Switcher'}
            >
              <GlobeIcon />
              <span className="font-bold text-xs mr-1">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div 
                className={`absolute top-full mt-3 w-40 bg-white border border-gray-100 rounded-lg shadow-xl py-1 z-50 animate-fade-in
                  ${isArabic ? 'left-0 origin-top-left' : 'right-0 origin-top-right'}`} // Dynamic Positioning & Animation
                role="menu"
                aria-orientation="vertical"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguageAndRoute(lang.code)}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors aria-checked:bg-orange-100"
                    role="menuitem"
                    aria-checked={lang.code === i18n.language}
                  >
                    <span className="text-xl leading-none mr-3">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            aria-label={mobileMenuOpen ? t('close_menu') : t('open_menu')}
          >
            {mobileMenuOpen ? <CloseIcon className="h-7 w-7 text-orange-500" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Slide down) */}
      <nav 
        className={`md:hidden absolute w-full bg-gray-800 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0' // Use 'max-h-screen' for better slide
        }`}
        aria-label={t('mobile_navigation') || 'Mobile Navigation'}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          {[
            { to: isArabic ? '/ar' : '/', label: t('nav_home') },
            { to: '/about', label: t('nav_about') || 'About Us' },
            { href: '#inventory', label: t('nav_inventory') },
            { href: '#contact', label: t('nav_contact') },
          ].map((item, index) => {
            const Component = item.to ? Link : 'a';
            const linkProps = item.to ? { to: item.to } : { href: item.href };

            return (
              <Component 
                key={index}
                {...linkProps}
                className="block px-3 py-3 text-base font-semibold text-white hover:text-orange-400 hover:bg-gray-700 rounded-md transition-colors text-center border-b border-gray-700 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </Component>
            );
          })}
          
          {/* Mobile Language Switcher */}
          <div className="pt-4 mt-2 border-t border-gray-700 space-y-2">
            <p className="text-sm font-light text-gray-400 uppercase tracking-widest text-center">{t('change_language') || 'Change Language'}</p>
            <div className='flex justify-center space-x-2'>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguageAndRoute(lang.code)}
                  className={`flex items-center justify-center px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 
                    ${lang.code === i18n.language 
                      ? 'bg-orange-600 text-white shadow-lg scale-105' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`
                  }
                >
                  <span className="mr-2 text-xl leading-none">{lang.flag}</span>
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}