import type { ImageMetadata } from "astro";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  about: string[];
  email: string;
  location: string;
  school: string;
  currentFocus: string;
  /** Isi hanya jika file CV benar-benar tersedia, mis. "/documents/cv.pdf". */
  cvUrl?: string;
}

export type SkillStatus = "learning" | "familiar" | "used" | "experienced" | "mastered";

export interface Skill {
  name: string;
  status: SkillStatus;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  image: ImageMetadata;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Experience {
  title: string;
  organization: string;
  period?: string;
  description: string;
  category: "education" | "internship" | "work" | "organization";
}

export interface SocialLink {
  label: string;
  href: string;
}
