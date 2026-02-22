import { Code2, Terminal, Server, Settings } from "lucide-react";

const techStack = [
  {
    category: "Languages",
    items: ["PHP", "Python", "JavaScript", "TypeScript"],
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    category: "Frameworks",
    items: ["Laravel", "FastAPI", "Flask", "Next.js", "React"],
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
    icon: <Server className="w-5 h-5" />,
  },
  {
    category: "Other",
    items: ["REST APIs", "JWT Auth", "Git", "Docker"],
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-extrabold text-slate-900 mb-12">
        Tools & Technologies I Work With
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStack.map((stack, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border shadow-sm transition-transform hover:-translate-y-1"
            style={{ borderColor: "var(--color-quinary)" }}
          >
            <div
              className="flex justify-center mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              {stack.icon}
            </div>
            <h5 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-widest">
              {stack.category}
            </h5>
            <div className="flex flex-wrap justify-center gap-2">
              {stack.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-slate-700 text-xs font-semibold rounded-md"
                  style={{ backgroundColor: "var(--color-quinary)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
