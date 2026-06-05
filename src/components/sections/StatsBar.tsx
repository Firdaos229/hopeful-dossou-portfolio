// import { StatCard } from "@/components/ui/StatCard";

// const STATS = [
//   { value: "150+", label: "Threats Détectées" },
//   { value: "12+", label: "Projets Réalisés" },
//   { value: "8+", label: "Outils Maîtrisés" },
//   { value: "24/7", label: "Monitoring" },
// ];

// export function StatsBar() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {STATS.map((stat) => (
//           <StatCard key={stat.label} value={stat.value} label={stat.label} />
//         ))}
//       </div>
//     </section>
//   );
// }

import { StatCard } from "@/components/ui/StatCard";

const STATS = [
  { value: "150+", label: "Threats Détectées" },
  { value: "12+", label: "Projets Réalisés" },
  { value: "8+", label: "Outils Maîtrisés" },
  { value: "24/7", label: "Monitoring" },
];

export function StatsBar() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        {/* Trait gauche */}
        <div className="flex-1 h-px bg-[#1E6BFF]/20" />

        {/* StatsBar */}
        <div className="mx-4 w-full max-w-6xl">
          <div className="overflow-hidden rounded-xl border border-[#1E6BFF]/20 bg-[#08111F]/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,123,255,0.08)]">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  isLast={index === STATS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trait droit */}
        <div className="flex-1 h-px bg-[#1E6BFF]/20" />
      </div>
    </section>
  );
}
