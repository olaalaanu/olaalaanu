export default function HeroSection() {
  return (
    <section>
      <div className="max-w-5xl mx-auto relative py-16 md:py-24">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hi!, I&apos;m AbdulLateef
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90 text-center">
            I&apos;m a Data Analyst and Web Developer passionate about building
            fast, accessible websites and apps. I work with React, Next.js, and
            modern web technologies.
          </p>

          <button className="px-8 py-4 bg-[#265ec0] text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition duration-300 ease-in-out cursor-pointer">
            <a href="/about">About Me</a>
          </button>
        </div>
      </div>
    </section>
  );
}
