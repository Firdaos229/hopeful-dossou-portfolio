"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async () => {
    setStatus("sending");
    // Here you'd integrate with an email API (Resend, Nodemailer, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full bg-[#0B0F19] border border-[#1E2A3A] rounded px-4 py-3 text-sm text-[#EAF2FF] placeholder-[#4B5563] focus:outline-none focus:border-[#007BFF]/50 focus:ring-1 focus:ring-[#007BFF]/20 transition-all font-mono";

  return (
    <div className="bg-[#111827] border border-[#1E2A3A] rounded-lg p-8">
      {status === "sent" ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-400 text-2xl">✓</span>
          </div>
          <h3 className="font-orbitron text-lg font-bold text-[#EAF2FF] mb-2">Message envoyé !</h3>
          <p className="text-[#9CA3AF] text-sm">Je vous répondrai dans les plus brefs délais.</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-2">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-2">
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Opportunité de collaboration..."
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Votre message..."
              className={inputClass}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="w-full"
          >
            {status === "sending" ? (
              <>
                <span className="animate-pulse">Envoi en cours</span>
                <span className="animate-blink">_</span>
              </>
            ) : (
              <>
                Envoyer le message
                <Send size={14} />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
