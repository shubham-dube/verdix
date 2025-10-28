import { 
  FileText, 
  TrendingUp, 
  AlertCircle, 
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react'
import { dashboardStats, documents, complianceItems } from '@/lib/dummy-data'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    {
      name: 'Total Documents',
      value: dashboardStats.totalDocuments,
      icon: FileText,
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'Avg. Risk Score',
      value: dashboardStats.averageRiskScore,
      icon: TrendingUp,
      change: '+5 points',
      changeType: 'positive',
    },
    {
      name: 'Upcoming Deadlines',
      value: dashboardStats.upcomingDeadlines,
      icon: Calendar,
      change: '3 this week',
      changeType: 'warning',
    },
    {
      name: 'Compliance Rate',
      value: `${dashboardStats.complianceRate}%`,
      icon: CheckCircle,
      change: '+2%',
      changeType: 'positive',
    },
  ]

  const recentDocuments = documents.slice(0, 3)
  const upcomingCompliance = complianceItems.filter(item => item.status === 'upcoming').slice(0, 4)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your legal documents today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 
                stat.changeType === 'warning' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Documents</h2>
              <Link href="/dashboard/documents" className="text-sm text-indigo-600 hover:text-indigo-700">
                View all
              </Link>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentDocuments.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{doc.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{doc.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${
                      doc.riskScore >= 80 ? 'text-green-600' :
                      doc.riskScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {doc.riskScore}/100
                    </div>
                    <p className="text-xs text-gray-500">Risk Score</p>
                  </div>
                  {doc.riskScore >= 80 ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : doc.riskScore >= 60 ? (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Compliance */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Compliance</h2>
              <Link href="/dashboard/compliance" className="text-sm text-indigo-600 hover:text-indigo-700">
                View all
              </Link>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {upcomingCompliance.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className={`p-2 rounded-lg ${
                  item.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <Calendar className={`h-5 w-5 ${
                    item.priority === 'high' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{item.category}</span>
                    <span className="text-xs text-gray-500">Due: {new Date(item.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/analyze"
            className="flex items-center gap-4 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <AlertCircle className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Analyze Contract</h3>
              <p className="text-sm text-gray-500">Upload and analyze legal documents</p>
            </div>
          </Link>
          <Link
            href="/dashboard/generate"
            className="flex items-center gap-4 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <FileText className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Generate Document</h3>
              <p className="text-sm text-gray-500">Create legal docs with AI</p>
            </div>
          </Link>
          <Link
            href="/dashboard/copilot"
            className="flex items-center gap-4 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <AlertCircle className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Ask Legal Copilot</h3>
              <p className="text-sm text-gray-500">Get instant legal answers</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}