"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function TestimonialModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    project: "",
    rating: 5,
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    if (form.message.length < 20) {
      alert("Minimum 20 caractères requis");
      return;
    }

    console.log("TESTIMONIAL:", form);

    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center uppercase gap-2 text-sm text-[#007BFF] hover:text-[#00D9FF] transition-colors font-mono"
      >
        Laisser un avis
        <ArrowRight size={14} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#111827] border border-[#1E2A3A] p-6 rounded-lg w-[500px] space-y-3">
            <h3 className="text-[#EAF2FF] uppercase font-bold">
              Partagez votre expérience
            </h3>

            <input
              name="name"
              placeholder="Nom"
              onChange={handleChange}
              className="w-full p-2 bg-[#0B0F19] border border-[#1E2A3A] text-white"
            />

            <input
              name="company"
              placeholder="Entreprise"
              onChange={handleChange}
              className="w-full p-2 bg-[#0B0F19] border border-[#1E2A3A] text-white"
            />

            <input
              name="role"
              placeholder="Fonction"
              onChange={handleChange}
              className="w-full p-2 bg-[#0B0F19] border border-[#1E2A3A] text-white"
            />

            <textarea
              name="message"
              placeholder="Votre avis (min 20 caractères)"
              onChange={handleChange}
              className="w-full p-2 bg-[#0B0F19] border border-[#1E2A3A] text-white"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#007BFF] uppercase text-white py-2 rounded"
            >
              Envoyer mon avis
            </button>

            <button
              onClick={() => setOpen(false)}
              className="w-full uppercase text-sm text-gray-400"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
