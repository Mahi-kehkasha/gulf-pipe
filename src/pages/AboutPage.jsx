import { useTranslation } from 'react-i18next'
import Section from '../components/Section' // Assumed Section handles max-width and padding
import ceoPortrait from '../assets/hero/Ceo.jpeg'

// --- Custom Component for Standardized Headings ---
// This ensures all section titles look consistent and professional
const SectionHeader = ({ subTitle, title, color = 'text-orange-600' }) => (
  <div className="mb-10 text-center">
    <p className={`text-sm font-semibold uppercase tracking-widest ${color} mb-2`}>
      {subTitle}
    </p>
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
      {title}
    </h2>
  </div>
)

export default function AboutPage() {
  const { t } = useTranslation()

  // --- Data structures (Reorganized for clarity) ---
  const overview = {
    title: "GULF PIPE SUPPLY & SERVICES",
    paragraphs: [
      "GPSS takes immense pleasure in introducing itself as a well established trading and contracting company located in the industrial city of Al Jubail, Saudi Arabia.",
      "We take pride in announcing we are one of the top suppliers of Al Jubail offering our services to the Oil, Gas, Petrochemical, Electro mechanical, marine engineering and associated engineering industries.",
      "GPSS has a team of qualified, well experienced technical staff who challenge themselves to provide cost effective solutions to customers' needs by offering them high standard material in the best possible time and helping them to meet their deadlines.",
      "Our staff is always ready to cater to the specific needs of our customers by providing required technical guidance and economical solutions and also best after sales service.",
      "Today we also take pride in saying at GPSS we have not only maintained principles but also the trust of our clients by building a strong network of customer relationship.",
    ]
  }

  const history = {
    content: "Established over 30 years ago, Arrow Pipes began as a modest piping supplier with a bold vision to redefine quality and stability in the industry. Through consistent growth, strategic alliances, and an unwavering commitment to excellence, we have evolved into one of the largest stockists and distributors in the MENA region. Today, we operate from a 1 million sq. ft. stocking facility in Dubai’s Jebel Ali Free Zone, maintaining over 40,000 metric tons of ready inventory. With a global client base, we continue to grow and innovate—always guided by our core values of delivering quality materials, on time, every time."
  }

  const leadership = {
    name: "MOHAMMED EID RASHID AL KHATER",
    title: "CEO",
    quote: "Providing strategic leadership and vision to ensure GPSS continues to deliver reliable, cost effective supply and service solutions to industry partners.",
  }
  
  const vision = "Cost effective supply and service solutions for the industry for the present and future."
  const mission = "To achieve total customer satisfaction by providing sincere and continuous services to their focused needs, to develop and maintain customer friendly solutions and to be a trustworthy business partner for mutual growth."

  // --- Component JSX ---
  return (
    <>
      {/* 1. HERO BANNER/INITIAL OVERVIEW (Enhanced) */}
      <div className="bg-gray-900 pt-20 pb-16 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column (Main Title & Intro) */}
            <div className="space-y-6">
              <p className="text-lg font-semibold text-orange-400 uppercase tracking-widest">
                {t('who we are') || 'Who We Are'}
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                {t('about us') || 'About Us'}
              </h1>
              <p className="text-xl text-gray-300">
                GPSS is a well established trading and contracting company located in the industrial city of **Al Jubail, Saudi Arabia**. We are one of the top suppliers offering services to the **Oil, Gas, Petrochemical, Electro mechanical, marine engineering**, and associated industries.
              </p>
              <button 
                className="mt-4 bg-orange-600 text-white px-10 py-3 font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
                aria-label={t('download_profile') || 'Download Company Profile'}
              >
                {t('company profile') || 'COMPANY PROFILE'}
              </button>
            </div>

            {/* Right Column (Detailed History Block) */}
            <div className="space-y-4 pt-4 md:pt-16 bg-gray-800 p-6 rounded-xl shadow-inner border-l-4 border-orange-600">
                <p className="text-sm font-medium text-orange-500 uppercase">Our Heritage</p>
                <p className="text-base text-gray-400 leading-relaxed italic">
                  {history.content}
                </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Separator Banner (Using a common industrial placeholder) */}
      <div className="w-full h-80 bg-gray-600 bg-blend-multiply flex items-center justify-center" 
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1544773836-e17f223f03b2?fit=crop&w=1600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} 
            aria-hidden="true"
      >
        <div className='text-center text-white p-8 bg-black/40 rounded-lg'>
          <p className='text-3xl font-bold uppercase tracking-wider'>
            Engineering Excellence in the MENA Region
          </p>
        </div>
      </div>
      
      {/* ----------------------------------------------------- */}
      
      {/* 2. CORE OVERVIEW / WHO WE ARE (Refined Section) */}
      <Section id="core-overview" className="bg-white py-16">
        <SectionHeader 
          subTitle={t('our_promise') || 'Our Promise'}
          title={t('premier stockist') || 'A Premier Stockist & Distributor'}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* Left Column: Detailed Description */}
          <div className="md:col-span-2 space-y-6 p-6 border-l-4 border-orange-500 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-900">
              {t('arrow pipes') || 'Arrow Pipes & Fittings is a premier stockist, distributor, and supplier.'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('arrow pipes detail') || 'Arrow Pipes & Fittings is a premier stockholder, distributor, and supplier of project materials specializing in Carbon, Stainless, Duplex, and Super Duplex steel piping products. Our operations are built on a foundation of integrity, innovation, and deep technical expertise.'}
            </p>
            {overview.paragraphs.map((p, index) => (
              <p key={index} className="text-base text-gray-600 flex items-start">
                <svg className="h-5 w-5 mr-2 mt-1 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {p}
              </p>
            ))}
          </div>
          
          {/* Right Column: Images (Placeholder for visual interest) */}
          <div className="md:col-span-1 space-y-6">
            <div className="h-48 bg-gray-300 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.05] transition-transform duration-300">
               
            </div>
            <div className="h-48 bg-gray-400 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.05] transition-transform duration-300">
               
            </div>
          </div>
        </div>
      </Section>

      <hr className="max-w-7xl mx-auto border-gray-100" />
      
      {/* ----------------------------------------------------- */}
      
      {/* 3. LEADERSHIP (Enhanced Card Design) */}
      <Section id="about-leadership" className="bg-gray-50 py-16">
        <SectionHeader 
          subTitle={t('our leader') || 'Our Leader'}
          title={t('leadership') || 'Meet Our Leadership'}
          color='text-blue-600'
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl shadow-2xl border-t-8 border-blue-600">
          <div className="md:col-span-1 h-64 w-full bg-gray-300 rounded-lg overflow-hidden shadow-lg mx-auto" aria-label="Portrait of CEO, Mohammed Eid Rashid Al Khater">
            <img
              src={ceoPortrait}
              alt={t('ceo_image_alt') || 'Portrait of Mohammed Eid Rashid Al Khater, CEO'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{t('company leadership') || 'Company Leadership'}</p>
            <h3 className="text-3xl font-bold text-gray-800">{leadership.name}</h3>
            <p className="text-xl text-blue-600 font-bold">{leadership.title}</p>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-orange-500 pl-4 py-2 mt-4">
                "{leadership.quote}"
            </blockquote>
          </div>
        </div>
      </Section>
      
      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* ----------------------------------------------------- */}
      
      {/* 4. VISION & MISSION (Refined Card Design) */}
      <Section id="about-vision-mission" className="bg-white py-16">
        <SectionHeader 
          subTitle={t('our_future') || 'Our Future'}
          title={t('Vision & Mission') || 'Vision & Mission'}
          color='text-orange-600'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Block */}
          <div className="p-10 bg-blue-50 rounded-xl shadow-lg border-t-8 border-blue-600 flex flex-col hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-extrabold mb-4 text-blue-900 flex items-center">
              <svg className="h-8 w-8 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              {t('our vision') || 'Our Vision'}
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-blue-300 pl-4 py-2 flex-grow">
              "{vision}"
            </p>
          </div>

          {/* Mission Block */}
          <div className="p-10 bg-orange-50 rounded-xl shadow-lg border-t-8 border-orange-600 flex flex-col hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-extrabold mb-4 text-orange-900 flex items-center">
              <svg className="h-8 w-8 mr-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.24a3 3 0 00-4.24-4.24L12 11.5l-4.378-4.378a3 3 0 00-4.24 4.24L10 16.5l-2.378 2.378a3 3 0 004.24 4.24L12 19.5l4.378 4.378a3 3 0 004.24-4.24L14 16.5z"/></svg>
              {t('our mission') || 'Our Mission'}
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-orange-300 pl-4 py-2 flex-grow">
              "{mission}"
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}