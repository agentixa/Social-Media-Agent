import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="text-center my-12" aria-live="polite">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      <p className="mt-4 text-gray-400">Generating content... this may take a moment.</p>
      <p className="text-sm text-gray-500">We're crafting text and images for all platforms.</p>
    </div>
  );
};

export default Loader;
