/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'css-guide' | 'studio' | 'contact';

export interface ColorPalette {
  id: string;
  name: string;
  category: string;
  hexColors: [string, string, string, string]; // [Background, Surface, Primary, Accent]
  description: string;
}

export interface CssRuleComparison {
  title: string;
  syntax: string;
  pros: string[];
  cons: string[];
  bestUse: string;
  codeSnippet: string;
}

export interface FeedbackSubmission {
  studentName: string;
  teacherNote: string;
  score: number;
  makeupRating: string;
  timestamp: string;
}
