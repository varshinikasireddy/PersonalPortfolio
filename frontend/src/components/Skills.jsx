import React from "react";
import { cn } from "../lib/utils";

const Skills = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-8 sm:mb-12">
        Tech Stack & Skills
      </h2>

      {/* Skills Content */}
      <div className="relative z-20 max-w-5xl w-full space-y-8 sm:space-y-10">
        
        {/* SKILLS Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-cyan-400">SKILLS</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['C', 'Java', 'Python', 'JavaScript', 'React', 'Spring Boot', 'Flask', 'Django', 'MySQL', 'Data Structures & Algorithms', 'Web Development', 'CI', 'Google Cloud (Vertex AI)', 'Large Language Models (LLMs)', 'REST APIs', 'OpenCV', 'Generative AI', 'NLP'].map(skill => (
              <span 
                key={skill} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-800 rounded-md text-sm sm:text-base border border-neutral-700 hover:border-cyan-400 transition-colors text-gray-200 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* LEARNING Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-indigo-300">LEARNING</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['Advanced ML & DL', 'MLOps'].map(skill => (
              <span 
                key={skill} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-800 rounded-md text-sm sm:text-base border border-neutral-700 hover:border-indigo-300 transition-colors text-gray-200 hover:shadow-lg hover:shadow-indigo-300/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS & PLATFORMS Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-cyan-400">TOOLS & PLATFORMS</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['VS Code', 'Eclipse IDE', 'Postman', 'PyCharm', 'Google Colab', 'Docker', 'MATLAB', 'Git', 'GitHub', 'AWS'].map(platform => (
              <span 
                key={platform} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-800 rounded-md text-sm sm:text-base border border-neutral-700 hover:border-cyan-400 transition-colors text-gray-200 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;