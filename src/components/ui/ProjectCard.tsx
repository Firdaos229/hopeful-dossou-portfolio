// import Link from "next/link";
// import Image from "next/image";
// import { Github, ExternalLink } from "lucide-react";
// import { Tag } from "./Tag";
// import type { Project } from "@/types";

// interface ProjectCardProps {
//   project: Project;
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <article className="group relative bg-[#111827] border border-[#1E2A3A] rounded-lg overflow-hidden hover:border-[#007BFF]/40 hover:shadow-glow-sm transition-all duration-300">
//       {/* Cover image */}
//       <div className="relative h-36 bg-[#0B0F19] overflow-hidden">
//         {project.coverImage ? (
//           <Image
//             src={project.coverImage}
//             alt={project.title}
//             fill
//             className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
//           />
//         ) : (
//           <div className="w-full h-full bg-grid bg-[length:30px_30px] flex items-center justify-center">
//             <div className="text-[#007BFF]/20 font-mono text-4xl font-bold">SOC</div>
//           </div>
//         )}
//         {/* Scan line on hover */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden">
//           <div className="scan-line" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <Link href={`/projects/${project.slug}`} className="block mb-2">
//           <h3 className="font-orbitron text-sm font-bold text-[#EAF2FF] group-hover:text-[#007BFF] transition-colors tracking-wide uppercase">
//             {project.title}
//           </h3>
//         </Link>
//         <p className="text-[#9CA3AF] text-xs leading-relaxed mb-3 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-1.5 mb-4">
//           {project.tags.slice(0, 3).map((tag) => (
//             <Tag key={tag} label={tag} />
//           ))}
//         </div>

//         {/* Links */}
//         <div className="flex items-center gap-3 border-t border-[#1E2A3A] pt-3">
//           {project.githubUrl && (
//             <Link
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF] hover:text-[#007BFF] transition-colors font-mono uppercase tracking-wider"
//             >
//               <span>Voir sur Github</span>
//               <Github size={12} />
//             </Link>
//           )}
//           {project.demoUrl && (
//             <Link
//               href={project.demoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF] hover:text-[#00D9FF] transition-colors font-mono uppercase tracking-wider ml-auto"
//             >
//               <span>Demo</span>
//               <ExternalLink size={12} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }

import Image from "next/image";
import { Tag } from "./Tag";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative bg-[#111827] border border-[#1E2A3A] rounded-lg overflow-hidden hover:border-[#007BFF]/40 hover:shadow-glow-sm transition-all duration-300 cursor-pointer">
      {/* Cover image */}
      <div className="relative h-36 bg-[#0B0F19] overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
        ) : (
          <div className="w-full h-full bg-grid flex items-center justify-center">
            <div className="text-[#007BFF]/20 font-mono text-4xl font-bold">
              PROJECT
            </div>
          </div>
        )}

        {/* Scan line hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden">
          <div className="scan-line" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* PROJECT TYPE BADGE */}
        {project.projectType && (
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#29B6FF] border border-[#29B6FF]/30 px-2 py-0.5 rounded">
              {project.projectType}
            </span>
          </div>
        )}

        <h3 className="font-orbitron text-sm font-bold text-[#EAF2FF] group-hover:text-[#007BFF] transition-colors tracking-wide uppercase">
          {project.title}
        </h3>

        <p className="text-[#9CA3AF] text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
