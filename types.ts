export type Tone = 'Professional' | 'Witty' | 'Urgent';

export type Platform = 'LinkedIn' | 'Twitter/X' | 'Instagram';

export interface GeneratedPost {
  platform: Platform;
  content: string;
  image: string; // base64 encoded image data URL
}