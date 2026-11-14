import type { Project } from "../types/portfolio";
import cageurImage from "../assets/cageur.png";
import pklImage from "../assets/pkl.png";
import panganCerdasImage from "../assets/pangan_cerdas.png";

export const projects: Project[] = [
  {
    title: "Digital CAGEUR",
    slug: "cageur",
    image: cageurImage,
    imageAlt: "Tampilan website edukasi Digital CAGEUR",
    description:
      "Platform edukasi dan kampanye ramah lingkungan yang mengajak pengguna memahami jejak karbon dari aktivitas digital sehari-hari.",
    technologies: ["Next.js", "React", "Git", "GitHub"],
    featured: false,
  },
  {
    title: "Sistem Informasi PKL",
    slug: "pkl",
    image: pklImage,
    imageAlt: "Tampilan Sistem Informasi PKL SMK-IT As-Syifa Boarding School",
    description:
      "Sistem untuk membantu siswa dan guru mengelola kegiatan PKL, mulai dari jadwal dan laporan harian hingga evaluasi serta penilaian.",
    technologies: ["Laravel", "Tailwind CSS", "Git", "GitHub"],
    featured: false,
  },
  {
    title: "PanganCerdas",
    slug: "pangan-cerdas",
    image: panganCerdasImage,
    imageAlt: "Tampilan platform PanganCerdas untuk pengelolaan sisa makanan",
    description:
      "Platform zero-waste yang menghubungkan bisnis kuliner, panti asuhan, dan pengolah biogas melalui diskon makanan, donasi, serta pengolahan limbah menjadi energi.",
    technologies: ["Next.js", "React", "Git", "GitHub"],
    featured: false,
  },
];
