'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Loader2, FileText, CheckCircle, AlertTriangle } from 'lucide-react'

export default function AnalyzePage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    setIsAnalyzing(true)
    setAnalysisComplete(false)
    setProgress(0)

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analyze Contract</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Upload your legal document for AI-powered analysis and risk assessment
        </p>
      </div>

      {!analysisComplete && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div 
            {...getRootProps()} 
            className={`p-16 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
              isDragActive 
                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950' 
                : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {isDragActive ? "Drop your document here" : "Upload Legal Document"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Drag & drop your document here, or click to select
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Supports PDF, DOC, and DOCX files (Max 10MB)
            </p>
          </div>

          {isAnalyzing && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Loader2 className="animate-spin h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Analyzing your document...
                    </p>
                    <p className="text-xs text-gray-500">
                      {progress < 30 ? 'Extracting clauses...' :
                       progress < 60 ? 'Analyzing risk factors...' :
                       progress < 90 ? 'Checking legal compliance...' :
                       'Generating report...'}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-indigo-600">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}

      {analysisComplete && (
        <div className="space-y-6">
          {/* Success Message */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  Analysis Complete!
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Your document has been successfully analyzed. Review the findings below.
                </p>
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">78</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Risk Score</p>
                <p className="text-xs text-gray-500 mt-2">Good - Minor issues found</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clauses Analyzed</p>
                <p className="text-xs text-gray-500 mt-2">All clauses reviewed</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">High Risk Issues</p>
                <p className="text-xs text-gray-500 mt-2">Requires attention</p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Findings</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Non-Compete Clause Duration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    The 5-year non-compete period is unreasonably long and may not be enforceable under Indian law. 
                    Recommend reducing to 1-2 years.
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2">
                    📚 Reference: Section 27, Indian Contract Act, 1872
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border-l-4 border-red-500">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Liability Limitation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Complete exclusion of liability for consequential damages may violate Section 73 of Indian Contract Act. 
                    Consider adding exceptions for gross negligence.
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2">
                    📚 Reference: Section 73, Indian Contract Act, 1872
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border-l-4 border-green-500">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Payment Terms</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    30-day payment terms are standard and fair. No issues identified.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              View Detailed Report
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
              Download PDF Report
            </button>
            <button 
              onClick={() => setAnalysisComplete(false)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Analyze Another Document
            </button>
          </div>
        </div>
      )}
    </div>
  )
}