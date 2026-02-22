import { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import {
  Github,
  ExternalLink,
  Code2,
  Database as DataIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Lateef Ismaila",
  description:
    "Explore a curated list of Lateef’s data analytics and web development projects.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-primary">
          Portfolio
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Selected <br />
          <span className="text-secondary">Works & Projects.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed">
          A fusion of software engineering and data analysis. I build systems
          that are functional, analytical, and scalable.
        </p>
      </section>

      {/* Web Development Section */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-2 rounded-lg bg-slate-50 border border-[var(--color-quinary)]">
            <Code2 size={20} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Web Development</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white p-8 rounded-[2rem] border border-quinary transition-all duration-300 hover:shadow-xl hover:shadow-slate-100"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-50 border border-color-quinary text-primary">
                  {project.category}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-slate-400 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {project.title}
              </h4>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold text-slate-400 px-2 py-1 rounded bg-slate-50"
                  >
                    #{tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 rounded-lg bg-white border border-[var(--color-quinary)]">
              <DataIcon size={20} className="text-tertiary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Data Analytics
            </h3>
          </div>

          <div className="p-12 rounded-[3rem] bg-white border border-quinary text-center">
            <p className="text-slate-400 font-medium">
              Data projects are currently being curated. <br />
              Check back for case studies on SQL modeling and Python analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="p-12 rounded-[3rem] border-2 border-dashed border-color-quinary">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Have a project in mind?
          </h3>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            I’m always open to discussing new web applications or data-driven
            systems.
          </p>
          <a
            href="mailto:olaalaanu@gmail.com"
            className="inline-block px-10 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 bg-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
