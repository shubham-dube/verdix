'use client'

import { useState } from 'react'
import { FileText, Loader2, Download, Sparkles } from 'lucide-react'

const documentTypes = [
  'Employment Agreement',
  'Non-Disclosure Agreement (NDA)',
  'Consultancy Agreement',
  'Service Agreement',
  'Partnership Deed',
  'Rent Agreement',
  'Vendor Agreement',
  'Freelance Contract',
]

export default function GeneratePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setGenerated(true)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Generate Legal Document</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Create customized legal documents using AI, compliant with Indian laws
        </p>
      </div>

      {!generated && (
        <div className="space-y-6">
          {/* Document Type Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select Document Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedType === type
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30'
                      : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
                  }`}
                >
                  <FileText className={`h-6 w-6 mb-2 ${
                    selectedType === type ? 'text-indigo-600' : 'text-gray-400'
                  }`} />
                  <p className={`text-sm font-medium ${
                    selectedType === type 
                      ? 'text-indigo-900 dark:text-indigo-100' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {type}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* AI Prompt */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Describe Your Requirements
            </h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create a consultancy agreement for 6 months with ₹50,000/month payment. Include confidentiality, deliverables, and termination clauses. Project starts January 2026."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: Be specific about parties involved, duration, payment terms, and key conditions
            </p>
          </div>

          {/* Example Prompts */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
              Example Prompts:
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => setPrompt("Create an employment contract for Software Developer position with ₹12 LPA salary, 3 months probation, and 2 months notice period.")}
                className="block w-full text-left text-sm text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                → Employment contract for Software Developer with ₹12 LPA, 3 months probation
              </button>
              <button 
                onClick={() => setPrompt("Create an NDA for a mobile app development project. Duration: 2 years. Must include non-solicitation and data protection clauses.")}
                className="block w-full text-left text-sm text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                → NDA for mobile app project with non-solicitation clause
              </button>
              <button 
                onClick={() => setPrompt("Create a 11-month rent agreement for 2BHK apartment in Mumbai. Monthly rent: ₹35,000. Security deposit: ₹1,05,000.")}
                className="block w-full text-left text-sm text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100"
              >
                → 11-month rent agreement for 2BHK in Mumbai, ₹35,000/month
              </button>
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleGenerate}
              disabled={!selectedType || !prompt || isGenerating}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-lg font-medium"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  Generating Document...
                </>
              ) : (
                <>
                  <Sparkles className="h-6 w-6" />
                  Generate with AI
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {generated && (
        <div className="space-y-6">
          {/* Success Banner */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
                  Document Generated Successfully!
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Your {selectedType} has been created and is ready for review.
                </p>
              </div>
            </div>
          </div>

          {/* Document Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedType}</h2>
                  <p className="text-sm text-gray-500 mt-1">Generated on {new Date().toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
                    Edit Document
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 text-sm">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Document Content */}
            <div className="p-8 bg-white dark:bg-gray-900">
              <div className="max-w-4xl mx-auto space-y-6 text-gray-800 dark:text-gray-200">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold uppercase">{selectedType.toUpperCase()}</h1>
                  <p className="text-sm text-gray-500 mt-2">This Agreement is made on {new Date().toLocaleDateString()}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. PARTIES</h3>
                    <p className="text-sm leading-relaxed">
                      This Agreement is entered into between <strong>[Party A Name]</strong>, having its registered office at 
                      <strong> [Address]</strong> (hereinafter referred to as "First Party") and <strong>[Party B Name]</strong>, 
                      residing at <strong>[Address]</strong> (hereinafter referred to as "Second Party").
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. SCOPE OF WORK</h3>
                    <p className="text-sm leading-relaxed">
                      The Second Party agrees to provide consultancy services as outlined in <strong>Annexure A</strong>. 
                      The services shall include but not be limited to: project planning, technical consultation, 
                      and periodic progress reviews.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. PAYMENT TERMS</h3>
                    <p className="text-sm leading-relaxed">
                      The First Party shall pay the Second Party a monthly fee of <strong>₹50,000</strong> (Rupees Fifty Thousand Only). 
                      Payment shall be made within <strong>7 working days</strong> of invoice submission. 
                      Late payments shall attract an interest of <strong>2% per month</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. DURATION AND TERMINATION</h3>
                    <p className="text-sm leading-relaxed">
                      This Agreement shall remain in effect for a period of <strong>6 months</strong> commencing from the date of execution. 
                      Either party may terminate this Agreement by providing <strong>30 days</strong> written notice to the other party.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. CONFIDENTIALITY</h3>
                    <p className="text-sm leading-relaxed">
                      Both parties agree to maintain strict confidentiality of all proprietary information shared during the course 
                      of this engagement. This obligation shall survive the termination of this Agreement for a period of 
                      <strong> 2 years</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">6. GOVERNING LAW</h3>
                    <p className="text-sm leading-relaxed">
                      This Agreement shall be governed by and construed in accordance with the laws of India. 
                      Any disputes arising shall be subject to the exclusive jurisdiction of courts in <strong>[City]</strong>.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-8">
                    <div>
                      <div className="border-t-2 border-gray-400 pt-2 mt-20">
                        <p className="font-semibold">First Party</p>
                        <p className="text-sm text-gray-500">Name & Signature</p>
                      </div>
                    </div>
                    <div>
                      <div className="border-t-2 border-gray-400 pt-2 mt-20">
                        <p className="font-semibold">Second Party</p>
                        <p className="text-sm text-gray-500">Name & Signature</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setGenerated(false)
                setPrompt('')
                setSelectedType('')
              }}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Generate Another Document
            </button>
          </div>
        </div>
      )}
    </div>
  )
}