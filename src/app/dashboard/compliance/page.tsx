import { complianceItems } from '@/lib/dummy-data'
import { Calendar, Bell, CheckCircle, Clock, Plus, Filter } from 'lucide-react'
import Link from 'next/link'

export default function CompliancePage() {
  const upcomingItems = complianceItems.filter(item => item.status === 'upcoming')
  const completedItems = complianceItems.filter(item => item.status === 'completed')

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 dark:bg-red-900/30'
      case 'medium': return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30'
      case 'low': return 'text-green-600 bg-green-50 dark:bg-green-900/30'
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-900/30'
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Compliance Tracker</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track and manage all your compliance deadlines and renewals
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Compliance Item
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Items</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{complianceItems.length}</p>
            </div>
            <Calendar className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">{upcomingItems.length}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{completedItems.length}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Due This Week</p>
              <p className="text-2xl font-bold text-red-600 mt-1">3</p>
            </div>
            <Bell className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>All Categories</option>
            <option>Corporate</option>
            <option>Tax</option>
            <option>IP</option>
            <option>Contract</option>
            <option>HR</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>All Priorities</option>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm">
            <option>All Status</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Upcoming Compliance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Deadlines</h2>
        </div>
        <div className="p-6 space-y-4">
          {upcomingItems.map((item) => {
            const daysUntil = getDaysUntilDue(item.dueDate)
            const isUrgent = daysUntil <= 7
            
            return (
              <div
                key={item.id}
                className={`p-6 rounded-lg border-l-4 ${
                  isUrgent 
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/10' 
                    : 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Due: {new Date(item.dueDate).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <span className={`font-medium ${isUrgent ? 'text-red-600' : 'text-gray-600'}`}>
                        {daysUntil > 0 ? `${daysUntil} days remaining` : 'Due today'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 text-sm">
                      Set Reminder
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                      Mark Complete
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Completed Items */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Completed</h2>
        </div>
        <div className="p-6 space-y-4">
          {completedItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                        {item.category}
                      </span>
                      <span className="text-gray-500">
                        Completed: {new Date(item.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar View Teaser */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Calendar View</h2>
            <p className="text-indigo-100">
              Visualize all your compliance deadlines in a calendar format for better planning
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium">
            View Calendar
          </button>
        </div>
      </div>
    </div>
  )
}