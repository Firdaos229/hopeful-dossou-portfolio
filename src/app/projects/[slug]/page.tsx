import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { getProjects, getProjectBySlug, getProjectContent } from "@/lib/notion";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_PROJECTS_DB_ID) return [];
    const projects = await getProjects();
    return projects.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const project = await getProjectBySlug(params.slug);
    if (!project) return { title: "Projet introuvable" };
    return {
      title: project.title,
      description: project.description,
    };
  } catch {
    return { title: "Projet" };
  }
}

export const revalidate = 3600;

export default async function ProjectPage({ params }: Props) {
  let project = null;
  let content = "";

  try {
    if (process.env.NOTION_TOKEN && process.env.NOTION_PROJECTS_DB_ID) {
      project = await getProjectBySlug(params.slug);
      if (project) {
        content = await getProjectContent(project.id);
      }
    }
  } catch {}

  if (!project) {
    // Show a nice 404-like page
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="font-orbitron text-6xl font-black text-[#007BFF]/20 mb-4">404</div>
          <h1 className="font-orbitron text-xl text-[#EAF2FF] mb-4">Projet introuvable</h1>
          <Button href="/projects" variant="outline">
            <ArrowLeft size={16} />
            Retour aux projets
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#007BFF] transition-colors mb-8 font-mono"
        >
          <ArrowLeft size={14} />
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} size="md" />
            ))}
          </div>

          <h1 className="font-orbitron text-3xl md:text-4xl font-black text-[#EAF2FF] uppercase tracking-wider mb-4">
            {project.title}
          </h1>
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" external>
                <Github size={16} />
                Voir sur GitHub
              </Button>
            )}
            {project.demoUrl && (
              <Button href={project.demoUrl} variant="ghost" external>
                <ExternalLink size={16} />
                Démo live
              </Button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#007BFF] via-[#00D9FF]/30 to-transparent mb-8" />

        {/* Content */}
        {content && (
          <div className="prose prose-invert prose-sm max-w-none text-[#9CA3AF] leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {/* Status badge */}
        <div className="mt-8 flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full ${
              project.status === "Active"
                ? "bg-green-400 animate-pulse"
                : project.status === "In Progress"
                ? "bg-yellow-400 animate-pulse"
                : "bg-[#4B5563]"
            }`}
          />
          <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}
