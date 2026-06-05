"use client";

import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-[#16324D]
          bg-[#050B18]
          px-8
          py-10
          transition-all
          duration-500
          hover:border-[#007BFF]/50
          hover:shadow-[0_0_30px_rgba(0,123,255,0.12)]
        "
      >
        {/* subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 via-transparent to-[#007BFF]/5" />

        {/* Decorative brackets */}
        <div
          className="
            absolute top-4 left-4 w-6 h-6
            border-t-2 border-l-2 border-[#29B6FF]
            opacity-0
            scale-75
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        <div
          className="
            absolute top-4 right-4 w-6 h-6
            border-t-2 border-r-2 border-[#29B6FF]
            opacity-0
            scale-75
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        <div
          className="
            absolute bottom-4 left-4 w-6 h-6
            border-b-2 border-l-2 border-[#29B6FF]
            opacity-0
            scale-75
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        <div
          className="
            absolute bottom-4 right-4 w-6 h-6
            border-b-2 border-r-2 border-[#29B6FF]
            opacity-0
            scale-75
            transition-all duration-500
            group-hover:opacity-100
            group-hover:scale-100
          "
        />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2
              className="
                font-orbitron
                text-xl
                md:text-2xl
                font-bold
                uppercase
                tracking-wider
                text-white
                mb-3
              "
            >
              Intéressé par une collaboration ?
            </h2>

            <p className="text-[#AAB4C5]">
              Je suis ouvert aux opportunités en cybersécurité et aux projets
              innovants.
            </p>
          </div>

          <Button
            href="/contact"
            size="lg"
            className="
              whitespace-nowrap
              bg-transparent
              border
              uppercase
              border-[#007BFF]/40
              hover:border-[#007BFF]
              hover:bg-[#007BFF]/10
            "
          >
            Me contacter
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
