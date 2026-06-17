import { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jean Dupont",
    company: "TechCorp CI",
    role: "CTO",
    message:
      "Travail exceptionnel sur l’audit de sécurité. Très professionnel et rigoureux dans l’analyse des vulnérabilités.",
    rating: 5,
    project: "Audit infrastructure SOC",
    approved: true,
  },
  {
    id: "2",
    name: "Aïcha Koné",
    company: "FinBank",
    role: "Risk Manager",
    message:
      "Analyse très poussée des risques et recommandations pertinentes. Excellent niveau technique.",
    rating: 5,
    project: "Analyse des risques SI",
    approved: true,
  },
  {
    id: "3",
    name: "Michael Brown",
    company: "StartupX",
    role: "Founder",
    message:
      "Très bonne collaboration sur la sécurisation de notre plateforme. Communication fluide et efficace.",
    rating: 4,
    project: "Pentest application web",
    approved: true,
  },
];
