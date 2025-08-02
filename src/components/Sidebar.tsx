import React from 'react';
import { BarChart3, Linkedin, TrendingUp, Users, Settings, Menu } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'linkedin-sender', label: 'LinkedIn Sender', icon: Linkedin, badge: 'Active' },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'contacts', label: 'Contacts', icon: Users, badge: '12' },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">LinkedIn</h1>
            <p className="text-gray-400 text-sm">Sender</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      item.badge === 'Active'
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">MZ</span>
          </div>
          <div>
            <p className="text-white font-medium">Mishal Zubair</p>
            <p className="text-gray-400 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};
