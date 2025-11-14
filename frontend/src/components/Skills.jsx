import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaGitAlt, FaGithub, FaBootstrap, FaFigma, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiNextdotjs, SiPostman, SiIntellijidea, SiPycharm, SiNumpy, SiMui, SiReactrouter, SiThreedotjs, SiC } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const technologies = [
    // Frontend row 1
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, category: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, category: "frontend" },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, category: "backend" },
    { name: "Express", icon: <SiExpress className="text-white" />, category: "backend" },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, category: "language" },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, category: "database" },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, category: "database" },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, category: "frontend" },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, category: "frontend" },
    
    // Frontend row 2
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, category: "frontend" },
    { name: "Material UI", icon: <SiMui className="text-[#007FFF]" />, category: "frontend" },
    { name: "Shoelace", icon: <div className="text-white font-bold">SL</div>, category: "frontend" },
    { name: "ShadCN UI", icon: <div className="text-white font-bold">UI</div>, category: "frontend" },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, category: "tools" },
    { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" />, category: "frontend" },
    { name: "Three.js", icon: <SiThreedotjs className="text-white" />, category: "frontend" },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" />, category: "design" },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, category: "tools" },
    
    // Backend/Language row
    { name: "GitHub", icon: <FaGithub className="text-white" />, category: "tools" },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" />, category: "language" },
    { name: "Java", icon: <FaJava className="text-[#007396]" />, category: "language" },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" />, category: "language" },
    { name: "PyCharm", icon: <SiPycharm className="text-black bg-white rounded p-1" />, category: "tools" },
    { name: "IntelliJ", icon: <SiIntellijidea className="text-black bg-white rounded p-1" />, category: "tools" },
    { name: "VS Code", icon: <VscCode className="text-[#007ACC]" />, category: "tools" },
    { name: "NumPy", icon: <SiNumpy className="text-[#013243] bg-white rounded p-1" />, category: "library" },
    { name: "Matplotlib", icon: <div className="text-[#11557C] font-bold">MP</div>, category: "library" },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, category: "tools" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      
      {/* Background Grid */}


      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-left w-full max-w-6xl bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4">
        Tools and technologies
      </h2>

      {/* Description */}
      <p className="text-neutral-400 text-sm md:text-base text-left w-full max-w-6xl z-20 mb-8 sm:mb-12">
        I use a variety of tools and technologies to build responsive, efficient, and scalable web applications. From coding languages to development frameworks, these are the key components I rely on to create great user experiences.
      </p>

      {/* Technologies Grid */}
      <div className="relative z-20 w-full max-w-6xl mb-12">
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="text-4xl sm:text-5xl flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Skills Section */}
      <div className="relative z-20 max-w-6xl w-full mt-8 sm:mt-12">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-cyan-400">Additional Skills</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            'Spring Boot', 'Flask', 'Django', 
            'Data Structures & Algorithms', 'Web Development', 
            'CI/CD', 'Google Cloud (Vertex AI)', 'REST APIs', 
            'AWS', 'MATLAB',
            'Advanced ML & DL', 'MLOps', 
            'Generative AI', 'NLP', 'OpenCV', 
            'Large Language Models (LLMs)'
          ].map(skill => (
            <span 
              key={skill} 
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-800 rounded-md text-sm sm:text-base border border-neutral-700 hover:border-cyan-400 transition-colors text-gray-200 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;