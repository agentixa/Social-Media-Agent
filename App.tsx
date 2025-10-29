import React, { useState, useCallback } from 'react';
import { generateAllContent } from './services/geminiService';
import { Tone, GeneratedPost, Platform } from './types';
import { TONES, PLATFORMS_CONFIG } from './constants';
import IdeaInput from './components/IdeaInput';
import PostCard from './components/PostCard';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [idea, setIdea] = useState<string>('');
  const [tone, setTone] = useState<Tone>(TONES[0]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>((Object.keys(PLATFORMS_CONFIG) as Platform[]));
  const [generatedContent, setGeneratedContent] = useState<GeneratedPost[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!idea.trim()) {
      setError('Please enter an idea to generate content.');
      return;
    }
    if (selectedPlatforms.length === 0) {
      setError('Please select at least one platform.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);

    try {
      const content = await generateAllContent(idea, tone, selectedPlatforms);
      setGeneratedContent(content);
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating content. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [idea, tone, selectedPlatforms]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
            Social Synchro
          </h1>
          <p className="text-gray-400 mt-2 text-lg">AI-Powered Content Generation for Social Media</p>
        </header>

        <main>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl shadow-indigo-500/10">
            <IdeaInput
              idea={idea}
              setIdea={setIdea}
              tone={tone}
              setTone={setTone}
              onGenerate={handleGenerate}
              isLoading={isLoading}
              selectedPlatforms={selectedPlatforms}
              setSelectedPlatforms={setSelectedPlatforms}
            />
          </div>

          {error && (
            <div className="text-center mt-8 bg-red-900/50 text-red-300 p-4 rounded-lg max-w-3xl mx-auto">
              <p>{error}</p>
            </div>
          )}

          {isLoading && <Loader />}

          {generatedContent && !isLoading && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-center mb-8">Generated Content</h2>
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start">
                {generatedContent.map((post) => (
                  <PostCard key={post.platform} post={post} />
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;