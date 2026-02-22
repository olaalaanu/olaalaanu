import { ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="relative overflow-hidden pt-16 pb-24">
        {/* Decorative Background Elements */}
        {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div> */}
        {/* <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Full-Stack Developer Building Scalable Web Applications & APIs
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I’m <strong>Lateef Ismaila</strong>, a full-stack developer
                specializing in building secure, scalable, and maintainable web
                applications.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center group"
                >
                  Start a Project
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  View my Work
                </a>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/lateef/800/600"
                  alt="Lateef Ismaila working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                    <p className="text-xs font-bold text-primary uppercase mb-1">
                      Latest Insight
                    </p>
                    <p className="text-sm font-semibold text-slate-800 italic">
                      "Data is the new football: if you can't read the game, you
                      can't win."
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards overlay */}
              {/* <div className="hidden sm:block absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl transform rotate-3">
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm font-medium opacity-90">
                  Insights Delivered
                </p>
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-tertiary text-white p-6 rounded-2xl shadow-xl transform -rotate-2">
                <p className="text-3xl font-bold">12k+</p>
                <p className="text-sm font-medium opacity-90">Lines of Code</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
