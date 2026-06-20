"use client";

import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl mx-4 bg-[#0B0F19] border border-[#1E2A3A] rounded-xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#9CA3AF] hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Image */}
        {project.coverImage && (
          <div className="relative h-56 w-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover opacity-80"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Project Type + Status */}
          <div className="flex items-center justify-between">
            {project.projectType && (
              <span className="text-[10px] uppercase tracking-wider text-[#29B6FF] border border-[#29B6FF]/30 px-2 py-1 rounded">
                {project.projectType}
              </span>
            )}

            <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-orbitron font-bold text-white uppercase">
            {project.title}
          </h2>

          {/* Description courte */}
          <p className="text-[#9CA3AF] text-sm">{project.description}</p>

          {/* Long description */}
          {project.longDescription && (
            <p className="text-[#C9D4E3] text-sm leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 border border-[#1E2A3A] text-[#9CA3AF] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-[#1E2A3A]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#007BFF]"
              >
                <Github size={16} />
                GitHub
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#00D9FF]"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
