import Section from '../components/Section' // Assuming Section handles the max-width and padding

// Assuming a Section component structure like this for context:
/*
function Section({ id, titleKey, children, className = '' }) {
  const { t } = useTranslation()
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {titleKey && (
          <h2 className="text-4xl font-bold text-gray-800 mb-8">{t(titleKey)}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
*/

export default function AboutPage() {
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
    // This text is derived from the smaller text block in image_b5c4be.jpg
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
      {/* 1. HERO BANNER/INITIAL OVERVIEW (Matches image_b5c7df.jpg layout) */}
      <div className="bg-gray-50 pt-12">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left Column (Main Title) */}
            <div className="space-y-4">
              <p className="text-xl font-medium text-orange-600 border-b-2 border-orange-600 w-fit pb-1">
                Who we are
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                About Us – Gulf Pipe Supply & Services
              </h1>
              {/* Optional: Add the main overview text here to match the structure */}
            </div>

            {/* Right Column (Intro Text) */}
            <div className="space-y-6 pt-10">
              <p className="text-lg text-gray-700">
                {/* Text derived from your existing content, formatted for the large intro block */}
                GPSS is a well established trading and contracting company located in the industrial city of **Al Jubail, Saudi Arabia**. We are one of the top suppliers offering services to the **Oil, Gas, Petrochemical, Electro mechanical, marine engineering**, and associated industries.
              </p>
              <p className="text-sm text-gray-500 italic">
                {history.content} {/* This is the smaller, detailed text from the image */}
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 font-semibold uppercase tracking-wider hover:bg-orange-600 transition-colors duration-300">
                COMPANY PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Separator Banner (Matches image_b5c7df.jpg's hero image) */}
      <div className="w-full h-80 bg-cover bg-center" 
           style={{ backgroundImage: 'url(./assets/corporate_silhouette_bg.jpg)' }} 
           aria-hidden="true"
      >
        {/* Placeholder for the dark corporate silhouette image */}
              </div>
      
      {/* ----------------------------------------------------- */}
      
      {/* 2. CORE OVERVIEW / WHO WE ARE (From your original component, styled) */}
      <Section id="core-overview" titleKey="GULF PIPE SUPPLY & SERVICES" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column: Detailed Description (Matches image_b5c4be.jpg left column) */}
          <div className="space-y-6 p-6 border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold text-gray-900">
              Arrow Pipes & Fittings is a premier stockist, distributor, and supplier.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Arrow Pipes & Fittings is a premier stockholder, distributor, and supplier of project materials specializing in Carbon, Stainless, Duplex, and Super Duplex steel piping products. Our operations are built on a foundation of integrity, innovation, and deep technical expertise.
            </p>
            {overview.paragraphs.map((p, index) => (
              <p key={index} className="text-sm text-gray-600">
                {p}
              </p>
            ))}
          </div>
          
          {/* Right Column: Images (Matches image_b5c4be.jpg bottom section) */}
          <div className="space-y-8">
            <div className="h-64 bg-gray-200 overflow-hidden rounded-lg shadow-lg">
                          </div>
            <div className="h-64 bg-gray-300 overflow-hidden rounded-lg shadow-lg">
                          </div>
          </div>
        </div>
      </Section>

      <hr className="max-w-7xl mx-auto border-gray-200" />
      
      {/* ----------------------------------------------------- */}
      
      {/* 3. LEADERSHIP (From your original component) */}
      <Section id="about-leadership" titleKey="Leadership" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                            </div>
            <div className="md:col-span-2 p-6 bg-white rounded-lg shadow-xl border-l-4 border-blue-600">
                <p className="text-sm font-semibold text-gray-500 mb-1">Company Leadership</p>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{leadership.name}</h3>
                <p className="text-xl text-orange-600 mb-4 font-semibold">{leadership.title}</p>
                <p className="text-gray-700 italic border-t pt-4 mt-4">
                    "{leadership.quote}"
                </p>
            </div>
        </div>
      </Section>
      
      <hr className="max-w-7xl mx-auto border-gray-200" />

      {/* ----------------------------------------------------- */}
      
      {/* 4. VISION & MISSION (Mirrored Layout, as requested) */}
      <Section id="about-vision-mission" titleKey="Our Vision & Our Mission" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Block */}
          <div className="p-8 bg-blue-50 rounded-lg shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-blue-900 flex items-center">
              <svg className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-blue-300 pl-4">
              "{vision}"
            </p>
          </div>

          {/* Mission Block */}
          <div className="p-8 bg-orange-50 rounded-lg shadow-lg border-t-4 border-orange-600 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-orange-900 flex items-center">
              <svg className="h-6 w-6 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.24a3 3 0 00-4.24-4.24L12 11.5l-4.378-4.378a3 3 0 00-4.24 4.24L10 16.5l-2.378 2.378a3 3 0 004.24 4.24L12 19.5l4.378 4.378a3 3 0 004.24-4.24L14 16.5z"/></svg>
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-orange-300 pl-4">
              "{mission}"
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}