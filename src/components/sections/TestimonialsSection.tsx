import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lateef didn't just build our app; he built a system that helped us understand our customers for the first time. His data insights were the catalyst for our rebranding strategy.",
    author: "Sarah Jenkins",
    role: "Marketing Manager at TechFlow",
    image: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    quote:
      "Working with Lateef was a game-changer. His ability to bridge the technical gap and communicate data concepts to our stakeholders saved us months of development time.",
    author: "David Chen",
    role: "Founder of DataPulse",
    image: "https://picsum.photos/seed/david/100/100",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-bold text-primary tracking-widest uppercase mb-16">
          Trusted By Professionals
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-10 rounded-3xl relative text-left border border-slate-100 shadow-sm"
            >
              <Quote
                className="absolute -top-6 left-10 text-tertiary"
                size={48}
                fill="currentColor"
                opacity={0.2}
              />
              <p className="text-xl text-slate-700 italic mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h5 className="font-bold text-slate-900">{t.author}</h5>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
