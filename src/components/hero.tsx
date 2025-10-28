import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            LegalDocAI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            India's AI Copilot for Contracts & Compliance. Simplify legal documentation, automate analysis, and track compliance with confidence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#upload"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Upload Document
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}