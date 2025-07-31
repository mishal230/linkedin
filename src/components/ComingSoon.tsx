import React from 'react';
import { Clock } from 'lucide-react';

interface ComingSoonProps {
  title: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-gray-400 text-lg">This section is coming soon...</p>
        <div className="w-24 h-1 bg-purple-600 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};