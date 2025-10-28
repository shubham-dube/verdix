export function Stats() {
  const stats = [
    { name: 'Active Users', value: '10K+' },
    { name: 'Documents Analyzed', value: '500K+' },
    { name: 'Time Saved', value: '2M+ hrs' },
    { name: 'Compliance Rate', value: '98%' },
  ]

  return (
    <div className="bg-indigo-50 dark:bg-indigo-950/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Trusted by businesses across India
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Helping companies save time and reduce legal risks
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col bg-white/60 dark:bg-gray-800/60 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}