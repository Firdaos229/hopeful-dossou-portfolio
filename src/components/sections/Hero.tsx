"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

import img from "../../../public/images/soc-dashboard.jpeg";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((n1, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(30, 107, 255, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${n.alpha})`;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        // bounce edges
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B18] pt-28 md:pt-24 pb-24 md:pb-32">
      {/* Background image desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={img}
          alt="SOC Dashboard"
          fill
          priority
          className="object-cover object-right"
        />

        <div className="absolute inset-0 bg-[#050B18]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-[#050B18]/20" />
      </div>

      {/* CANVAS PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-md border border-green-400/20 bg-black/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-[11px] tracking-[0.2em] uppercase text-green-400 font-medium">
              Monitoring Active
            </span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron mb-6">
            <span className="block text-5xl md:text-7xl font-black tracking-wider leading-none uppercase text-white">
              ASPIRING
            </span>

            <span className="block mt-2 text-5xl md:text-7xl font-black tracking-wider leading-none uppercase text-[#1E6BFF]">
              SOC ANALYST
            </span>
          </h1>

          {/* Mobile image */}
          <div className="relative w-full h-56 mb-8 rounded-xl overflow-hidden border border-white/10 md:hidden">
            <Image
              src={img}
              alt="SOC Dashboard"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#050B18]/20" />
          </div>

          {/* Tagline */}
          <p className="text-white text-lg md:text-xl mb-5">
            Monitoring. Detecting. Responding.
          </p>

          {/* Description */}
          <p className="text-[#A3A8B8] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Étudiant en Master Cybersécurité — en route vers le métier
            d'analyste SOC. Défense des systèmes, détection d'incidents et
            réponse aux menaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 uppercase">
            <Button
              href="/projects"
              size="lg"
              className="bg-[#1E6BFF]  hover:bg-[#2A7BFF]"
            >
              Voir mes Projets
              <ArrowRight size={16} />
            </Button>

            <Button
              href="/cv.pdf"
              external
              variant="outline"
              size="lg"
              className="border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-white/10"
            >
              {" "}
              Télécharger mon CV
              <Download size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B18] to-transparent" />
    </section>
  );
}
