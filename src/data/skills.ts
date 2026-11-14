import type { SkillCategory } from "../types/portfolio";

export const skills: SkillCategory[] = [
  {
    category: "Styling Web",
    items: [
      { name: "Tailwind CSS", status: "mastered" },
      { name: "Bootstrap", status: "mastered" },
    ],
  },
  {
    category: "Backend Development",
    items: [{ name: "Laravel", status: "mastered" }],
  },
  {
    category: "Version Control & Kolaborasi",
    items: [
      { name: "Git", status: "mastered" },
      { name: "GitHub", status: "mastered" },
    ],
  },
  {
    category: "Mobile Development",
    items: [{ name: "Flutter", status: "learning" }],
  },
];
