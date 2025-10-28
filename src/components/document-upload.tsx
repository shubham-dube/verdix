"use client";

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Loader2 } from 'lucide-react'

export function DocumentUpload() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    setIsAnalyzing(true)
    // Simulate document analysis
    setTimeout(() => {
      setAnalysisResult(`
        Document Analysis Complete:
        - Risk Score: 85/100
        - 3 potential risks identified
        - 2 missing clauses detected
        - Compliance status: Good
      `)
      setIsAnalyzing(false)
    }, 2000)
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
    <div id="upload" className="w-full max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Analyze Your Legal Document
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Upload any legal document to get instant AI-powered analysis and risk assessment.
        </p>
      </div>

      <div 
        {...getRootProps()} 
        className={`p-12 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950' : 'border-gray-300 dark:border-gray-700'}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {isDragActive
            ? "Drop your document here..."
            : "Drag & drop your document here, or click to select"}
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          Supports PDF, DOC, and DOCX files
        </p>
      </div>

      {isAnalyzing && (
        <div className="mt-8 text-center">
          <Loader2 className="animate-spin h-8 w-8 mx-auto text-indigo-600" />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Analyzing your document...
          </p>
        </div>
      )}

      {analysisResult && !isAnalyzing && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Analysis Results
          </h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-300">
            {analysisResult}
          </pre>
        </div>
      )}
    </div>
  )
}