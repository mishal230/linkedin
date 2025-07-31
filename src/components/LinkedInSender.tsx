import React, { useState } from 'react';
import { Linkedin, Send, CheckCircle, AlertCircle, Mail } from 'lucide-react';

export const LinkedInSender: React.FC = () => {
  const [profileUrl, setProfileUrl] = useState('https://linkedin.com/in/username');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState<'ready' | 'sending' | 'success' | 'error'>('ready');

  const handleSendEmail = async () => {
    if (!profileUrl.trim()) return;

    setIsLoading(true);
    setStatus('sending');
    setResponse('');

    try {
      const response = await fetch('https://n8n.srv846726.hstgr.cloud/webhook-test/998c2c38-e086-48dd-ae6a-cedc7bdc7abf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          linkedinProfile: profileUrl,
          timestamp: new Date().toISOString(),
          action: 'send_email'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(JSON.stringify(data, null, 2));
        setStatus('success');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending request:', error);
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'sending':
        return <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <div className="w-3 h-3 bg-green-400 rounded-full" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Email Sent Successfully';
      case 'error':
        return 'Error Occurred';
      default:
        return 'System Ready';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
          <Linkedin className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-white text-2xl font-bold">LinkedIn Profile URL</h1>
      </div>

      {/* Profile URL Input */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="profile-url" className="block text-sm font-medium text-gray-300 mb-2">
              LinkedIn Profile URL
            </label>
            <input
              id="profile-url"
              type="url"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
            />
          </div>

          <button
            onClick={handleSendEmail}
            disabled={isLoading || !profileUrl.trim()}
            className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending Email...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Response Details */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Mail className="w-6 h-6 text-purple-400" />
          <h2 className="text-white text-lg font-semibold">Response Details</h2>
        </div>

        <div className="bg-gray-900 border border-gray-600 rounded-lg p-4 min-h-[200px]">
          {response ? (
            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono overflow-x-auto">
              {response}
            </pre>
          ) : (
            <p className="text-gray-500 italic">Response will appear here...</p>
          )}
        </div>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2">
          {getStatusIcon()}
          <span className={`text-sm font-medium ${
            status === 'success' ? 'text-green-400' :
            status === 'error' ? 'text-red-400' :
            status === 'sending' ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {getStatusText()}
          </span>
        </div>
      </div>
    </div>
  );
};