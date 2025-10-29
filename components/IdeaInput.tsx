import React from 'react';
import { Tone, Platform } from '../types';
import { TONES, PLATFORMS_CONFIG, PlatformIcons } from '../constants';

interface IdeaInputProps {
  idea: string;
  setIdea: (idea: string) => void;
  tone: Tone;
  setTone: (tone: Tone) => void;
  onGenerate: () => void;
  isLoading: boolean;
  selectedPlatforms: Platform[];
  setSelectedPlatforms: (platforms: Platform[]) => void;
}

const IdeaInput: React.FC<IdeaInputProps> = ({ 
    idea, 
    setIdea, 
    tone, 
    setTone, 
    onGenerate, 
    isLoading,
    selectedPlatforms,
    setSelectedPlatforms,
}) => {
  const handlePlatformToggle = (platform: Platform) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];
    setSelectedPlatforms(newSelection);
  };

  const platformKeys = Object.keys(PLATFORMS_CONFIG) as Platform[];

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
          Your Content Idea
        </label>
        <textarea
          id="idea"
          rows={4}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-white placeholder-gray-500"
          placeholder="e.g., The launch of a new productivity app that uses AI..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="tone" className="block text-sm font-medium text-gray-300 mb-2">
          Select Tone
        </label>
        <div className="flex flex-wrap gap-3">
          {TONES.map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              disabled={isLoading}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                tone === t
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Select Platforms
        </label>
        <div className="flex flex-wrap gap-3">
          {platformKeys.map((p) => (
            <button
              key={p}
              onClick={() => handlePlatformToggle(p)}
              disabled={isLoading}
              className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedPlatforms.includes(p)
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <div className="mr-2">{React.cloneElement(PlatformIcons[p] as React.ReactElement, { className: 'h-5 w-5' })}</div>
              {PLATFORMS_CONFIG[p].name}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading || !idea.trim() || selectedPlatforms.length === 0}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          '✨ Generate Content'
        )}
      </button>
    </div>
  );
};

export default IdeaInput;