import { useTranslation } from 'react-i18next'
import Section from './Section'
import pipesImg from '../assets/products/pipes.svg'
import fittingsImg from '../assets/products/fittings.svg'
import flangesImg from '../assets/products/flanges.svg'

export default function InventoryShowcase({ detailed = false }) {
  const { t } = useTranslation()

  return (
    <Section id="inventory" titleKey={t('section_inventory')} hideTitle>
      <div className="w-full flex flex-col gap-12">
        {/* Top text layout (left big heading, right description) */}
        <div className="grid md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
              {t('inventory_label') || 'What we offer'}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t('inventory_heading') || 'Engineering solutions for\nall industries.'}
            </h2>
          </div>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
            <p>
              {t('inventory_p1')}
            </p>
            <p>
              {t('inventory_p2')}
            </p>
          </div>
        </div>

        {/* Bottom icon row (4 simple service items) */}
        <div className="grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Pipes */}
          <article className="group flex flex-col items-start md:items-center lg:items-start gap-3">
            <div className="h-14 w-14 flex items-center justify-center">
              <img src={pipesImg} alt="Pipes icon" className="h-12 w-12 object-contain" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              {t('inventory_pipes_title') || 'Metal manufacturing'}
            </h3>
            <p className="text-xs text-gray-500">
              {t('inventory_pipes_sub') || 'Carbon & stainless steel piping for fabrication shops.'}
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors"
            >
              <span className="mr-1">→</span>
            </button>
          </article>

          {/* Fittings */}
          <article className="group flex flex-col items-start md:items-center lg:items-start gap-3">
            <div className="h-14 w-14 flex items-center justify-center">
              <img src={fittingsImg} alt="Fittings icon" className="h-12 w-12 object-contain" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              {t('inventory_fittings_title') || 'Oil refinery plants'}
            </h3>
            <p className="text-xs text-gray-500">
              {t('inventory_fittings_sub') || 'High‑integrity fittings for refinery and process units.'}
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors"
            >
              <span className="mr-1">→</span>
            </button>
          </article>

          {/* Flanges & Valves */}
          <article className="group flex flex-col items-start md:items-center lg:items-start gap-3">
            <div className="h-14 w-14 flex items-center justify-center">
              <img src={flangesImg} alt="Flanges icon" className="h-12 w-12 object-contain" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              {t('inventory_flanges_title') || 'Power generation'}
            </h3>
            <p className="text-xs text-gray-500">
              {t('inventory_flanges_sub') || 'Flanges and valves supporting power and utility systems.'}
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors"
            >
              <span className="mr-1">→</span>
            </button>
          </article>

          {/* Structural & Specials */}
          <article className="group flex flex-col items-start md:items-center lg:items-start gap-3">
            <div className="h-14 w-14 flex items-center justify-center">
              <span className="h-12 w-12 flex items-center justify-center rounded-full border border-dashed border-gray-300 text-xl font-bold text-orange-500">
                +
              </span>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              {t('inventory_structural_title') || 'Construction works'}
            </h3>
            <p className="text-xs text-gray-500">
              {t('inventory_structural_sub') || 'Structural steel and specials for pipe racks and construction.'}
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-orange-500 transition-colors"
            >
              <span className="mr-1">→</span>
            </button>
          </article>
        </div>
      </div>
    </Section>
  )
}
