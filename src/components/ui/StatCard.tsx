// interface StatCardProps {
//   value: string;
//   label: string;
// }

// export function StatCard({ value, label }: StatCardProps) {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 border border-[#1E2A3A] bg-[#111827]/50 rounded-lg hover:border-[#007BFF]/30 hover:bg-[#007BFF]/5 transition-all duration-300 group">
//       <span className="font-orbitron text-3xl md:text-4xl font-bold text-[#007BFF] group-hover:text-glow transition-all">
//         {value}
//       </span>
//       <span className="text-[#9CA3AF] text-xs font-mono uppercase tracking-widest mt-1">
//         {label}
//       </span>
//     </div>
//   );
// }

interface StatCardProps {
  value: string;
  label: string;
  isLast?: boolean;
}

export function StatCard({ value, label, isLast = false }: StatCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        text-center
        py-8 px-4
        hover:bg-[#007BFF]/5
        transition-all duration-300
        ${!isLast ? "border-r border-[#1E6BFF]/10" : ""}
      `}
    >
      <span className="font-orbitron text-3xl md:text-4xl font-bold text-[#38BDF8]">
        {value}
      </span>

      <span className="mt-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#9CA3AF]">
        {label}
      </span>
    </div>
  );
}
