// ─── Project ────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: "SOC" | "Lab" | "Automation" | "Detection" | "Other";
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  featured: boolean;
  status: "Active" | "Completed" | "In Progress";
  createdAt: string;
}

// ─── Skill ──────────────────────────────────────────────────────────────────
export interface Skill {
  id: string;
  name: string;
  category: "Blue Team" | "Outils" | "Scripting" | "Systèmes & Réseaux";
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// ─── Experience ─────────────────────────────────────────────────────────────
export interface Experience {
  id: string;
  title: string;
  company: string;
  type: "Stage" | "Emploi" | "Projet" | "Formation" | "Certification" | "Études";
  startDate: string;
  endDate?: string;
  description: string;
  year: string;
}

// ─── Certification ──────────────────────────────────────────────────────────
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

// ─── Stats ──────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}
