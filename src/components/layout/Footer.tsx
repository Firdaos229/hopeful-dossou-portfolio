import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1E2A3A] bg-[#0B0F19] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4B5563] text-sm font-mono">
            © {currentYear} D. Hopeful. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Hopeful-DOSSOU"
              target="_blank"
              className="w-8 h-8 border border-[#1E2A3A] rounded flex items-center justify-center text-[#4B5563] hover:text-[#007BFF] hover:border-[#007BFF]/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={14} />
            </Link>
            <Link
              href="http://www.linkedin.com/in/hopeful-dossou"
              target="_blank"
              className="w-8 h-8 border border-[#1E2A3A] rounded flex items-center justify-center text-[#4B5563] hover:text-[#007BFF] hover:border-[#007BFF]/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </Link>
            <Link
              href="mailto:hopefuldossou1@gmail.com"
              className="w-8 h-8 border border-[#1E2A3A] rounded flex items-center justify-center text-[#4B5563] hover:text-[#007BFF] hover:border-[#007BFF]/50 transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </Link>
            <Link
              href="/cv.pdf"
              className="w-8 h-8 border border-[#1E2A3A] rounded flex items-center justify-center text-[#4B5563] hover:text-[#007BFF] hover:border-[#007BFF]/50 transition-all"
              aria-label="Download CV"
            >
              <Download size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
