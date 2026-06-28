import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez-moi pour des opportunités en cybersécurité.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle>Contact</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              Je suis ouvert aux opportunités en cybersécurité, aux
              collaborations sur des projets innovants et aux échanges avec des
              professionnels du secteur.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hopefuldossou1@gmail.com",
                  href: "mailto:hopefuldossou1@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+33 7 69 04 41 65",
                  href: "tel:+33769044165",
                },
                {
                  icon: MapPin,
                  label: "Localisation",
                  value: "Paris (75) - Mobilité nationale",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Disponibilité",
                  value: "Ouvert aux opportunités",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#1E2A3A] rounded flex items-center justify-center bg-[#111827]">
                    <Icon size={16} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4B5563] font-mono uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-[#9CA3AF] hover:text-[#007BFF] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#9CA3AF]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1E2A3A] pt-6">
              <p className="text-xs text-[#4B5563] font-mono uppercase tracking-wider mb-4">
                Retrouvons-nous
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Hopeful-DOSSOU", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "http://www.linkedin.com/in/hopeful-dossou",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:hopefuldossou1@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-10 h-10 border border-[#1E2A3A] rounded flex items-center justify-center text-[#4B5563] hover:text-[#007BFF] hover:border-[#007BFF]/50 transition-all"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
