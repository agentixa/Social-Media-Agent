import { GoogleGenAI } from "@google/genai";
import { Tone, GeneratedPost, Platform } from '../types';
import { PLATFORMS_CONFIG } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function generateText(idea: string, tone: Tone, platform: Platform): Promise<string> {
  const prompt = `
    Generate a social media post for ${platform}.
    The core idea is: "${idea}".
    The desired tone is: ${tone}.
    The post should be a ${PLATFORMS_CONFIG[platform].promptEnhancer}.
    For Instagram, make sure to include relevant hashtags.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: prompt,
  });

  return response.text;
}

async function generateImage(idea: string, tone: Tone, platform: Platform): Promise<string> {
  const imagePrompt = `
    A visually stunning, high-quality photograph for a social media post.
    The theme is "${idea}".
    The mood should be ${tone}.
    The style should be modern and engaging, suitable for ${platform}.
    Focus on creating a compelling image that grabs attention.
  `;

  const aspectRatio = PLATFORMS_CONFIG[platform].aspectRatio as "1:1" | "16:9";

  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: imagePrompt,
    config: {
      numberOfImages: 1,
      aspectRatio: aspectRatio,
      outputMimeType: 'image/jpeg'
    }
  });

  const base64ImageBytes = response.generatedImages[0].image.imageBytes;
  return `data:image/jpeg;base64,${base64ImageBytes}`;
}


export const generateAllContent = async (idea: string, tone: Tone, platforms: Platform[]): Promise<GeneratedPost[]> => {
  const generationPromises = platforms.map(async (platform) => {
    const [content, image] = await Promise.all([
      generateText(idea, tone, platform),
      generateImage(idea, tone, platform)
    ]);

    return {
      platform,
      content,
      image
    };
  });

  return Promise.all(generationPromises);
};