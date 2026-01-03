import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lateef Ismaila",
  description:
    "Learn more about Lateef Ismaila, his background, skills, and experiences in web development and data analytics.",
};

export default function AboutPage() {
  return (
    <section className="px-4 py-12" id="about">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg text-gray-600">
            Get to know who I am and what I do.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-lg space-y-4 text-justify">
          <p>
            Welcome! I&apos;m <strong className="text-primary">Lateef</strong>,
            who loves to make sense of data and build cool things on the web.
          </p>
          <p>
            As a data analyst, I&apos;m all about uncovering stories hidden
            within numbers. Whether it&apos;s through Python, R, Excel, SQL, or
            Power BI, I excel at cleaning data, creating impactful
            visualizations, developing statistical models, and even diving into
            machine learning. I particularly enjoy the challenge of building
            data applications that make information accessible and useful.
          </p>
          <p>
            But my skills don&apos;t stop there! I&apos;m also a dedicated Full
            Stack Data Developer, fluent in Python, JavaScript, PHP, Java, HTML,
            and CSS. I love bringing ideas to life online, exploring and
            engaging digital experiences, including this personal website you
            are currently exploring.
          </p>
          <p>
            Outside of coding, I enjoy writing, learning new skills, and
            contributing to open source. My goal is to create useful and
            beautiful digital experiences that make a positive impact.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Skills</h2>
          <h3 className="text-2xl mb-4">Data Analytics</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
            <li>Data Cleaning</li>
            <li>Data Visualization</li>
            <li>Data Querying</li>
            <li>Statistical Modelling</li>
            <li>Machine Learning</li>
            <li>NLP</li>
          </ul>
          <h3 className="text-2xl mb-4 mt-4">Web Design & Development</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
            <li>UX UI</li>
            <li>Wordpress Development</li>
            <li>SEO</li>
            <li>Web Security</li>
            <li>Cloud Computing</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Tools</h2>
          <h3 className="text-2xl mb-4">Software</h3>
          <p>VS Code (Pylance, Live Server, Eslint, Prettier)</p>
          <p>Python (Pandas, Numpy, Matplotlib, Seaborn, TensorFlow)</p>
          <h3 className="text-2xl mb-4 mt-4">Hardware</h3>
        </div>
      </div>
    </section>
  );
}
