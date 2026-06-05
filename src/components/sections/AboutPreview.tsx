// import { Shield, MapPin, GraduationCap, Download } from "lucide-react";
// import { Button } from "@/components/ui/Button";
// import { SectionTitle } from "@/components/ui/SectionTitle";

// export function AboutPreview() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//       <SectionTitle>À Propos</SectionTitle>

//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Hex avatar */}
//         <div className="flex justify-center">
//           <div className="relative w-56 h-64">
//             <div
//               className="w-full h-full bg-[#111827] border-2 border-[#007BFF]/40 flex items-center justify-center"
//               style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
//             >
//               <Shield className="text-[#007BFF]/30 w-20 h-20" />
//             </div>
//             {/* Glow ring */}
//             <div
//               className="absolute inset-0 border-2 border-[#007BFF]/10 animate-pulse-slow"
//               style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
//             />
//           </div>
//         </div>

//         {/* Text */}
//         <div>
//           <p className="text-[#9CA3AF] leading-relaxed mb-4">
//             Passionné par la cybersécurité défensive, je me spécialise dans la
//             surveillance des systèmes, l'analyse des journaux, la détection
//             d'incidents et la réponse aux menaces.
//           </p>
//           <p className="text-[#9CA3AF] leading-relaxed mb-8">
//             Mon objectif : protéger les infrastructures, anticiper les attaques
//             et renforcer la posture de sécurité.
//           </p>

//           <div className="space-y-3 mb-8">
//             <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
//               <GraduationCap size={16} className="text-[#007BFF] flex-shrink-0" />
//               <span>Licence en Sécurité des Systèmes d'Information</span>
//             </div>
//             <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
//               <MapPin size={16} className="text-[#007BFF] flex-shrink-0" />
//               <span>Côte d'Ivoire</span>
//             </div>
//           </div>

//           <Button href="/cv.pdf" variant="outline" external>
//             Télécharger mon CV
//             <Download size={16} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Shield, MapPin, GraduationCap, Download } from "lucide-react";
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
              className="w-full h-full bg-[#111827] border-2 border-[#007BFF]/40 flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <Shield className="text-[#007BFF]/30 w-20 h-20" />
            </div>

            {/* Glow ring */}
            <div
              className="absolute inset-0 border-2 border-[#007BFF]/10 animate-pulse-slow"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="text-[#9CA3AF] leading-relaxed mb-4">
            Passionné par la cybersécurité défensive, je me spécialise dans la
            surveillance des systèmes, l'analyse des journaux, la détection
            d'incidents et la réponse aux menaces.
          </p>

          <p className="text-[#9CA3AF] leading-relaxed mb-8">
            Mon objectif : protéger les infrastructures, anticiper les attaques
            et renforcer la posture de sécurité.
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
              <span>Licence en Sécurité des Systèmes d'Information</span>
            </div>
          </div>

          {/* LOCALISATION */}
          <div className="space-y-2 mb-8">
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#007BFF]">
              Localisation
            </h4>

            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <MapPin size={16} className="text-[#007BFF] flex-shrink-0" />
              <span>Côte d'Ivoire</span>
            </div>
          </div>

          {/* BUTTON */}
          <Button
            href="/cv.pdf"
            variant="outline"
            external
            className="uppercase tracking-wider"
          >
            Télécharger mon CV
            <Download size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}