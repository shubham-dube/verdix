import { Scale, FileText, AlertCircle, Calendar } from 'lucide-react'

const features = [
  {
    name: 'AI Document Analysis',
    description: 'Upload any legal document and get instant insights, risk analysis, and plain language summaries.',
    icon: FileText,
  },
  {
    name: 'Smart Contract Generation',
    description: 'Create customized legal documents using AI, with built-in compliance with Indian laws.',
    icon: Scale,
  },
  {
    name: 'Risk Assessment',
    description: 'Get detailed risk scores and analysis for every clause in your contracts.',
    icon: AlertCircle,
  },
  {
    name: 'Compliance Tracking',
    description: 'Never miss important deadlines with automated tracking of renewals and compliance dates.',
    icon: Calendar,
  },
]

export function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster Legal Work</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to manage legal documents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Streamline your legal workflows with AI-powered tools designed specifically for Indian businesses and professionals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}