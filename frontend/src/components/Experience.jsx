import React from 'react';
import { cn } from "../lib/utils";
import { FaGithub, FaCertificate } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineering Simulation Project",
      company: "JPMorgan Chase & Co.",
      type: "Forage Virtual Experience Program",
      period: "March 2026",
      project: {
        title: "MIDAS Core – Transaction Processing System",
        techStack: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "H2 Database", "REST API", "Maven"],
        description: [
          "Built an event-driven microservice using Spring Boot and Apache Kafka to process high-volume transaction messages.",
          "Implemented robust transaction validation and persistence using Spring Data JPA and an H2 SQL database.",
          "Integrated an external REST Incentive API into the transaction workflow and developed a secure REST endpoint for user balance queries, validating reliability with Maven test suites."
        ],
        github: "https://github.com/varshinikasireddy/midas-core",
        certificate: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_yGLXq3nSCEWGSmBqt_1773071209208_completion_certificate.pdf"
      }
    }
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-black py-20 px-4">
      <Helmet>
        <title>Experience | Kasireddy Varshini</title>
        <meta name="description" content="Professional experience of Kasireddy Varshini - JPMorgan Chase Software Engineering Job Simulation, MIDAS Core project, and more." />
        <link rel="canonical" href="https://varshinikasireddy.vercel.app/experience" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full">
        <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8 mb-4 text-left">
          Experience.
        </h1>
        <p className="text-neutral-400 text-sm md:text-base text-left mb-12 max-w-3xl">
          Building real-world systems through hands-on projects and professional simulations. From event-driven architectures to distributed transaction processing.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.role}
                  </h2>
                  <p className="text-xl text-cyan-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-500 italic mt-1">
                    {exp.type}
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="inline-block bg-neutral-800/60 text-neutral-400 text-sm px-3 py-1.5 rounded-md">
                    📅 {exp.period}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              {exp.project && (
                <div className="mt-6 border-t border-neutral-800 pt-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {exp.project.title}
                  </h3>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm text-neutral-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-neutral-300 hover:border-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Work Done */}
                  <div className="space-y-3 mb-4">
                    {exp.project.description.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-cyan-400 text-lg mt-0.5">•</span>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {exp.project.certificate && (
                      <a
                        href={exp.project.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/50 text-cyan-400 text-sm rounded-md hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                      >
                        <FaCertificate className="w-4 h-4" />
                        View Certificate
                      </a>
                    )}
                    {exp.project.github && (
                      <a
                        href={exp.project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 text-neutral-300 text-sm rounded-md hover:bg-neutral-800 hover:border-cyan-400 transition-all"
                      >
                        <FaGithub className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
