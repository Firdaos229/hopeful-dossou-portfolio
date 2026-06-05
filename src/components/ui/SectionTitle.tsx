import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  accent?: string;
  className?: string;
}

export function SectionTitle({ children, accent, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#007BFF] font-mono text-sm">{"<"}</span>
        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-[#EAF2FF] tracking-wider uppercase">
          {children}
          {accent && (
            <span className="text-[#007BFF] ml-2">{accent}</span>
          )}
        </h2>
        <span className="text-[#007BFF] font-mono text-sm">{"/>"}</span>
      </div>
      <div className="h-px bg-gradient-to-r from-[#007BFF] via-[#00D9FF]/50 to-transparent w-48" />
    </div>
  );
}
