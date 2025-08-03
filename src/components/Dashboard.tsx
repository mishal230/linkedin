import React from 'react';
import { Mail, TrendingUp, Send, Users, Search, Bell } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Emails Sent',
      value: '2,847',
      change: '+12.5%',
      icon: Mail,
      color: 'blue'
    },
    {
      title: 'Response Rate',
      value: '68.4%',
      change: '+5.2%',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Active Campaigns',
      value: '24',
      change: '+3',
      icon: Send,
      color: 'purple'
    },
    {
      title: 'LinkedIn Profiles',
      value: '1,459',
      change: '+89',
      icon: Users,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 bg-blue-500/10',
      green: 'text-green-400 bg-green-500/10',
      purple: 'text-purple-400 bg-purple-500/10',
      indigo: 'text-indigo-400 bg-indigo-500/10'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
          <div className="hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 w-80"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">MZ</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-medium">Mishal Zubair</p>
              <p className="text-gray-400 text-sm">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-white text-2xl font-bold mt-2">{stat.value}</p>
                  <p className="text-green-400 text-sm font-medium mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-750 rounded-lg">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Email sent successfully</p>
              <p className="text-gray-400 text-sm">LinkedIn profile: john.doe@company.com</p>
            </div>
            <span className="text-gray-400 text-sm">2 min ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gray-750 rounded-lg">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Response rate increased</p>
              <p className="text-gray-400 text-sm">Campaign performance improved by 8%</p>
            </div>
            <span className="text-gray-400 text-sm">1 hour ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gray-750 rounded-lg">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">New contacts added</p>
              <p className="text-gray-400 text-sm">25 LinkedIn profiles imported</p>
            </div>
            <span className="text-gray-400 text-sm">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
