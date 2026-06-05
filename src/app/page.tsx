import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Timeline } from "@/components/sections/Timeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  getFeaturedProjects,
  getSkillsByCategory,
  getExperiences,
} from "@/lib/notion";

// Fallback data for when Notion isn't configured
const FALLBACK_PROJECTS = [
  {
    id: "1",
    slug: "soc-home-lab",
    title: "SOC Home Lab",
    description: "Environnement complet de supervision et de détection d'incidents avec Wazuh, ELK et TheHive.",
    tags: ["WAZUH", "ELK", "THEHIVE"],
    category: "Lab" as const,
    githubUrl: "#",
    featured: true,
    status: "Active" as const,
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "active-directory-monitoring",
    title: "Threat hunting lab",
    description: "Surveillance de l'AD et détection d'activités malveillantes.",
    tags: ["POWERSHELL", "AD", "SPLUNK"],
    category: "SOC" as const,
    githubUrl: "#",
    featured: true,
    status: "Completed" as const,
    createdAt: "2023-06-01",
  },
  {
    id: "3",
    slug: "automation-soc",
    title: "Phishing Detection",
    description: "Scripts d'automatisation pour la collecte de logs et la réponse aux incidents.",
    tags: ["PYTHON", "ML", "API"],
    category: "Automation" as const,
    githubUrl: "#",
    featured: true,
    status: "Active" as const,
    createdAt: "2023-01-01",
  },
];

const FALLBACK_SKILLS: Record<string, { id: string; name: string; level: number }[]> = {
  "Blue Team": [
    { id: "1", name: "SIEM", level: 85 },
    { id: "2", name: "Threat Hunting", level: 75 },
    { id: "3", name: "Incident Response", level: 80 },
    { id: "4", name: "Log Analysis", level: 90 },
    { id: "5", name: "Malware Analysis", level: 65 },
  ],
  "Outils": [
    { id: "6", name: "Splunk", level: 85 },
    { id: "7", name: "Wazuh", level: 90 },
    { id: "8", name: "ELK Stack", level: 80 },
    { id: "9", name: "Microsoft Sentinel", level: 70 },
    { id: "10", name: "Wireshark", level: 75 },
  ],
  "Scripting": [
    { id: "11", name: "Python", level: 80 },
    { id: "12", name: "Bash", level: 75 },
    { id: "13", name: "PowerShell", level: 70 },
    { id: "14", name: "Shell Scripting", level: 72 },
  ],
  "Systèmes & Réseaux": [
    { id: "15", name: "Linux", level: 85 },
    { id: "16", name: "Windows Server", level: 75 },
    { id: "17", name: "Active Directory", level: 80 },
    { id: "18", name: "TCP/IP", level: 85 },
    { id: "19", name: "Docker", level: 65 },
  ],
};

const FALLBACK_EXPERIENCES = [
  {
    id: "1",
    title: "Analyste SOC (Stage)",
    company: "",
    type: "Stage" as const,
    startDate: "2024-01-01",
    description: "Surveillance, détection et analyse d'incidents de sécurité.",
    year: "2024",
  },
  {
    id: "2",
    title: "Projets & Labs",
    company: "Labs TryHackMe, HackTheBox, CTF et projets personnels.",
    type: "Projet" as const,
    startDate: "2023-01-01",
    description: "Labs TryHackMe, HackTheBox, CTF et projets personnels.",
    year: "2023",
  },
  {
    id: "3",
    title: "Certification",
    company: "Google Cybersecurity Professional — TryHackMe SOC Level 1",
    type: "Certification" as const,
    startDate: "2022-01-01",
    description: "Google Cybersecurity Professional — TryHackMe SOC Level 1.",
    year: "2022",
  },
  {
    id: "4",
    title: "Études",
    company: "",
    type: "Études" as const,
    startDate: "2021-01-01",
    description: "Licence en Sécurité des Systèmes d'Information.",
    year: "2021",
  },
];

async function getData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID) {
      return {
        projects: FALLBACK_PROJECTS,
        skillsByCategory: FALLBACK_SKILLS,
        experiences: FALLBACK_EXPERIENCES,
      };
    }
    const [projects, skillsByCategory, experiences] = await Promise.all([
      getFeaturedProjects(),
      getSkillsByCategory(),
      getExperiences(),
    ]);
    return { projects, skillsByCategory, experiences };
  } catch {
    return {
      projects: FALLBACK_PROJECTS,
      skillsByCategory: FALLBACK_SKILLS,
      experiences: FALLBACK_EXPERIENCES,
    };
  }
}

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const { projects, skillsByCategory, experiences } = await getData();

  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <SkillsPreview skillsByCategory={skillsByCategory} />
      <FeaturedProjects projects={projects} />
      <Timeline experiences={experiences} />
      <ContactCTA />
    </>
  );
}
