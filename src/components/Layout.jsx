import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ lang }) {
  return (
    <div
      className={`flex flex-col min-h-screen bg-slate-50 text-slate-900 ${
        lang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

