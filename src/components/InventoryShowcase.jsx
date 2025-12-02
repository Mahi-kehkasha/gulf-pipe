import { useTranslation } from 'react-i18next'
import Section from './Section'
import pipesImg from '../assets/products/pipes.svg'
import fittingsImg from '../assets/products/fittings.svg'
import flangesImg from '../assets/products/flanges.svg'

export default function InventoryShowcase({ detailed = false }) {
  const { t } = useTranslation()

  return (
    <Section id="inventory" titleKey={t('section_inventory')}>
      <div className="w-full">
        <div className="mb-10 animate-fade-in-up">
          <p className="text-xs font-semibold tracking-wide uppercase text-gray-500">
            Products
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Complete Piping Solutions
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-700 max-w-3xl">
            {t('inventory_p1')} {t('inventory_p2')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 animate-fade-in-up">
            <div className="h-52 overflow-hidden">
              <img src={pipesImg} alt="Industrial pipe stock" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Pipes</h3>
              {detailed ? (
                <>
                  <p className="mt-2 text-sm text-gray-700">{t('ss_pipes_grade')}</p>
                  <p className="mt-1 text-sm text-gray-600">{t('ss_pipes_list')}</p>
                  <p className="mt-3 text-sm text-gray-700">{t('cs_pipes_grade')}</p>
                  <p className="mt-1 text-sm text-gray-600">{t('cs_pipes_list')}</p>
                </>
              ) : (
                <p className="mt-2 text-sm text-gray-600">
                  {t('ss_pipes_grade')} {t('ss_pipes_list')}
                </p>
              )}
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 animate-fade-in-up">
            <div className="h-52 overflow-hidden">
              <img src={fittingsImg} alt="Pipe fittings" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Fittings</h3>
              <p className="mt-2 text-sm text-gray-600">
                High-quality butt-weld and forged fittings in Carbon Steel, Stainless Steel, and
                Duplex grades to support complex piping layouts and critical industrial services.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/40 animate-fade-in-up">
            <div className="h-52 overflow-hidden">
              <img src={flangesImg} alt="Flanges and valves" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">Flanges &amp; Valves</h3>
              <p className="mt-2 text-sm text-gray-600">
                Comprehensive range of flanges, valves, and accessories engineered for reliability,
                leak integrity, and long-term performance across demanding applications.
              </p>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}
