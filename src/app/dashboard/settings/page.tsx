'use client'

import { User, Bell, Shield, CreditCard, Users } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Information</h2>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                defaultValue="LegalTech Startup"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+91 98765 43210"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {[
            { title: 'Email Notifications', description: 'Receive email updates about your documents and compliance' },
            { title: 'Compliance Reminders', description: 'Get notified about upcoming compliance deadlines' },
            { title: 'Document Analysis Complete', description: 'Notification when document analysis is finished' },
            { title: 'Weekly Report', description: 'Receive weekly summary of your activities' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Security</h2>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Change Password</h3>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 text-sm">
              Update Password
            </button>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Add an extra layer of security to your account</p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Subscription & Billing</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Current Plan</p>
                <h3 className="text-2xl font-bold mt-1">Free Trial</h3>
                <p className="text-sm mt-2 opacity-90">15 days remaining</p>
              </div>
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
                Upgrade to Pro
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Documents Analyzed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">3 / 3</p>
              <p className="text-xs text-gray-500 mt-1">Resets monthly</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">AI Generations</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">8 / 10</p>
              <p className="text-xs text-gray-500 mt-1">Resets monthly</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Storage Used</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">42%</p>
              <p className="text-xs text-gray-500 mt-1">of 100MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}