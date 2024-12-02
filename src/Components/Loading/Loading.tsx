import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#150726]/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-500 rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loading;