import React from 'react';
import { Tone } from './types';

export const TONES: Tone[] = ['Professional', 'Witty', 'Urgent'];

export const PLATFORMS_CONFIG = {
  LinkedIn: {
    name: 'LinkedIn',
    aspectRatio: '16:9',
    promptEnhancer: 'professional, long-form post'
  },
  'Twitter/X': {
    name: 'Twitter/X',
    aspectRatio: '16:9',
    promptEnhancer: 'short, punchy, and concise tweet'
  },
  Instagram: {
    name: 'Instagram',
    aspectRatio: '1:1',
    promptEnhancer: 'visually-focused Instagram post with relevant hashtags'
  }
} as const;

export const PlatformIcons: Record<string, React.ReactNode> = {
    LinkedIn: (
      // FIX: Converted JSX to React.createElement to resolve syntax errors in .ts file.
      React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM5 8.5H0V24h5V8.5zM24 24H19v-7.15c0-1.7-.6-2.85-2.1-2.85-1.14 0-1.84.77-2.14 1.52-.1.27-.13.64-.13 1.01V24h-5V8.5h5v2.23h.07c.65-1.22 2.22-2.5 4.43-2.5 4.76 0 5.57 3.12 5.57 7.18V24z" })
      )
    ),
    'Twitter/X': (
      // FIX: Converted JSX to React.createElement to resolve syntax errors in .ts file.
      React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 16 16" },
        React.createElement("path", { d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" })
      )
    ),
    Instagram: (
      // FIX: Converted JSX to React.createElement to resolve syntax errors in .ts file.
      React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0 3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" })
      )
    ),
  };