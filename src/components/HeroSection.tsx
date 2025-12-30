export default function HeroSection() {
  return (
    <section>
      <div className="max-w-5xl mx-auto relative py-16 md:py-24">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hi!, I&apos;m Lateef
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90 text-center">
            Data Analyst & Full Stack Developer
          </p>

          <button className="px-4 py-2 text-primary border-2 border-primary rounded-lg font-semibold text-lg transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-white">
            <a href="/about">About Me</a>
          </button>
        </div>
      </div>
    </section>
  );
}
