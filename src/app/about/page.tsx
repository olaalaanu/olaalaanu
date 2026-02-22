import React from "react";
import { Code2, BarChart3, Binary, Cpu, Globe, Database } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-6 max-w-5xl mx-auto">
        <h1
          className="text-sm font-bold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          About Me
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Get to know who I am <br />
          <span style={{ color: "var(--color-secondary)" }}>
            and what I do.
          </span>
        </h2>
      </section>

      {/* Narrative & Image/Highlight Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Hello, I’m{" "}
              <strong className="text-slate-900">Lateef Ismaila</strong>, a
              self-taught and highly driven Full-Stack Web Developer. I
              specialize in designing and developing end-to-end systems from
              backend APIs and databases to secure authentication layers and
              intuitive user interfaces.
            </p>
            <p>
              I turn complex requirements into clean, reliable software using
              <span className="font-semibold text-slate-900">
                {" "}
                PHP, Python, JavaScript, and TypeScript
              </span>
              . My goal is to build digital products that are reliable,
              scalable, and genuinely valuable.
            </p>

            {/* Unique Advantage Box */}
            <div
              className="p-8 rounded-3xl border-l-4 my-10 bg-slate-50"
              style={{ borderColor: "var(--color-primary)" }}
            >
              <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                <BarChart3
                  size={20}
                  style={{ color: "var(--color-primary)" }}
                />
                The Data-Driven Advantage
              </h4>
              <p className="text-base italic">
                "My background in data analysis gives me a strong edge. I build
                applications that don’t just work, they collect, process, and
                present data effectively, enabling organizations to make
                informed decisions directly from their systems."
              </p>
            </div>
          </div>

          {/* Interests Sidebar */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-4">
              Focus Areas
            </h4>
            {[
              "Business Web Apps",
              "Admin Dashboards",
              "Backend Systems",
              "Data Products",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-3 rounded-xl border border-[var(--color-quinary)] text-sm font-medium text-slate-700 hover:border-[var(--color-secondary)] transition-colors"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">
              Technical Skillset
            </h3>
            <p className="text-slate-500 mt-2">
              The tools and logic behind my work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Development Card */}
            <SkillCard
              title="Web Development"
              icon={<Code2 />}
              skills={[
                "Full-Stack Dev",
                "API Design",
                "Auth (JWT/RBAC)",
                "Web Security",
              ]}
              color="var(--color-primary)"
            />
            {/* Languages Card */}
            <SkillCard
              title="Languages"
              icon={<Binary />}
              skills={["PHP", "Python", "JavaScript", "TypeScript"]}
              color="var(--color-secondary)"
            />
            {/* Data Card */}
            <SkillCard
              title="Data & Analytics"
              icon={<Database />}
              skills={[
                "SQL Querying",
                "Data Visualization",
                "ML & NLP",
                "Statistical Modeling",
              ]}
              color="var(--color-tertiary)"
            />
          </div>
        </div>
      </section>

      {/* Tools & Closing */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h4 className="text-slate-400 uppercase text-xs tracking-[0.3em] mb-8 font-bold">
          Preferred Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-4 mb-20 opacity-70">
          {[
            "Laravel",
            "Flask",
            "Next.js",
            "PostgreSQL",
            "Tailwind",
            "Docker",
          ].map((tool) => (
            <span
              key={tool}
              className="px-5 py-2 rounded-full border border-[var(--color-quinary)] text-slate-600 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="p-12 rounded-[3rem] border-2 border-dashed border-[var(--color-quinary)]">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Let's build something robust.
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            If you're looking for a developer who understands both business
            logic and data architecture, I'm ready to collaborate.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block px-10 py-4 rounded-full font-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ title, icon, skills, color }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[var(--color-quinary)] shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
        style={{ backgroundColor: `${color}15`, color: color }}
      >
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h4 className="font-bold text-slate-900 mb-4">{title}</h4>
      <ul className="space-y-3">
        {skills.map((s: string) => (
          <li
            key={s}
            className="text-sm text-slate-500 flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
