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
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2M9 3v2m12-2v2m-3-3h2M4 7h16M4 11h16M4 15h16M4 19h16M12 3v18M6 3v18M18 3v18M1 12h22" /></svg>
)

// Language/Flag data (simplified to just the required languages)
const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  // Add more languages here if needed
];

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

    // Handle routing based on the specific requirements in your original code snippet
    if (code === 'ar' && location.pathname !== '/ar') {
      navigate('/ar')
    } else if (code === 'en' && location.pathname === '/ar') {
      navigate('/')
    } else if (code !== 'ar' && code !== 'en') {
      // For other languages, just navigate to the base path for now or implement other logic
      navigate('/')
    }
  }

  // Helper for Link Classes
  const getLinkClass = (path) => {
    const activePath = isArabic ? '/ar' : '/'
    const isActive = location.pathname === path || (path === activePath && (location.pathname === '/' || location.pathname === '/ar'))
    
    return `relative font-semibold text-white transition-colors duration-300 tracking-wider text-sm
            ${isActive ? 'text-orange-500 after:w-full' : 'hover:text-orange-400 after:w-0'}
            after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full`
  }

  return (
    <header 
      className="sticky top-0 z-50 bg-gray-900 shadow-xl"
      style={{ direction: isArabic ? 'rtl' : 'ltr' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <Link to="/" className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase" aria-label={t('site_title')}>
            {t('company_name')}
          </Link>
        </div>

        {/* Desktop Navigation & Language */}
        <div className={`hidden md:flex items-center gap-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
          
          {/* Navigation Links */}
          <nav className={`flex items-center gap-6 uppercase ${isArabic ? 'flex-row-reverse' : ''}`}>
            <Link to={isArabic ? '/ar' : '/'} className={getLinkClass(isArabic ? '/ar' : '/')}>
              {t('nav_home')}
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              {t('nav_about') || 'About Us'}
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
              className="flex items-center gap-2 p-2 rounded-lg text-white hover:bg-gray-800 transition-colors"
              aria-expanded={langDropdownOpen}
            >
              <GlobeIcon />
              <span className="font-semibold text-sm">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <div 
                className={`absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 
                  ${isArabic ? 'left-0' : 'right-0'}`} // Position dropdown correctly for RTL
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguageAndRoute(lang.code)}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    <span className="mr-2 text-lg">{lang.flag}</span>
                    {lang.name}
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
            className="text-white hover:text-orange-500 focus:outline-none p-2"
          >
            {mobileMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Slide down) */}
      <div 
        className={`md:hidden absolute w-full bg-gray-800 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col text-center">
          {[
            { to: isArabic ? '/ar' : '/', label: t('nav_home') },
            { to: '/about', label: t('nav_about') || 'About Us' },
            { href: '#inventory', label: t('nav_inventory') },
            { href: '#contact', label: t('nav_contact') },
          ].map((item, index) => (
            item.to 
              ? <Link key={index} to={item.to} className="block px-3 py-2 text-base font-medium text-white hover:text-orange-500 hover:bg-gray-700 rounded-md transition-colors">
                  {item.label}
                </Link>
              : <a key={index} href={item.href} className="block px-3 py-2 text-base font-medium text-white hover:text-orange-500 hover:bg-gray-700 rounded-md transition-colors">
                  {item.label}
                </a>
          ))}
          
          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-gray-700">
            {LANGUAGES.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguageAndRoute(lang.code)}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-orange-500 rounded-md mt-1 transition-colors"
                >
                    <span className="mr-2 text-lg">{lang.flag}</span>
                    {lang.name}
                </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}