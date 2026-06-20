import type { Metadata } from "next";
import {
  Shield,
  MapPin,
  GraduationCap,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/sections/Timeline";
import { getExperiences } from "@/lib/notion";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "En savoir plus sur mon parcours en cybersécurité, Blue Team et SOC.",
};

export const revalidate = 3600;

const FALLBACK_EXPERIENCES = [
  {
    id: "1",
    title: "Master Cybersécurité (Études)",
    company: "",
    type: "Études" as const,
    startDate: "2026-01-01",
    description:
      "Master Cybersécurité à l'ESGI. Spécialisation en détection d'incidents, SOC et sécurité défensive.",
    year: "2026-2028",
  },
  {
    id: "2",
    title: "Mastère Systèmes, Réseaux & Cybersécurité (Études)",
    company: "",
    type: "Études" as const,
    startDate: "2025-01-01",
    description:
      "Mastère Ingénierie Système, Réseaux & Cybersécurité à l'IEF2I.",
    year: "2025-2026",
  },
  {
    id: "3",
    title: "Analyste SOC (Stage)",
    company: "Port de Cotonou (PAC)",
    type: "Stage" as const,
    startDate: "2024-01-01",
    description:
      "Stage de 6 mois au PAC : détection, analyse et qualification d'incidents, implémentation d'un SIEM (Wazuh) et réponse automatisée aux ransomwares.",
    year: "2024",
  },
  {
    id: "4",
    title: "Assistant Technicien IT (Stage)",
    company: "Bank Of Africa",
    type: "Stage" as const,
    startDate: "2023-01-01",
    description:
      "Stage de 3 mois à Bank Of Africa : support utilisateurs, gestion des comptes et accès, configuration d'équipements réseau.",
    year: "2023",
  },
  {
    id: "5",
    title: "Bachelor Sécurité Informatique (Études)",
    company: "",
    type: "Études" as const,
    startDate: "2021-01-01",
    description: "Bachelor Sécurité Informatique à l'ESGIS.",
    year: "2021–2024",
  },
];

async function getData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_EXPERIENCES_DB_ID)
      return FALLBACK_EXPERIENCES;
    return await getExperiences();
  } catch {
    return FALLBACK_EXPERIENCES;
  }
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
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <Shield className="text-[#007BFF]/50 w-24 h-24" />
              </div>
              <div
                className="absolute inset-[-8px] border border-[#007BFF]/10 animate-pulse-slow"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-orbitron text-xl font-bold text-[#EAF2FF] mb-6 uppercase tracking-wider">
              FUTUR <span className="text-[#007BFF]">ANALYSTE SOC</span> /{" "}
              <span className="text-[#007BFF]">CYBERSÉCURITÉ</span>
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-4">
              Étudiant en Master Cybersécurité, je me forme à la défense des
              systèmes d'information : surveillance, analyse des journaux,
              détection d'incidents et réponse aux menaces. J'ai déjà mis les
              mains dans le cambouis en environnement SOC, et je continue à
              monter en compétences sur les volets systèmes et réseaux.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              <span className="text-[#007BFF]">Mon objectif :</span> contribuer
              à la sécurité et au bon fonctionnement d'un SI, que ce soit côté
              SOC/cybersécurité, systèmes & réseaux ou support IT. Je recherche
              une alternance de 24 mois, disponible dès septembre 2026, pour
              transformer mes acquis en véritable expertise terrain.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <GraduationCap size={16} className="text-[#007BFF]" />
                <span>Master Cybersécurité — ESGI</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <MapPin size={16} className="text-[#007BFF]" />
                <span>Paris (75) — Mobilité nationale</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Mail size={16} className="text-[#007BFF]" />
                <span>hopefuldossou1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Phone size={16} className="text-[#007BFF]" />
                <span>+33 7 69 04 41 65</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 uppercase">
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
