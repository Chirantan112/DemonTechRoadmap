import React from 'react';

interface ExampleOutputProps {
  children?: React.ReactNode;
  html?: string;
}

const ExampleOutput: React.FC<ExampleOutputProps> = ({ children, html }) => {
  return (
    <div className="my-6 border border-[#333] rounded-lg overflow-hidden bg-white">
      <div className="px-4 py-2 bg-[#f1f1f1] border-b border-gray-300 flex items-center">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Result:</span>
      </div>
      <div className="p-6 text-black">
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default ExampleOutput;
