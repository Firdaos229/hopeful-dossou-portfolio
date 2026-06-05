// import { Shield, Terminal, Code2, Server } from "lucide-react";
// import { SectionTitle } from "@/components/ui/SectionTitle";
// import type { SkillCategory } from "@/types";

// const CATEGORY_ICONS: Record<string, React.ElementType> = {
//   "Blue Team": Shield,
//   "Outils": Terminal,
//   "Scripting": Code2,
//   "Systèmes & Réseaux": Server,
// };

// interface SkillsPreviewProps {
//   skillsByCategory: Record<string, { id: string; name: string; level: number }[]>;
// }

// export function SkillsPreview({ skillsByCategory }: SkillsPreviewProps) {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <SectionTitle>Compétences</SectionTitle>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {Object.entries(skillsByCategory).map(([category, skills]) => {
//           const Icon = CATEGORY_ICONS[category] ?? Shield;
//           return (
//             <div
//               key={category}
//               className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-6 hover:border-[#007BFF]/30 hover:shadow-glow-sm transition-all duration-300 group"
//             >
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-10 h-10 border border-[#007BFF]/30 rounded flex items-center justify-center bg-[#007BFF]/10 group-hover:bg-[#007BFF]/20 transition-colors">
//                   <Icon size={18} className="text-[#007BFF]" />
//                 </div>
//                 <h3 className="font-orbitron text-xs font-bold text-[#EAF2FF] uppercase tracking-wider">
//                   {category}
//                 </h3>
//               </div>

//               <ul className="space-y-1.5">
//                 {skills.slice(0, 5).map((skill) => (
//                   <li
//                     key={skill.id}
//                     className="flex items-center gap-2 text-sm text-[#9CA3AF]"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#007BFF]/60 flex-shrink-0" />
//                     {skill.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { Shield, Terminal, Code2, Server } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Blue Team": Shield,
  Outils: Terminal,
  Scripting: Code2,
  "Systèmes & Réseaux": Server,
};

interface SkillsPreviewProps {
  skillsByCategory: Record<
    string,
    {
      id: string;
      name: string;
      level: number;
    }[]
  >;
}

export function SkillsPreview({ skillsByCategory }: SkillsPreviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionTitle>Compétences</SectionTitle>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Object.entries(skillsByCategory).map(([category, skills]) => {
          const Icon = CATEGORY_ICONS[category] ?? Shield;

          return (
            <div
              key={category}
              className="
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#16324D]
                bg-[#050B18]
                p-8
                transition-all
                duration-300
                hover:border-[#007BFF]/60
                hover:shadow-[0_0_30px_rgba(0,123,255,0.15)]
              "
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/5 to-transparent pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-8">
                <div
                  className="
                    w-16
                    h-16
                    rounded-lg
                    border
                    border-[#007BFF]/30
                    bg-[#007BFF]/5
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#29B6FF]
                      drop-shadow-[0_0_10px_rgba(41,182,255,0.7)]
                    "
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  font-orbitron
                  text-base
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  mb-6
                "
              >
                {category}
              </h3>

              {/* Skills */}
              <ul className="relative space-y-3">
                {skills.slice(0, 5).map((skill) => (
                  <li
                    key={skill.id}
                    className="
                      flex
                      items-center
                      gap-3
                      text-[#AAB4C5]
                      text-sm
                    "
                  >
                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-[#29B6FF]
                        shadow-[0_0_8px_rgba(41,182,255,0.8)]
                        flex-shrink-0
                      "
                    />

                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
