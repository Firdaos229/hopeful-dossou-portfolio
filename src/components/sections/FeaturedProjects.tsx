// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { SectionTitle } from "@/components/ui/SectionTitle";
// import { ProjectCard } from "@/components/ui/ProjectCard";
// import type { Project } from "@/types";

// interface FeaturedProjectsProps {
//   projects: Project[];
// }

// export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="flex items-center justify-between mb-12">
//         <SectionTitle className="mb-0">Projets Récents</SectionTitle>

//         <Link
//           href="/projects"
//           className="flex items-center uppercase gap-2 text-sm text-[#007BFF] hover:text-[#00D9FF] transition-colors font-mono"
//         >
//           Voir tous les projets
//           <ArrowRight size={14} />
//         </Link>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import type { Project } from "@/types";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <SectionTitle className="mb-0">Projets Récents</SectionTitle>

        <Link
          href="/projects"
          className="flex items-center uppercase gap-2 text-sm text-[#007BFF] hover:text-[#00D9FF] transition-colors font-mono"
        >
          Voir tous les projets
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer"
          >
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
    </section>
  );
}
