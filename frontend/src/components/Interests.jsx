import React from 'react';
import { cn } from "../lib/utils";
import { Helmet } from 'react-helmet-async';

const Interests = () => {
  const interests = [
    {
      title: "Hackathons & Competitions",
      description: "Solving real-world problems through competitive coding.",
      icon: "🏆",
      bgColor: "bg-[#FEF3E2]/10",
      borderColor: "border-[#FEF3E2]/20",
      hoverBorder: "hover:border-[#FEF3E2]/50",
      hoverShadow: "hover:shadow-[#FEF3E2]/20"
    },
    {
      title: "AI & Machine Learning",
      description: "Exploring artificial intelligence and deep learning frameworks.",
      icon: "🤖",
      bgColor: "bg-[#E2F0F9]/10",
      borderColor: "border-[#E2F0F9]/20",
      hoverBorder: "hover:border-[#E2F0F9]/50",
      hoverShadow: "hover:shadow-[#E2F0F9]/20"
    },
    {
      title: "Reading & Learning",
      description: "Tech books, self-improvement, and continuous skill development.",
      icon: "📚",
      bgColor: "bg-[#F4E8FF]/10",
      borderColor: "border-[#F4E8FF]/20",
      hoverBorder: "hover:border-[#F4E8FF]/50",
      hoverShadow: "hover:shadow-[#F4E8FF]/20"
    },
    {
      title: "Open Source Contribution",
      description: "Contributing to community projects and knowledge sharing.",
      icon: "🌐",
      bgColor: "bg-[#E8F7E3]/10",
      borderColor: "border-[#E8F7E3]/20",
      hoverBorder: "hover:border-[#E8F7E3]/50",
      hoverShadow: "hover:shadow-[#E8F7E3]/20"
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, modern, and user-friendly interfaces.",
      icon: "🎨",
      bgColor: "bg-[#FFE5EC]/10",
      borderColor: "border-[#FFE5EC]/20",
      hoverBorder: "hover:border-[#FFE5EC]/50",
      hoverShadow: "hover:shadow-[#FFE5EC]/20"
    },
    {
      title: "Problem Solving",
      description: "Logical reasoning through puzzles and algorithmic challenges.",
      icon: "🧩",
      bgColor: "bg-[#E0F4FF]/10",
      borderColor: "border-[#E0F4FF]/20",
      hoverBorder: "hover:border-[#E0F4FF]/50",
      hoverShadow: "hover:shadow-[#E0F4FF]/20"
    }
  ];

  return (
    <section className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black py-20 px-4">
      <Helmet>
        <title>Interests | Kasireddy Varshini</title>
        <meta name="description" content="Interests and passions of Kasireddy Varshini - Hackathons, AI exploration, open-source contributions, and logical reasoning." />
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
        <p className="text-neutral-400 text-sm md:text-base text-left mb-12 max-w-3xl">
          I love spending my free time exploring creative and technical hobbies that keep me inspired and curious. These interests shape the way I think, build, and design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-xl p-6 transition-all duration-300",
                interest.bgColor,
                "border-2",
                interest.borderColor,
                interest.hoverBorder,
                "hover:shadow-lg",
                interest.hoverShadow,
                "hover:scale-105 hover:-translate-y-1"
              )}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-200">
                  {interest.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
