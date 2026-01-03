import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lateef Ismaila",
  description:
    "Explore a curated list of Lateef’s data analytics and web development projects.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <section className="max-w-2xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">My Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of my work in data analytics and web development.
          </p>
        </div>

        {/* Data Analytics Section */}
        {/* <section>
          <h2 className="text-2xl font-semibold mb-6">
            Data Analytics Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Sales Forecasting with Python",
                description:
                  "Built a time series model using ARIMA to forecast product sales and inform inventory planning.",
                tools: "Pandas, Matplotlib, ARIMA",
                link: "#",
              },
              {
                title: "Customer Segmentation",
                description:
                  "Performed clustering analysis to segment customers based on purchasing behavior.",
                tools: "Python, K-Means, Seaborn",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Tools: {project.tools}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section> */}

        {/* Web Development Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Web Development Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Personal Portfolio Website",
                description:
                  "Developed a fast, responsive portfolio using Next.js and Tailwind CSS.",
                tools: "Next.js, Tailwind CSS",
                link: "https://github.com/olaalaanu/olaalaanu",
              },
              {
                title: "OLFootball Quiz",
                description: "Football Quiz App using React and Tailwind CSS",
                tools: "Next.js, Tailwind CSS",
                link: "https://github.com/olaalaanu/olfootball-quiz",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Tools: {project.tools}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
