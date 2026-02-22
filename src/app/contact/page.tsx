import { socialLinks } from "@/data/social";
import { contactInfo } from "@/data/social";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-primary">
          Contact
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Let’s start a <br />
          <span className="text-secondary">Conversation.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed">
          Whether you have a question about a project, want to discuss data
          strategy, or just want to say hi, my inbox is always open.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: Direct Information */}
          <div className="md:col-span-5 space-y-8">
            <div className="p-8 rounded-[2rem] border border-quinary bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Direct Details
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:olaalaanu@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-slate-900 font-medium">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-secondary shadow-sm">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-slate-900 font-medium">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white text-tertiary shadow-sm">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Working Hours
                    </p>
                    <p className="text-slate-900 font-medium">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social Networking Grid */}
          <div className="md:col-span-7">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Social Channels
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-8 rounded-3xl border border-[var(--color-quinary)] hover:border-slate-900 hover:shadow-xl transition-all group"
                >
                  <span className="text-3xl mb-3 text-slate-400 group-hover:text-slate-900 transition-colors">
                    <link.icon />
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {link.name}
                  </span>
                </a>
              ))}

              {/* Specialized "Book a Meeting" Card */}
              {/* <a
                href="https://calendly.com/your-link"
                className="flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-dashed border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all group sm:col-span-2"
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  Book a Zoom Call
                </span>
                <span className="text-xs opacity-70">
                  Check my availability
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Closing */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
        <p className="text-2xl font-medium text-slate-900 leading-relaxed italic">
          "I value clear communication and deep collaboration. If you have a
          vision, let's build the technical architecture to support it."
        </p>
      </section>
    </div>
  );
}
