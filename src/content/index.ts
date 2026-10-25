import { Chapter } from "./types";
import { CHAPTER_1 } from "./chapter1";
import { CHAPTER_2 } from "./chapter2";
import { CHAPTER_3 } from "./chapter3";
import { CHAPTER_4 } from "./chapter4";
import { CHAPTER_5 } from "./chapter5";
import { CHAPTER_6 } from "./chapter6";
import { CHAPTER_7 } from "./chapter7";
import { COMPANY_OVERVIEW } from "./overview";
import { REFERENCES } from "./references";

export * from "./types";
export * from "./overview";
export * from "./references";
export { CHAPTER_1, CHAPTER_2, CHAPTER_3, CHAPTER_4, CHAPTER_5, CHAPTER_6, CHAPTER_7 };

export const ALL_CHAPTERS: Chapter[] = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
];

export function getChapterByNumber(num: number): Chapter | undefined {
  return ALL_CHAPTERS.find((ch) => ch.number === num);
}

export function getReferenceById(id: string) {
  return REFERENCES.find((ref) => ref.id === id);
}
