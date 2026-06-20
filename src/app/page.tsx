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
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

// Fallback data for when Notion isn't configured
const FALLBACK_PROJECTS = [
  {
    id: "1",
    slug: "memoire-licence-siem-ransomware",
    title: "SIEM & Réponse automatisée aux ransomwares",
    projectType: "Mémoire de Licence",
    description:
      "Implémentation d'un SIEM Wazuh avec détection et réponse automatisée face à un ransomware réel.",
    longDescription:
      "Mémoire de Licence réalisé dans le contexte du Port de Cotonou. Implémentation d'un SIEM (Wazuh) sous VMware intégrant la surveillance d'intégrité des fichiers (FIM), des règles de détection personnalisées et une réponse active automatisée face à un ransomware réel (LimeRAT). Le projet inclut également l'enrichissement des alertes via l'intégration de VirusTotal, l'extraction d'IOC (adresses IP, domaines et hash) ainsi qu'une analyse critique des faux positifs observés dans l'environnement existant.",
    tags: ["WAZUH", "VMWARE", "VIRUSTOTAL", "FIM", "IOC", "RANSOMWARE"],
    category: "SOC" as const,
    featured: true,
    status: "Completed" as const,
    createdAt: "2025-06-01",
  },

  {
    id: "2",
    slug: "detection-engineering-lab",
    title: "Lab de Détection Réseau",
    projectType: "Detection Engineering",
    description:
      "Architecture réseau segmentée avec pfSense, Suricata et Wazuh pour la détection des menaces.",
    longDescription:
      "Conception d'un laboratoire de détection réseau basé sur un réseau segmenté utilisant pfSense comme pare-feu et Suricata comme IDS/IPS. Les journaux et alertes sont centralisés dans Wazuh afin de faciliter la détection et l'investigation. Le projet comprend également la création d'un catalogue de règles de détection documentées (scan de ports, brute force SSH, injection SQL) mappées à MITRE ATT&CK avec analyse des vrais positifs et faux positifs.",
    tags: ["PFSENSE", "SURICATA", "WAZUH", "IDS", "IPS", "MITRE ATT&CK"],
    category: "Detection" as const,
    featured: true,
    status: "In Progress" as const,
    createdAt: "2025-07-01",
  },

  {
    id: "3",
    slug: "active-directory-audit-framework",
    title: "Framework d'Audit Offensif Active Directory",
    projectType: "Projet d'équipe",
    description:
      "Développement d'un framework Python d'audit Active Directory mappé MITRE ATT&CK.",
    longDescription:
      "Projet collaboratif visant à développer un framework Python d'audit Active Directory couvrant les techniques d'attaque modernes : reconnaissance, attaques Kerberos, mouvement latéral et escalade de privilèges. Contribution personnelle : mise en place de l'environnement de test (lab Active Directory sous VMware et Windows Server) ainsi que le développement de scripts d'attaque et de détection.",
    tags: [
      "PYTHON",
      "ACTIVE DIRECTORY",
      "KERBEROS",
      "WINDOWS SERVER",
      "MITRE ATT&CK",
    ],
    category: "Lab" as const,
    featured: true,
    status: "In Progress" as const,
    createdAt: "2025-08-01",
  },
];

const FALLBACK_SKILLS: Record<
  string,
  { id: string; name: string; level: number; levelLabel?: string }[]
> = {
  "Blue Team": [
    {
      id: "1",
      name: "SIEM (Wazuh, Splunk)",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "2",
      name: "Détection & analyse d'incidents",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "3",
      name: "Threat Hunting / IOC",
      level: 45,
      levelLabel: "Notions",
    },
    {
      id: "4",
      name: "Réponse aux incidents",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "5",
      name: "Forensics (Volatility)",
      level: 45,
      levelLabel: "Notions",
    },
  ],

  Outils: [
    {
      id: "6",
      name: "Wazuh",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "7",
      name: "Splunk",
      level: 45,
      levelLabel: "Notions",
    },
    {
      id: "8",
      name: "Suricata (IDS/IPS)",
      level: 45,
      levelLabel: "Notions",
    },
    {
      id: "9",
      name: "Wireshark",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "10",
      name: "pfSense",
      level: 45,
      levelLabel: "Notions",
    },
  ],

  Scripting: [
    {
      id: "11",
      name: "Python",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "12",
      name: "Bash",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "13",
      name: "PowerShell",
      level: 45,
      levelLabel: "Notions",
    },
    {
      id: "14",
      name: "Requêtes (SPL / KQL / SQL)",
      level: 45,
      levelLabel: "Notions",
    },
  ],

  "Systèmes & Réseaux": [
    {
      id: "15",
      name: "Linux",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "16",
      name: "Windows Server",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "17",
      name: "Active Directory / GPO",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "18",
      name: "TCP/IP & réseau",
      level: 80,
      levelLabel: "Intermédiaire",
    },
    {
      id: "19",
      name: "VMware / Virtualisation",
      level: 80,
      levelLabel: "Intermédiaire",
    },
  ],
};

const FALLBACK_EXPERIENCES = [
  {
    id: "1",
    title: "Master Cybersécurité (Études)",
    company: "",
    type: "Études" as const,
    startDate: "2026-01-01",
    description:
      "Master Cybersécurité à l'ESGI. Spécialisation en détection d'incidents, SOC et sécurité défensive.",
    year: "2026-2028",
  },
  {
    id: "2",
    title: "Mastère Systèmes, Réseaux & Cybersécurité (Études)",
    company: "",
    type: "Études" as const,
    startDate: "2025-01-01",
    description:
      "Mastère Ingénierie Système, Réseaux & Cybersécurité à l'IEF2I.",
    year: "2025-2026",
  },
  {
    id: "3",
    title: "Analyste SOC (Stage)",
    company: "Port de Cotonou (PAC)",
    type: "Stage" as const,
    startDate: "2024-01-01",
    description:
      "Stage de 6 mois au PAC : détection, analyse et qualification d'incidents, implémentation d'un SIEM (Wazuh) et réponse automatisée aux ransomwares.",
    year: "2024",
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

export const revalidate = 3600;

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
      {/* <TestimonialsSection /> */}
      <ContactCTA />
    </>
  );
}
