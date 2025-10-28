import { templates } from '@/lib/dummy-data'
import { FileText, Download, Eye, Star, CheckCircle, Search } from 'lucide-react'

export default function TemplatesPage() {
  const categories = ['All', 'HR', 'Legal', 'Business', 'Property']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Template Library</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Browse and use verified legal document templates for Indian law
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>Sort by Popularity</option>
            <option>Sort by Name</option>
            <option>Sort by Recent</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Template */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-6 w-6 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Featured Template</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Employment Agreement - Complete Package</h2>
            <p className="text-indigo-100 mb-4">
              Comprehensive employment contract template compliant with Indian Labour Laws. Includes probation, 
              salary structure, leave policy, confidentiality, and termination clauses.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span>✓ 15 Clauses</span>
              <span>✓ Verified by Legal Experts</span>
              <span>✓ 2,156 Downloads</span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium flex items-center gap-2">
            <Download className="h-5 w-5" />
            Use Template
          </button>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                {template.verified && (
                  <div className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {template.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {template.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span>{template.clauses} clauses</span>
                <span>•</span>
                <span>{template.downloads.toLocaleString()} downloads</span>
              </div>

              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 mb-4">
                {template.category}
              </span>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Use Template
                </button>
                <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Your Template CTA */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Share Your Templates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Are you a legal professional? Share your templates with the community and earn from every download.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Become a Contributor
          </button>
        </div>
      </div>
    </div>
  )
}