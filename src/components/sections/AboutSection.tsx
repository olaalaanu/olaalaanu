import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 max-w-3xl">
            <h2
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              About Me
            </h2>

            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              I Build Software That Solves Real{" "}
              <span style={{ color: "var(--color-secondary)" }}>
                Business Problems
              </span>
            </h3>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
              <p>
                I build web applications with an analytical edge. As a
                self-taught Full Stack Developer, I focus on the trifecta of
                modern software: security, scalability, and maintainability.
              </p>
              <p>
                Because of my roots in Data Analysis, my work goes beyond basic
                CRUD functionality; I design intelligent backend services and
                APIs that effectively collect, process, and visualize data to
                drive business value.
              </p>
            </div>

            {/* CTA & Status Badge */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/about"
                className="inline-flex items-center font-bold text-lg group transition-all underline-offset-8 hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                Read more about my journey
                <ArrowUpRight
                  className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={22}
                />
              </Link>

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-8 border-l border-slate-100 pl-12 hidden lg:flex">
            <div>
              <p className="text-4xl font-bold text-slate-900">05+</p>
              <p className="text-slate-500 font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900">20+</p>
              <p className="text-slate-500 font-medium">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
