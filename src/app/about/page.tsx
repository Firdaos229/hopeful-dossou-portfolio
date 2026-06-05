import type { Metadata } from "next";
import { Shield, MapPin, GraduationCap, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/sections/Timeline";
import { getExperiences } from "@/lib/notion";

export const metadata: Metadata = {
  title: "À propos",
  description: "En savoir plus sur mon parcours en cybersécurité, Blue Team et SOC.",
};

export const revalidate = 3600;

const FALLBACK_EXPERIENCES = [
  { id: "1", title: "Analyste SOC (Stage)", company: "", type: "Stage" as const, startDate: "2024-01-01", description: "Surveillance, détection et analyse d'incidents de sécurité.", year: "2024" },
  { id: "2", title: "Projets & Labs", company: "", type: "Projet" as const, startDate: "2023-01-01", description: "Labs TryHackMe, HackTheBox, CTF et projets personnels.", year: "2023" },
  { id: "3", title: "Certification", company: "Google Cybersecurity Professional — TryHackMe SOC Level 1", type: "Certification" as const, startDate: "2022-01-01", description: "Google Cybersecurity Professional — TryHackMe SOC Level 1.", year: "2022" },
  { id: "4", title: "Études", company: "", type: "Études" as const, startDate: "2021-01-01", description: "Licence en Sécurité des Systèmes d'Information.", year: "2021" },
];

async function getData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_EXPERIENCES_DB_ID) return FALLBACK_EXPERIENCES;
    return await getExperiences();
  } catch { return FALLBACK_EXPERIENCES; }
}

export default async function AboutPage() {
  const experiences = await getData();

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>À Propos</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative w-64 h-72">
              <div
                className="w-full h-full bg-[#111827] border-2 border-[#007BFF]/40 flex items-center justify-center"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Shield className="text-[#007BFF]/50 w-24 h-24" />
              </div>
              <div
                className="absolute inset-[-8px] border border-[#007BFF]/10 animate-pulse-slow"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-orbitron text-xl font-bold text-[#EAF2FF] mb-6 uppercase tracking-wider">
              SOC Analyst <span className="text-[#007BFF]">Blue Team</span>
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-4">
              Passionné par la cybersécurité défensive, je me spécialise dans la surveillance
              des systèmes, l'analyse des journaux, la détection d'incidents et la réponse
              aux menaces.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              Mon objectif : protéger les infrastructures, anticiper les attaques et renforcer
              la posture de sécurité des organisations.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <GraduationCap size={16} className="text-[#007BFF]" />
                <span>Licence en Sécurité des Systèmes d'Information</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <MapPin size={16} className="text-[#007BFF]" />
                <span>Côte d'Ivoire</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Mail size={16} className="text-[#007BFF]" />
                <span>youremail@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Phone size={16} className="text-[#007BFF]" />
                <span>+225 07 12 34 56 78</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/cv.pdf" external>
                <Download size={16} />
                Télécharger mon CV
              </Button>
              <Button href="/contact" variant="outline">
                Me contacter
              </Button>
            </div>
          </div>
        </div>

        <Timeline experiences={experiences} />
      </div>
    </div>
  );
}
