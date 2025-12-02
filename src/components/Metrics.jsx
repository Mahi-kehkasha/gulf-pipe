import { useTranslation } from 'react-i18next'
import Section from './Section'

const metricsData = [
  { id: 1, titleKey: 'metric_1_title', valueKey: 'metric_1_value' },
  { id: 2, titleKey: 'metric_2_title', valueKey: 'metric_2_value' },
  { id: 3, titleKey: 'metric_3_title', valueKey: 'metric_3_value' },
  { id: 4, titleKey: 'metric_4_title', valueKey: 'metric_4_value' },
]

export default function Metrics() {
  const { t } = useTranslation()

  return (
    <Section id="metrics" titleKey={t('section_metrics')}>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metricsData.map((metric) => (
            <div key={metric.id} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-extrabold text-blue-800 mb-2">{t(metric.valueKey)}</p>
              <h3 className="text-lg font-semibold text-gray-600">{t(metric.titleKey)}</h3>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500 text-center">{t('metric_disclaimer')}</p>
      </div>
    </Section>
  )
}

