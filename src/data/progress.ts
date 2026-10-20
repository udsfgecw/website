export interface Achievement {
  number: number;
  title: string;
  year: string;
  image: string | null;
}

export type ProgramCategory = "culture" | "sports" | "career" | "campus";

export interface Program {
  number: number;
  title: string;
  category: ProgramCategory;
  year: string;
  image: string | null;
  /** id of the activity archive post that shows this program */
  post?: string;
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    number: 1,
    title: "Gate Exam Mock Test",
    year: "2025–26",
    image: null,
  },
  {
    number: 2,
    title: "Gate Exam Question Bank",
    year: "2025–26",
    image: null,
  },
  {
    number: 3,
    title: "Installation of Light in LH Road",
    year: "2025–26",
    image: "lh-lighting.webp",
  },
  {
    number: 4,
    title: "First Girls Football Team",
    year: "2025–26",
    image: null,
  },
  {
    number: 5,
    title: "First Web Magazine",
    year: "2025–26",
    image: null,
  },
  {
    number: 6,
    title: "First Magazine Audio Book",
    year: "2025–26",
    image: null,
  },
  {
    number: 7,
    title: "Initiative to Install High Mass Light",
    year: "2025–26",
    image: null,
  },
  {
    number: 8,
    title: "Initiative to Install Cricket Net",
    year: "2025–26",
    image: null,
  },
];

export const PROGRAMS: readonly Program[] = [
  {
    number: 1,
    title: "Ifthar Meet",
    category: "culture",
    year: "2025–26",
    image: null,
    post: "037d0b2c2f93",
  },
  {
    number: 2,
    title: "German Consulate Visit",
    category: "career",
    year: "2025–26",
    image: null,
    post: "sathva-post-17952513312137585",
  },
  {
    number: 3,
    title: "Tech Talk: Career in Project Management",
    category: "career",
    year: "2025–26",
    image: null,
    post: "sathva-post-18093258104337651",
  },
  {
    number: 4,
    title: "Gazal Night",
    category: "culture",
    year: "2025–26",
    image: null,
  },
  {
    number: 5,
    title: "FIFA Fans Show",
    category: "sports",
    year: "2025–26",
    image: null,
    post: "sathva-post-18123560482663772",
  },
  {
    number: 6,
    title: "E Football Tournament",
    category: "sports",
    year: "2025–26",
    image: null,
    post: "55dd861cea91",
  },
  {
    number: 7,
    title: "Ashwin Memorial Football Tournament",
    category: "sports",
    year: "2025–26",
    image: null,
    post: "sathva-post-17938946226291989",
  },
  {
    number: 8,
    title: "Football Auction",
    category: "sports",
    year: "2025–26",
    image: null,
    post: "sathva-post-17897520288474399",
  },
  {
    number: 9,
    title: "Union Inauguration",
    category: "campus",
    year: "2025–26",
    image: null,
    post: "sathva-post-17938994022341579",
  },
  {
    number: 10,
    title: "Magazine Release",
    category: "campus",
    year: "2025–26",
    image: null,
  },
  {
    number: 11,
    title: "Freshers Day",
    category: "campus",
    year: "2025–26",
    image: null,
    post: "d84de44bb3cd",
  },
  {
    number: 12,
    title: "Drug Free Campus Declaration",
    category: "campus",
    year: "2025–26",
    image: null,
    post: "d66d44b08045",
  },
  {
    number: 13,
    title: "Lantern Light & Ethnic Day",
    category: "culture",
    year: "2025–26",
    image: null,
    post: "sathva-post-17931449043410325",
  },
  {
    number: 14,
    title: "Thauryathrikam Arts Fest",
    category: "culture",
    year: "2025–26",
    image: null,
  },
  {
    number: 15,
    title: "Arts Pro Show: Nawaf",
    category: "culture",
    year: "2025–26",
    image: null,
    post: "story-18134623687636539",
  },
  {
    number: 16,
    title: "Arts Pro Show: DJ Zanjay",
    category: "culture",
    year: "2025–26",
    image: null,
  },
  {
    number: 17,
    title: "Arts Pro Show: Beats on Music",
    category: "culture",
    year: "2025–26",
    image: null,
    post: "story-17906639010564419",
  },
];
