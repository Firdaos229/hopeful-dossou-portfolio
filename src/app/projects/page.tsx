import type { Metadata } from "next";
import { getProjects } from "@/lib/notion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Projets",
  description: "Découvrez mes projets en cybersécurité, SOC, Blue Team et automatisation.",
};

export const revalidate = 3600;

const FALLBACK_PROJECTS = [
  { id: "1", slug: "soc-home-lab", title: "SOC Home Lab", description: "Environnement complet de supervision et de détection d'incidents avec Wazuh, ELK et TheHive.", tags: ["WAZUH", "ELK", "THEHIVE"], category: "Lab" as const, githubUrl: "#", featured: true, status: "Active" as const, createdAt: "2024-01-01" },
  { id: "2", slug: "threat-hunting-lab", title: "Threat Hunting Lab", description: "Chasse aux menaces sur des journaux système avec Splunk. Détection d'activités suspectes et création d'alertes.", tags: ["SPLUNK", "KQL", "MITRE ATT&CK"], category: "SOC" as const, githubUrl: "#", featured: true, status: "Active" as const, createdAt: "2023-09-01" },
  { id: "3", slug: "phishing-detection", title: "Phishing Detection", description: "Détection de pages de phishing avec Machine Learning et analyse de logs.", tags: ["PYTHON", "ML", "SKLEARN"], category: "Detection" as const, githubUrl: "#", featured: false, status: "Completed" as const, createdAt: "2023-06-01" },
  { id: "4", slug: "active-directory-monitoring", title: "Active Directory Monitoring", description: "Surveillance de l'AD et détection d'activités malveillantes.", tags: ["POWERSHELL", "AD", "SPLUNK"], category: "SOC" as const, githubUrl: "#", featured: true, status: "Completed" as const, createdAt: "2023-01-01" },
  { id: "5", slug: "automation-soc", title: "Automation SOC", description: "Scripts d'automatisation pour la collecte de logs et la réponse aux incidents.", tags: ["PYTHON", "BASH", "API"], category: "Automation" as const, githubUrl: "#", featured: true, status: "Active" as const, createdAt: "2023-01-01" },
];

const CATEGORIES = ["Tous", "SOC", "Lab", "Automation", "Detection"];

async function getProjectsData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID) return FALLBACK_PROJECTS;
    return await getProjects();
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Projets</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
