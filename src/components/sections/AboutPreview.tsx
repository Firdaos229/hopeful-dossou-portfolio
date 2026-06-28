// import { Shield, MapPin, GraduationCap, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/Button";
// import { SectionTitle } from "@/components/ui/SectionTitle";

// export function AboutPreview() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//       <SectionTitle>À Propos</SectionTitle>

//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         {/* HEX AVATAR */}
//         <div className="flex justify-center">
//           <div className="relative w-56 h-64">
//             <div
//               className="w-full h-full bg-[#111827] border-2 border-[#007BFF]/40 flex items-center justify-center"
//               style={{
//                 clipPath:
//                   "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//               }}
//             >
//               <Shield className="text-[#007BFF]/30 w-20 h-20" />
//             </div>

//             {/* Glow ring */}
//             <div
//               className="absolute inset-0 border-2 border-[#007BFF]/10 animate-pulse-slow"
//               style={{
//                 clipPath:
//                   "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//               }}
//             />
//           </div>
//         </div>

//         {/* TEXT */}
//         <div className="text-justify">
//           <p className="text-[#9CA3AF] leading-relaxed mb-4">
//             Étudiant en Master Cybersécurité, je me forme à la défense des
//                           systèmes d'information, à la gouvernance et à l'audit de cybersécurité. J'ai déjà mis les
//             mains dans le cambouis en environnement SOC, et je continue à monter
//             en compétences sur les volets systèmes et réseaux.
//           </p>

//           <p className="text-[#9CA3AF] leading-relaxed mb-8">
//             Je recherche une alternance de 24 mois, disponible dès septembre
//             2026, pour transformer mes acquis en véritable expertise terrain.
//           </p>

//           {/* FORMATION */}
//           <div className="mb-6">
//             <h4 className="text-xs tracking-[0.25em] uppercase text-[#007BFF] mb-2">
//               Formation
//             </h4>

//             <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
//               <GraduationCap
//                 size={16}
//                 className="text-[#007BFF] flex-shrink-0"
//               />
//               <span>Master Cybersécurité - ESGI</span>
//             </div>
//           </div>

//           {/* LOCALISATION */}
//           <div className="space-y-2 mb-8">
//             <h4 className="text-xs tracking-[0.25em] uppercase text-[#007BFF]">
//               Localisation
//             </h4>

//             <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
//               <MapPin size={16} className="text-[#007BFF] flex-shrink-0" />
//               <span>Paris (75) - Mobilité nationale</span>
//             </div>
//           </div>

//           {/* BUTTON */}
//           <Button
//             href="/about"
//             variant="outline"
//             external
//             className="uppercase tracking-wider"
//           >
//             En savoir plus
//             <ArrowRight size={16} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import profile from "../../../public/images/hopeful-dossou.jpeg";

import { MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SectionTitle>À Propos</SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* HEX AVATAR */}
        <div className="flex justify-center">
          <div className="relative w-56 h-64">
            <div
              className="relative w-full h-full overflow-hidden border-2 border-[#007BFF]/40 bg-[#111827]"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <Image
                src={profile}
                alt="Photo de profil de Hopeful Dossou"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-[#007BFF]/10" />
            </div>

            {/* Glow ring */}
            <div
              className="absolute inset-0 border-2 border-[#007BFF]/20 animate-pulse"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-justify">
          <p className="text-[#9CA3AF] leading-relaxed mb-4">
            Étudiant en Master Cybersécurité, je me forme à la défense des
            systèmes d'information, à la gouvernance et à l'audit de
            cybersécurité. J'ai déjà mis les mains dans le cambouis en
            environnement SOC, et je continue à monter en compétences sur les
            volets systèmes et réseaux.
          </p>

          <p className="text-[#9CA3AF] leading-relaxed mb-8">
            Je recherche une alternance de 24 mois, disponible dès septembre
            2026, pour transformer mes acquis en véritable expertise terrain.
          </p>

          {/* FORMATION */}
          <div className="mb-6">
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#007BFF] mb-2">
              Formation
            </h4>

            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <GraduationCap
                size={16}
                className="text-[#007BFF] flex-shrink-0"
              />
              <span>Master Cybersécurité - ESGI</span>
            </div>
          </div>

          {/* LOCALISATION */}
          <div className="space-y-2 mb-8">
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#007BFF]">
              Localisation
            </h4>

            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <MapPin size={16} className="text-[#007BFF] flex-shrink-0" />
              <span>Paris (75) - Mobilité nationale</span>
            </div>
          </div>

          {/* BUTTON */}
          <Button
            href="/about"
            variant="outline"
            className="uppercase tracking-wider"
          >
            En savoir plus
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
