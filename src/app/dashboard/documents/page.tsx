import { documents } from '@/lib/dummy-data'
import { FileText, Download, Eye, Trash2, CheckCircle, AlertTriangle, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Documents</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage and analyze all your legal documents
          </p>
        </div>
        <Link
          href="/dashboard/analyze"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Upload New Document
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>All Types</option>
            <option>Employment Agreement</option>
            <option>NDA</option>
            <option>Consultancy</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>All Status</option>
            <option>Analyzed</option>
            <option>Pending</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>Sort by Date</option>
            <option>Sort by Risk Score</option>
            <option>Sort by Name</option>
          </select>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doc.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{doc.type}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-gray-500">
                      Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs text-gray-500">{doc.clauses} clauses</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className={`text-xs font-medium ${
                      doc.riskyClauseCount === 0 ? 'text-green-600' : 
                      doc.riskyClauseCount <= 2 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {doc.riskyClauseCount} risky clauses
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Risk Score */}
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    doc.riskScore >= 80 ? 'text-green-600' :
                    doc.riskScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {doc.riskScore}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Risk Score</p>
                  {doc.riskScore >= 80 ? (
                    <CheckCircle className="h-5 w-5 text-green-600 mx-auto mt-2" />
                  ) : doc.riskScore >= 60 ? (
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mx-auto mt-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600 mx-auto mt-2" />
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/dashboard/documents/${doc.id}`}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="View Details"
                  >
                    <Eye className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </Link>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Download"
                  >
                    <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar for pending analysis */}
            {doc.status === 'pending' && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Analysis in progress...</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}