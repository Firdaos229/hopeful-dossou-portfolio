"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionTitle } from "../ui/SectionTitle";
import { TestimonialModal } from "./TestimonialModal";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  //dès que notion sera créée on fera la connexion directe Notion API + validation admin
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <SectionTitle>Témoignages</SectionTitle>

          <TestimonialModal/>
        </div>

        {/* Card */}
        <div className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-8 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[#EAF2FF] font-semibold">{t.name}</p>
              <p className="text-sm text-[#9CA3AF]">
                {t.role} — {t.company}
              </p>
            </div>

            <div className="text-[#007BFF] font-mono text-sm">
              {"★".repeat(t.rating)}
            </div>
          </div>

          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
            "{t.message}"
          </p>

          {t.project && (
            <p className="text-xs text-[#4B5563] font-mono uppercase">
              Projet : {t.project}
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            className="text-[#9CA3AF] hover:text-[#EAF2FF]"
          >
            ← Précédent
          </button>

          <button
            onClick={next}
            className="text-[#9CA3AF] hover:text-[#EAF2FF]"
          >
            Suivant →
          </button>
        </div>
      </div>
    </section>
  );
}
