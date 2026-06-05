import type { Metadata } from "next";
import { Shield, Terminal, Code2, Server } from "lucide-react";
import { getSkillsByCategory } from "@/lib/notion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RadarChart } from "@/components/ui/RadarChart";

export const metadata: Metadata = {
  title: "Compétences",
  description: "Mes compétences en cybersécurité : Blue Team, SIEM, scripting, systèmes et réseaux.",
};

export const revalidate = 3600;

const FALLBACK_SKILLS: Record<string, { id: string; name: string; level: number }[]> = {
  "Blue Team": [
    { id: "1", name: "SIEM", level: 85 },
    { id: "2", name: "Threat Hunting", level: 75 },
    { id: "3", name: "Incident Response", level: 80 },
    { id: "4", name: "Log Analysis", level: 90 },
    { id: "5", name: "Malware Analysis", level: 65 },
  ],
  "Outils": [
    { id: "6", name: "Splunk", level: 85 },
    { id: "7", name: "Wazuh", level: 90 },
    { id: "8", name: "ELK Stack", level: 80 },
    { id: "9", name: "Microsoft Sentinel", level: 70 },
    { id: "10", name: "Wireshark", level: 75 },
  ],
  "Scripting": [
    { id: "11", name: "Python", level: 80 },
    { id: "12", name: "Bash", level: 75 },
    { id: "13", name: "PowerShell", level: 70 },
    { id: "14", name: "Shell Scripting", level: 72 },
  ],
  "Systèmes & Réseaux": [
    { id: "15", name: "Linux", level: 85 },
    { id: "16", name: "Windows Server", level: 75 },
    { id: "17", name: "Active Directory", level: 80 },
    { id: "18", name: "TCP/IP", level: 85 },
    { id: "19", name: "Docker", level: 65 },
  ],
};

const ICONS: Record<string, React.ElementType> = {
  "Blue Team": Shield,
  "Outils": Terminal,
  "Scripting": Code2,
  "Systèmes & Réseaux": Server,
};

const RADAR_DATA = [
  { label: "SIEM", value: 85 },
  { label: "Threat Hunting", value: 75 },
  { label: "Log Analysis", value: 90 },
  { label: "Incident Response", value: 80 },
  { label: "Scripting", value: 78 },
  { label: "Systèmes", value: 82 },
];

async function getData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_SKILLS_DB_ID) return FALLBACK_SKILLS;
    return await getSkillsByCategory();
  } catch {
    return FALLBACK_SKILLS;
  }
}

export default async function SkillsPage() {
  const skillsByCategory = await getData();

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Compétences</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill categories */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {Object.entries(skillsByCategory).map(([category, skills]) => {
              const Icon = ICONS[category] ?? Shield;
              return (
                <div
                  key={category}
                  className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-6 hover:border-[#007BFF]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 border border-[#007BFF]/30 rounded flex items-center justify-center bg-[#007BFF]/10">
                      <Icon size={18} className="text-[#007BFF]" />
                    </div>
                    <h2 className="font-orbitron text-sm font-bold text-[#EAF2FF] uppercase tracking-wider">
                      {category}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-[#9CA3AF]">{skill.name}</span>
                          <span className="text-xs font-mono text-[#007BFF]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 bg-[#1E2A3A] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#007BFF] to-[#00D9FF] rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Radar chart */}
          <div className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-6">
            <h2 className="font-orbitron text-sm font-bold text-[#EAF2FF] uppercase tracking-wider mb-6 text-center">
              Radar des compétences
            </h2>
            <RadarChart data={RADAR_DATA} size={280} />
          </div>
        </div>
      </div>
    </div>
  );
}
