import Image from 'next/image'

const testimonials = [
  {
    content: "LegalDocAI has transformed how we handle contracts. The AI analysis catches risks we might have missed, and the compliance tracking is invaluable.",
    author: "Priya Sharma",
    role: "Legal Head",
    company: "TechStart India",
    image: "/avatars/avatar-1.png"
  },
  {
    content: "As a startup founder, having LegalDocAI is like having a legal team in your pocket. The document generation and risk analysis features have saved us thousands in legal fees.",
    author: "Rajesh Kumar",
    role: "CEO",
    company: "InnovateHub",
    image: "/avatars/avatar-2.png"
  },
  {
    content: "The platform's understanding of Indian law contexts is impressive. It's not just analysis - it provides practical suggestions aligned with local regulations.",
    author: "Amit Patel",
    role: "Compliance Officer",
    company: "FinTech Solutions",
    image: "/avatars/avatar-3.png"
  },
]

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by India's Leading Companies
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 h-full flex flex-col">
                <div className="flex-1">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <div className="h-16 w-16 rounded-full border-4 border-white dark:border-gray-800 shadow-sm overflow-hidden">
                      <div className="bg-gradient-to-br from-indigo-400 to-purple-500 h-full w-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonial.author[0]}
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-200 dark:text-gray-700 mb-6">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 dark:text-white sm:text-2xl sm:leading-9">
                    {testimonial.content}
                  </blockquote>
                </div>
                <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-8">
                  <div className="flex items-start">
                    <div>
                      <div className="text-base font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}