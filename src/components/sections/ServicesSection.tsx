import { Database, Layers, LayoutDashboard, Zap } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    description:
      "Custom web applications tailored to your business needs, built with modern frameworks and best practices to ensure performance, scalability, and security.",
    icon: (
      <Database className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
    ),
    features: [
      "Custom features & workflows",
      "Secure authentication systems",
      "Database-driven applications",
    ],
  },
  {
    title: "Backend APIs & Integrations",
    description:
      "Design and development of secure, scalable REST APIs to power web and mobile applications.",
    icon: (
      <Layers className="w-6 h-6" style={{ color: "var(--color-secondary)" }} />
    ),
    features: [
      "API architecture & documentation",
      "Authentication & authorization",
      "Third-party integrations",
    ],
  },
  {
    title: "Dashboards & Admin Systems",
    description:
      "Data-driven dashboards and admin panels that help teams monitor operations, manage users, and track performance.",
    icon: (
      <LayoutDashboard
        className="w-6 h-6"
        style={{ color: "var(--color-tertiary)" }}
      />
    ),
    features: [
      "Role-based access control",
      "Reporting & analytics views",
      "Responsive admin interfaces",
    ],
  },
  {
    title: "Maintenance & Optimization",
    description:
      "Ongoing support for existing applications to improve performance, fix issues, and add new features.",
    icon: (
      <Zap className="w-6 h-6" style={{ color: "var(--color-quaternary)" }} />
    ),
    features: [
      "Bug fixes & refactoring",
      "Performance tuning",
      "Security improvements",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
      <div className="mb-12">
        <h2
          className="text-sm font-bold tracking-widest uppercase mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Services
        </h2>
        <h3 className="text-4xl font-extrabold text-slate-900">
          What I Can Help You Build
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: "white",
              borderColor: "var(--color-quinary)",
            }}
          >
            <div
              className="mb-6 p-3 w-fit rounded-xl shadow-sm bg-white border"
              style={{ borderColor: "var(--color-quinary)" }}
            >
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              {service.title}
            </h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-slate-500"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-2"
                    style={{ backgroundColor: "var(--color-quinary)" }}
                  ></span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
