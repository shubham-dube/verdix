import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-indigo-600">LegalDocAI</span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Features
            </Link>
            <Link href="#upload" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Upload
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            type="button"
            className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <Sun className="h-5 w-5 hidden dark:block" />
            <Moon className="h-5 w-5 block dark:hidden" />
          </button>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}