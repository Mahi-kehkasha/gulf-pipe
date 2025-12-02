import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import EnglishPage from './pages/EnglishPage'
import ArabicPage from './pages/ArabicPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const { i18n } = useTranslation()
  const lang = i18n.language || i18n.resolvedLanguage

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <Routes>
      <Route path="/" element={<Layout lang={lang} />}>
        <Route index element={<EnglishPage />} />
        <Route path="ar" element={<ArabicPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

