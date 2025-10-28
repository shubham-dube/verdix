'use client'

import { useState } from 'react'
import { chatHistory } from '@/lib/dummy-data'
import { Send, Sparkles, BookOpen, Scale, MessageSquare } from 'lucide-react'

const suggestedQuestions = [
  "Can I quit my job before completing my bond period?",
  "Is this clause legal in India?",
  "What is the notice period required for termination?",
  "How to file a complaint for delayed salary?",
  "What are my rights as a freelancer?",
  "Explain arbitration clause in simple terms",
]

export default function CopilotPage() {
  const [messages, setMessages] = useState(chatHistory)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      role: 'user' as const,
      message: input,
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'assistant' as const,
        message: "Based on Indian law, particularly the Indian Contract Act, 1872, I can help clarify this for you. Would you like me to explain the specific sections that apply to your situation?",
        timestamp: new Date().toISOString(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleSuggestionClick = (question: string) => {
    setInput(question)
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-indigo-600" />
          Legal Copilot
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Get instant answers to your legal questions with AI-powered insights
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-2xl">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                    <Scale className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Welcome to Legal Copilot
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ask me anything about Indian law, contracts, compliance, or your legal rights. 
                    I'm here to help explain complex legal concepts in simple terms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                  {suggestedQuestions.slice(0, 4).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question)}
                      className="p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-300 border border-gray-200 dark:border-gray-600 transition-colors"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">{question}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-3xl rounded-lg p-4 ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                    <p className={`text-xs mt-2 ${
                      msg.role === 'user' ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {msg.role === 'user' && (
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4 justify-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Suggested Questions (when chat is active) */}
        {messages.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-xs px-3 py-1.5 bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-300 text-gray-700 dark:text-gray-300 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about Indian law..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            💡 Tip: Be specific with your questions for better answers. Legal Copilot provides general guidance, not legal advice.
          </p>
        </div>
      </div>

      {/* Features Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <BookOpen className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Plain Language</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Complex legal terms explained in simple words
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <Scale className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Indian Law Focused</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Trained on Indian legal framework and precedents
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Instant Answers</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Get immediate responses to your legal queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}