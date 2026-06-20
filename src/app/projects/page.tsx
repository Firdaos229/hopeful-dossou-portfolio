// import type { Metadata } from "next";
// import { getProjects } from "@/lib/notion";
// import { ProjectCard } from "@/components/ui/ProjectCard";
// import { SectionTitle } from "@/components/ui/SectionTitle";

// export const metadata: Metadata = {
//   title: "Projets",
//   description:
//     "Découvrez mes projets en cybersécurité, SOC, Blue Team et automatisation.",
// };

// export const revalidate = 3600;

// const FALLBACK_PROJECTS = [
//   {
//     id: "1",
//     slug: "memoire-licence-siem-ransomware",
//     title: "SIEM & Réponse automatisée aux ransomwares",
//     projectType: "Mémoire de Licence",
//     description:
//       "Implémentation d'un SIEM Wazuh avec détection et réponse automatisée face à un ransomware réel.",
//     longDescription:
//       "Mémoire de Licence réalisé dans le contexte du Port de Cotonou. Implémentation d'un SIEM (Wazuh) sous VMware intégrant la surveillance d'intégrité des fichiers (FIM), des règles de détection personnalisées et une réponse active automatisée face à un ransomware réel (LimeRAT). Le projet inclut également l'enrichissement des alertes via l'intégration de VirusTotal, l'extraction d'IOC (adresses IP, domaines et hash) ainsi qu'une analyse critique des faux positifs observés dans l'environnement existant.",
//     tags: ["WAZUH", "VMWARE", "VIRUSTOTAL", "FIM", "IOC", "RANSOMWARE"],
//     category: "SOC" as const,
//     featured: true,
//     status: "Completed" as const,
//     createdAt: "2025-06-01",
//   },

//   {
//     id: "2",
//     slug: "detection-engineering-lab",
//     title: "Lab de Détection Réseau",
//     projectType: "Detection Engineering",
//     description:
//       "Architecture réseau segmentée avec pfSense, Suricata et Wazuh pour la détection des menaces.",
//     longDescription:
//       "Conception d'un laboratoire de détection réseau basé sur un réseau segmenté utilisant pfSense comme pare-feu et Suricata comme IDS/IPS. Les journaux et alertes sont centralisés dans Wazuh afin de faciliter la détection et l'investigation. Le projet comprend également la création d'un catalogue de règles de détection documentées (scan de ports, brute force SSH, injection SQL) mappées à MITRE ATT&CK avec analyse des vrais positifs et faux positifs.",
//     tags: ["PFSENSE", "SURICATA", "WAZUH", "IDS", "IPS", "MITRE ATT&CK"],
//     category: "Detection" as const,
//     featured: true,
//     status: "In Progress" as const,
//     createdAt: "2025-07-01",
//   },

//   {
//     id: "3",
//     slug: "active-directory-audit-framework",
//     title: "Framework d'Audit Offensif Active Directory",
//     projectType: "Projet d'équipe",
//     description:
//       "Développement d'un framework Python d'audit Active Directory mappé MITRE ATT&CK.",
//     longDescription:
//       "Projet collaboratif visant à développer un framework Python d'audit Active Directory couvrant les techniques d'attaque modernes : reconnaissance, attaques Kerberos, mouvement latéral et escalade de privilèges. Contribution personnelle : mise en place de l'environnement de test (lab Active Directory sous VMware et Windows Server) ainsi que le développement de scripts d'attaque et de détection.",
//     tags: [
//       "PYTHON",
//       "ACTIVE DIRECTORY",
//       "KERBEROS",
//       "WINDOWS SERVER",
//       "MITRE ATT&CK",
//     ],
//     category: "Lab" as const,
//     featured: true,
//     status: "In Progress" as const,
//     createdAt: "2025-08-01",
//   },

//   {
//     id: "4",
//     slug: "soc-simulator-tryhackme",
//     title: "SOC Simulator TryHackMe",
//     projectType: "Formation pratique",
//     description:
//       "Triage, qualification et escalade d'alertes dans un environnement SOC simulé.",
//     longDescription:
//       "Simulation d'activités SOC à travers les laboratoires TryHackMe. Réalisation du triage, de la qualification et de l'escalade d'alertes via Splunk. Mise en pratique de playbooks de réponse aux incidents, notamment pour des scénarios de phishing.",
//     tags: ["SPLUNK", "SOC", "PHISHING", "INCIDENT RESPONSE"],
//     category: "SOC" as const,
//     featured: false,
//     status: "Completed" as const,
//     createdAt: "2025-04-01",
//   },

//   {
//     id: "5",
//     slug: "capture-the-flags",
//     title: "Capture The Flags",
//     projectType: "Challenges cybersécurité",
//     description:
//       "Participation à différents CTF orientés forensics, analyse et investigation.",
//     longDescription:
//       "Participation à plusieurs compétitions et plateformes de Capture The Flag incluant PicoCTF, TryHackMe et 404 CTF. Résolution de challenges portant sur le forensics, l'analyse de journaux, l'investigation numérique et la réponse aux incidents. Participation au 404 CTF actuellement en cours.",
//     tags: ["PICOCTF", "TRYHACKME", "404CTF", "FORENSICS", "INVESTIGATION"],
//     category: "Other" as const,
//     featured: false,
//     status: "In Progress" as const,
//     createdAt: "2025-09-01",
//   },
// ];

// const CATEGORIES = ["Tous", "SOC", "Lab", "Automation", "Detection"];

// async function getProjectsData() {
//   try {
//     if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID)
//       return FALLBACK_PROJECTS;
//     return await getProjects();
//   } catch {
//     return FALLBACK_PROJECTS;
//   }
// }

// export default async function ProjectsPage() {
//   const projects = await getProjectsData();

//   return (
//     <div className="min-h-screen pt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <SectionTitle>Projets</SectionTitle>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { getProjects } from "@/lib/notion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project } from "@/types";

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

  {
    id: "4",
    slug: "soc-simulator-tryhackme",
    title: "SOC Simulator TryHackMe",
    projectType: "Formation pratique",
    description:
      "Triage, qualification et escalade d'alertes dans un environnement SOC simulé.",
    longDescription:
      "Simulation d'activités SOC à travers les laboratoires TryHackMe. Réalisation du triage, de la qualification et de l'escalade d'alertes via Splunk. Mise en pratique de playbooks de réponse aux incidents, notamment pour des scénarios de phishing.",
    tags: ["SPLUNK", "SOC", "PHISHING", "INCIDENT RESPONSE"],
    category: "SOC" as const,
    featured: false,
    status: "Completed" as const,
    createdAt: "2025-04-01",
  },

  {
    id: "5",
    slug: "capture-the-flags",
    title: "Capture The Flags",
    projectType: "Challenges cybersécurité",
    description:
      "Participation à différents CTF orientés forensics, analyse et investigation.",
    longDescription:
      "Participation à plusieurs compétitions et plateformes de Capture The Flag incluant PicoCTF, TryHackMe et 404 CTF. Résolution de challenges portant sur le forensics, l'analyse de journaux, l'investigation numérique et la réponse aux incidents. Participation au 404 CTF actuellement en cours.",
    tags: ["PICOCTF", "TRYHACKME", "404CTF", "FORENSICS", "INVESTIGATION"],
    category: "Other" as const,
    featured: false,
    status: "In Progress" as const,
    createdAt: "2025-09-01",
  },
];

async function getProjectsData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID)
      return FALLBACK_PROJECTS;
    return await getProjects();
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = FALLBACK_PROJECTS;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Projets</SectionTitle>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* MODAL */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
