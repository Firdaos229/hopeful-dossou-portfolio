"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form endpoint (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  const inputClass =
    "w-full bg-bg-primary border border-border rounded px-3 py-2.5 text-sm text-text-primary placeholder:text-text-dim font-mono focus:outline-none focus:border-accent-blue/60 focus:shadow-glow-blue transition-all";

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <h2 className="font-orbitron font-semibold text-sm text-accent-cyan uppercase tracking-widest mb-2">
        // Envoyer un message
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1 block">Nom</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1 block">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1 block">Sujet</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="Opportunité de collaboration"
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-text-muted text-xs font-mono uppercase tracking-wider mb-1 block">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Votre message..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full py-3 bg-accent-blue hover:bg-blue-500 disabled:opacity-60 text-white text-sm font-mono font-medium rounded transition-all duration-200 flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            ENVOI EN COURS...
          </>
        ) : status === "success" ? (
          <>
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            MESSAGE ENVOYÉ !
          </>
        ) : (
          "ENVOYER LE MESSAGE"
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-xs font-mono text-center">
          Une erreur est survenue. Réessayez ou contactez-moi directement par email.
        </p>
      )}
    </form>
  );
}
