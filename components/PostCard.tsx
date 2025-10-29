import React from 'react';
import { GeneratedPost } from '../types';
import { PlatformIcons } from '../constants';

const PostCard: React.FC<{ post: GeneratedPost }> = ({ post }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(post.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const aspectRatioClass = post.platform === 'Instagram' ? 'aspect-square' : 'aspect-video';

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative">
        <img src={post.image} alt={`Generated for ${post.platform}`} className={`w-full h-auto object-cover ${aspectRatioClass}`} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full">{React.cloneElement(PlatformIcons[post.platform] as React.ReactElement, { className: 'h-6 w-6 text-white' })}</div>
            <h3 className="text-xl font-bold text-white tracking-wide" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>{post.platform}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 whitespace-pre-wrap flex-grow mb-4">{post.content}</p>
        <button
          onClick={handleCopy}
          className="mt-auto w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          {copied ? 'Copied!' : 'Copy Text'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;