import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-primary tracking-widest uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Case Studies & Recent Projects
            </h3>
            <p className="text-lg text-slate-600">
              Explore how I help startups and marketing managers solve complex
              problems through code and data.
            </p>
          </div>
          <Link
            href="/projects"
            className="mt-6 md:mt-0 flex items-center text-slate-900 font-bold hover:text-primary transition-colors"
          >
            View All Projects <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
                    <FaGithub size={20} />
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
      </div>
    </section>
  );
}
