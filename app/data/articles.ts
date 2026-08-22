export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
};

export const articles: Article[] = [
  {
    slug: "whole-life-vs-term-life",
    title: "Whole Life vs. Term Life",
    description:
      "Understand the key differences between permanent and temporary life insurance.",
    category: "Coverage Comparison",
    readingTime: 7,
  },
  {
    slug: "what-is-life-insurance",
    title: "What Is Life Insurance?",
    description:
      "Learn the fundamentals of life insurance and how it protects your family.",
    category: "Life Insurance Basics",
    readingTime: 5,
  },
];