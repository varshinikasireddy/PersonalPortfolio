import React from 'react';
import { cn } from "../lib/utils";
import { Helmet } from 'react-helmet-async';

const Interests = () => {
  const interests = [
    {
      title: "Exploring RAG & LLM Workflows",
      description: "Experimenting practically with vector databases (ChromaDB), semantic embeddings, document processing, and Groq LLM pipelines to ground generative AI outputs.",
      icon: "🤖",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/10",
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/10"
    },
    {
      title: "Backend Scaling & API Design",
      description: "Studying the fundamentals of distributed systems, event streaming with Kafka, database query indexing, and building clean Spring Boot microservices.",
      icon: "⚙️",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/10",
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-emerald-500/10"
    },
    {
      title: "Algorithmic Problem Solving",
      description: "Keeping my core analytical thinking and algorithmic complexity logic sharp by solving structured data structures challenges on LeetCode.",
      icon: "🧩",
      bgColor: "bg-amber-500/5",
      borderColor: "border-amber-500/10",
      hoverBorder: "hover:border-amber-500/30",
      hoverShadow: "hover:shadow-amber-500/10"
    },
    {
      title: "NCC Cadet Discipline",
      description: "Fostering strong team communication, personal integrity, and structural reliability under pressure through active service in the National Cadet Corps.",
      icon: "🎖️",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/10",
      hoverBorder: "hover:border-purple-500/30",
      hoverShadow: "hover:shadow-purple-500/10"
    }
  ];

  return (
    <section className="relative flex min-h-[40rem] md:min-h-screen w-full items-center justify-center bg-black py-24 px-4">
      <Helmet>
        <title>Interests | Kasireddy Varshini</title>
        <meta name="description" content="Genuine technical interests of Kasireddy Varshini - RAG pipelines, Backend Design, LeetCode optimization, and NCC Cadet leadership." />
        <link rel="canonical" href="https://varshinikasireddy.vercel.app/interests" />
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
          Interests.
        </h1>
        <p className="text-neutral-400 text-sm md:text-base text-left mb-12 max-w-3xl leading-relaxed">
          What I genuinely spend time on outside of coursework — building, learning, and exploring across systems engineering and AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-2xl p-6 transition-all duration-300",
                interest.bgColor,
                "border bg-neutral-900/20 backdrop-blur-md",
                interest.borderColor,
                interest.hoverBorder,
                "hover:shadow-xl",
                interest.hoverShadow,
                "hover:scale-[1.01] hover:-translate-y-0.5"
              )}
            >
              <div className="flex gap-5 items-start">
                <div className="text-4xl p-3 bg-neutral-950/60 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-neutral-900">
                  {interest.icon}
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-200">
                    {interest.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
