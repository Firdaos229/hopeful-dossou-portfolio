// import { Shield, Terminal, Code2, Server } from "lucide-react";
// import { SectionTitle } from "@/components/ui/SectionTitle";

// const CATEGORY_ICONS: Record<string, React.ElementType> = {
//   "Blue Team": Shield,
//   Outils: Terminal,
//   Scripting: Code2,
//   "Systèmes & Réseaux": Server,
// };

// interface SkillsPreviewProps {
//   skillsByCategory: Record<
//     string,
//     {
//       id: string;
//       name: string;
//       level: number;
//     }[]
//   >;
// }

// export function SkillsPreview({ skillsByCategory }: SkillsPreviewProps) {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//       <SectionTitle>Compétences</SectionTitle>

//       <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
//         {Object.entries(skillsByCategory).map(([category, skills]) => {
//           const Icon = CATEGORY_ICONS[category] ?? Shield;

//           return (
//             <div
//               key={category}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-xl
//                 border
//                 border-[#16324D]
//                 bg-[#050B18]
//                 p-8
//                 transition-all
//                 duration-300
//                 hover:border-[#007BFF]/60
//                 hover:shadow-[0_0_30px_rgba(0,123,255,0.15)]
//               "
//             >
//               {/* Glow background */}
//               <div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/5 to-transparent pointer-events-none" />

//               {/* Icon */}
//               <div className="relative mb-8">
//                 <div
//                   className="
//                     w-16
//                     h-16
//                     rounded-lg
//                     border
//                     border-[#007BFF]/30
//                     bg-[#007BFF]/5
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <Icon
//                     size={30}
//                     className="
//                       text-[#29B6FF]
//                       drop-shadow-[0_0_10px_rgba(41,182,255,0.7)]
//                     "
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <h3
//                 className="
//                   relative
//                   font-orbitron
//                   text-base
//                   font-bold
//                   uppercase
//                   tracking-wider
//                   text-white
//                   mb-6
//                 "
//               >
//                 {category}
//               </h3>

//               {/* Skills */}
//               <ul className="relative space-y-3">
//                 {skills.slice(0, 5).map((skill) => (
//                   <li
//                     key={skill.id}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       text-[#AAB4C5]
//                       text-sm
//                     "
//                   >
//                     <span
//                       className="
//                         w-1.5
//                         h-1.5
//                         rounded-full
//                         bg-[#29B6FF]
//                         shadow-[0_0_8px_rgba(41,182,255,0.8)]
//                         flex-shrink-0
//                       "
//                     />

//                     <span>{skill.name}</span>
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
      levelLabel?: string;
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

                    <span>
                      {skill.name}
                      <span className="text-[#29B6FF] ml-1">
                        — {skill.levelLabel}
                      </span>
                    </span>
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
