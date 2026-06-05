import type { Metadata } from "next";
import { Award, ExternalLink } from "lucide-react";
import { getCertifications } from "@/lib/notion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Mes certifications en cybersécurité.",
};

export const revalidate = 3600;

const FALLBACK_CERTS = [
  { id: "1", name: "Google Cybersecurity Professional", issuer: "Google / Coursera", date: "2022-06-01", credentialUrl: "#" },
  { id: "2", name: "TryHackMe SOC Level 1", issuer: "TryHackMe", date: "2022-09-01", credentialUrl: "#" },
  { id: "3", name: "Blue Team Labs Online", issuer: "BTLO", date: "2023-01-01", credentialUrl: "#" },
];

async function getData() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_CERTIFICATIONS_DB_ID) return FALLBACK_CERTS;
    return await getCertifications();
  } catch { return FALLBACK_CERTS; }
}

export default async function CertificationsPage() {
  const certs = await getData();

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Certifications</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-6 hover:border-[#007BFF]/40 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 border border-[#007BFF]/30 rounded-lg flex items-center justify-center bg-[#007BFF]/10 flex-shrink-0 group-hover:bg-[#007BFF]/20 transition-colors">
                  <Award className="text-[#007BFF]" size={20} />
                </div>
                <div>
                  <h3 className="font-orbitron text-sm font-bold text-[#EAF2FF] tracking-wide mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-[#007BFF] text-xs font-mono">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#9CA3AF] text-xs font-mono">
                  {cert.date ? formatDate(cert.date) : ""}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#9CA3AF] hover:text-[#007BFF] transition-colors font-mono"
                  >
                    Voir credential
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
