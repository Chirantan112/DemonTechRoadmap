import { htmlData } from './html';
import { cssData } from './css';
import { javascriptData } from './javascript';
import { typescriptData } from './typescript';
import { reactData } from './react';
import { nodejsData } from './nodejs';

export interface TopicContent {
  title: string;
  description: string;
  category?: string;
  readingTime?: string;
  outcomes?: string[];
  intro: string;
  syntax?: { language: string; code: string; title?: string };
  example?: { language: string; code: string; title?: string };
  tryItYourself?: { html?: string; css?: string; js?: string };
  keyPoints?: string[];
  referenceTable?: { headers: string[]; rows: string[][] };
}

const contentMap: Record<string, Record<string, TopicContent>> = {
  html: htmlData,
  css: cssData,
  javascript: javascriptData,
  typescript: typescriptData,
  react: reactData,
  nodejs: nodejsData,
};

export function getTopicContent(lang: string, topicSlug: string): TopicContent | null {
  if (contentMap[lang] && contentMap[lang][topicSlug]) {
    return contentMap[lang][topicSlug];
  }
  
  // Fallback generic content if missing
  return null;
}
