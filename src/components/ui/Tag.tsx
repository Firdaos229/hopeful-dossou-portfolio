import { cn } from "@/lib/utils";

const TAG_COLORS: Record<string, string> = {
  wazuh: "bg-[#007BFF]/15 text-[#007BFF] border-[#007BFF]/30",
  elk: "bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/30",
  docker: "bg-[#6C63FF]/15 text-[#6C63FF] border-[#6C63FF]/30",
  python: "bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/30",
  powershell: "bg-[#6C63FF]/15 text-[#6C63FF] border-[#6C63FF]/30",
  bash: "bg-[#007BFF]/15 text-[#007BFF] border-[#007BFF]/30",
  splunk: "bg-green-500/15 text-green-400 border-green-500/30",
  kql: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  "mitre att&ck": "bg-red-500/15 text-red-400 border-red-500/30",
  ml: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  sklearn: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  ad: "bg-[#007BFF]/15 text-[#007BFF] border-[#007BFF]/30",
  api: "bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/30",
  thehive: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

interface TagProps {
  label: string;
  size?: "sm" | "md";
}

export function Tag({ label, size = "sm" }: TagProps) {
  const key = label.toLowerCase();
  const colorClass = TAG_COLORS[key] ?? "bg-white/5 text-[#9CA3AF] border-white/10";

  return (
    <span
      className={cn(
        "inline-flex items-center border rounded font-mono uppercase tracking-wider font-medium",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        colorClass
      )}
    >
      {label}
    </span>
  );
}
