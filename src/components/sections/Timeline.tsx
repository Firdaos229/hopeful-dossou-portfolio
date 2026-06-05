import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Experience } from "@/types";
import { cn } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  Stage: "text-[#007BFF]",
  Emploi: "text-green-400",
  "Projet & Labs": "text-[#00D9FF]",
  Certification: "text-[#6C63FF]",
  Études: "text-orange-400",
};

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle>Parcours {"&"} Expériences</SectionTitle>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-[#007BFF] via-[#007BFF]/30 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="flex gap-6 group">
              {/* Year + dot */}
              <div className="flex-shrink-0 w-[72px] text-right relative">
                <span className="text-[#007BFF] font-orbitron text-sm font-bold">
                  {exp.year}
                </span>
                <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#007BFF] border-2 border-[#0B0F19] group-hover:shadow-glow-sm transition-shadow" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-5 hover:border-[#007BFF]/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-orbitron text-sm font-bold text-[#EAF2FF] tracking-wide">
                      {exp.title}
                    </h3>
                    <span
                      className={cn(
                        "text-xs font-mono flex-shrink-0",
                        TYPE_COLORS[exp.type] ?? "text-[#9CA3AF]"
                      )}
                    >
                      ({exp.type})
                    </span>
                  </div>
                  {exp.company && (
                    <p className="text-[#007BFF] text-xs font-mono mb-2">{exp.company}</p>
                  )}
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
