"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Compétences", href: "/skills" },
  { label: "Projets", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1E2A3A] shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded border border-[#007BFF]/50 flex items-center justify-center bg-[#007BFF]/10 group-hover:bg-[#007BFF]/20 transition-colors">
                <span className="text-[#007BFF] font-mono text-xs font-bold">
                  &lt;/&gt;
                </span>
              </div>
              <div className="absolute inset-0 rounded animate-pulse-slow border border-[#007BFF]/20" />
            </div>
            <span className="font-mono text-sm text-[#EAF2FF] tracking-wider">
              SOC-ANALYST
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-inter transition-all duration-200 relative group",
                  pathname === link.href
                    ? "text-[#007BFF]"
                    : "text-[#9CA3AF] hover:text-[#EAF2FF]",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#007BFF] transition-all duration-200",
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}
            <button className="ml-2 p-2 text-[#4B5563] hover:text-[#007BFF] transition-colors">
              <Settings size={16} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#EAF2FF]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1E2A3A] py-4 bg-[#0B0F19]/98 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm transition-colors",
                  pathname === link.href
                    ? "text-[#007BFF] bg-[#007BFF]/5"
                    : "text-[#9CA3AF] hover:text-[#EAF2FF] hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
