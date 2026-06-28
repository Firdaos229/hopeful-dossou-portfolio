"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { getProjects } from "@/lib/notion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project } from "@/types";

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
    coverImage: "/images/projects/siem.jpeg",
  },

  {
    id: "2",
    slug: "malware-analysis-lab",
    title: "Analyse complète d'un malware",
    projectType: "Malware Analysis",
    description:
      "Analyse statique, dynamique et mémoire d'un malware avec corrélation des artefacts et rédaction d'un rapport technique.",
    longDescription: `Analyse complète d'un malware en environnement isolé : analyse statique, dynamique et mémoire, corrélation des artefacts et rédaction d'un rapport technique avec IOC.

Au cours de ce projet, j’ai travaillé sur :
- Analyse statique avec rabin2/radare2
- Analyse dynamique avec les outils Sysinternals
- Analyse mémoire avec Volatility 3
- Corrélation des artefacts système, réseau et mémoire
- Rédaction d’un rapport technique structuré avec IOC et preuves d’analyse`,
    tags: [
      "RADARE2",
      "RABIN2",
      "VOLATILITY 3",
      "SYSINTERNALS",
      "MALWARE",
      "IOC",
    ],
    category: "Lab" as const,
    featured: true,
    status: "Completed" as const,
    createdAt: "2025-10-01",
    coverImage: "/images/projects/malware.jpeg",
    demoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7459906909085618176/",
  },

  {
    id: "3",
    slug: "lsass-secret-dump-detection",
    title: "Détection d'extraction de secrets LSASS",
    projectType: "Detection Engineering",
    description:
      "Lab SOC sur Active Directory : détection du dump LSASS (T1003.001) avec Wazuh et Sysmon.",
    longDescription: `Construction d'un lab Blue Team complet pour reproduire et détecter l'extraction de secrets depuis le processus LSASS (MITRE ATT&CK T1003.001), technique permettant à un attaquant de voler des identifiants en mémoire sous Windows.

Architecture :
Windows Server 2016 promu contrôleur de domaine (lab.local), SIEM Wazuh sur Ubuntu avec agent connecté, Sysmon en complément des journaux Windows natifs, stratégies d'audit configurées (Event 4688 avec ligne de commande).

Résultats :
Les 3 techniques de dump (ProcDump, comsvcs.dll via rundll32, Gestionnaire des tâches) ont été rejouées et détectées, avec remontée des alertes taguées T1003.001.

Point clé : la ligne de commande de l'Event 4688 est déterminante pour distinguer un usage légitime d'un usage offensif.

Rapport technique de 12 pages comprenant l'architecture, les captures et la résolution des difficultés rencontrées (promotion AD, blocage IPv6, agent non connecté, configuration Sysmon).`,
    tags: [
      "WAZUH",
      "SYSMON",
      "ACTIVE DIRECTORY",
      "LSASS",
      "T1003.001",
      "MITRE ATT&CK",
    ],
    category: "Detection" as const,
    featured: true,
    status: "Completed" as const,
    createdAt: "2025-10-15",
    coverImage: "/images/projects/detection-extraction.jpeg",
    demoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7470425477803962368/",
  },

  {
    id: "4",
    slug: "ebios-rm-risk-analysis",
    title: "Analyse de risques EBIOS RM & Audit",
    projectType: "GRC / Audit",
    description:
      "Étude de cas sur un SI : analyse de risques complète selon EBIOS RM, grille d'audit organisationnel basée sur l'ISO 27001, cartographie des risques et plan de remédiation, restitué sous forme de rapport.",
    longDescription: `Étude de cas sur un système d'information comprenant :

- Analyse de risques complète selon la méthode EBIOS RM
- Élaboration d'une grille d'audit organisationnel basée sur ISO 27001
- Cartographie des risques
- Proposition d'un plan de remédiation

Le projet est restitué sous forme d'un rapport technique détaillé.`,
    tags: ["EBIOS RM", "ISO 27001", "ANALYSE DE RISQUES", "AUDIT", "GRC"],
    category: "Other" as const,
    featured: true,
    status: "In Progress" as const,
    createdAt: "2025-11-01",
    coverImage: "/images/projects/ebios_rm.png",
    githubUrl: "https://github.com/Hopeful-DOSSOU/pentestad-engine",
  },

  {
    id: "5",
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
    demoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7475118226922848257/",
  },

  {
    id: "6",
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
    demoUrl: "https://github.com/Hopeful-DOSSOU/pentestad-server",
  },

  {
    id: "7",
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
    id: "8",
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
