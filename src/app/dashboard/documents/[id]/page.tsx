import { clauseAnalysis, documents } from '@/lib/dummy-data'
import { ArrowLeft, Download, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'
import Link from 'next/link'

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const document = documents.find(d => d.id === params.id) || documents[0]

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-50 dark:bg-green-900/30'
      case 'medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30'
      case 'high': return 'text-red-600 bg-red-50 dark:bg-red-900/30'
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-900/30'
    }
  }

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="h-5 w-5" />
      case 'medium': return <AlertTriangle className="h-5 w-5" />
      case 'high': return <XCircle className="h-5 w-5" />
      default: return <Info className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        href="/dashboard/documents"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Documents
      </Link>

      {/* Document Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{document.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{document.type}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-gray-500">
                Uploaded: {new Date(document.uploadedAt).toLocaleDateString()}
              </span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-500">{document.clauses} clauses analyzed</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className={`text-4xl font-bold ${
                document.riskScore >= 80 ? 'text-green-600' :
                document.riskScore >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {document.riskScore}
              </div>
              <p className="text-sm text-gray-500 mt-1">Risk Score</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Clauses</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{document.clauses}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Risky Clauses</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{document.riskyClauseCount}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Safe Clauses</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{document.clauses - document.riskyClauseCount}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Clause Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Detailed Clause Analysis</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            AI-powered analysis of each clause with risk assessment and suggestions
          </p>
        </div>
        <div className="p-6 space-y-4">
          {clauseAnalysis.map((clause) => (
            <div
              key={clause.id}
              className={`p-6 rounded-lg border-l-4 ${
                clause.riskLevel === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/10' :
                clause.riskLevel === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10' :
                'border-green-500 bg-green-50 dark:bg-green-900/10'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{clause.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getRiskColor(clause.riskLevel)}`}>
                      {getRiskIcon(clause.riskLevel)}
                      {clause.riskLevel.toUpperCase()} RISK
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{clause.content}"
                  </p>
                  {clause.issue && (
                    <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">⚠️ Issue Identified:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{clause.issue}</p>
                    </div>
                  )}
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">💡 AI Suggestion:</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{clause.suggestion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal References */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Applicable Legal References</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">Indian Contract Act, 1872 - Section 73</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Compensation for loss or damage caused by breach of contract
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">DPDP Act 2023</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Digital Personal Data Protection regulations for data handling clauses
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">Labour Laws - Termination Guidelines</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Standard practices for employment termination and notice periods
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}