import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LinkedInSender } from './components/LinkedInSender';
import { ComingSoon } from './components/ComingSoon';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'linkedin-sender':
        return <LinkedInSender />;
      case 'analytics':
        return <ComingSoon title="Analytics" />;
      case 'contacts':
        return <ComingSoon title="Contacts" />;
      case 'settings':
        return <ComingSoon title="Settings" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;