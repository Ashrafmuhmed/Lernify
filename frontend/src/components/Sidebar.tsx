import { Link } from "react-router-dom"

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊", isActive: true },
    { name: "Courses", path: "/course-catalog", icon: "📚", isActive: false },
    { name: "Students", path: "/students", icon: "👩‍🎓", isActive: false },
    { name: "View Lessons", path: "/lesson-viewer", icon: "👁️‍🗨️", isActive: false },
    { name: "Assignments", path: "/assignments", icon: "📝", isActive: false },
    { name: "Settings", path: "/settings", icon: "⚙️", isActive: false },
    { name: "Support", path: "/support", icon: "💬", isActive: false },
  ]

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                <span className="text-2xl font-bold text-white">📖</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Learnify
              </h2>
              <p className="text-xs text-slate-400">Learning Management</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-4"></div>
        </div>

        {/* User Profile Section */}
        <div className="mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Dr. Smith</h3>
                <p className="text-xs text-slate-400">Instructor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>
          {menuItems.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 ${
                item.isActive
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300"
                  : "hover:bg-white/5 hover:border-white/10 border border-transparent text-slate-300"
              }`}
            >
              <div
                className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                  item.isActive ? "drop-shadow-lg" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
              {item.isActive && (
                <div className="absolute right-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Secondary Menu */}
        <nav className="space-y-2 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Tools</p>
          {menuItems.slice(4).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:border-white/10 border border-transparent text-slate-300"
            >
              <div className="text-xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Quick Stats Card */}
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/20 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-green-300">This Week</h4>
            <span className="text-xs text-green-400">📊</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-300">New Students</span>
              <span className="text-sm font-bold text-green-400">+12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-300">Assignments</span>
              <span className="text-sm font-bold text-emerald-400">24</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div className="text-center">
            <div className="text-3xl mb-2">💡</div>
            <h4 className="text-sm font-semibold text-white mb-2">Need Help?</h4>
            <p className="text-xs text-slate-400 mb-3">Check our documentation or contact support</p>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
              Get Help
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </aside>
  )
}
