import React from "react";
import { FaReact, FaJava, FaPython, FaJs, FaGitAlt, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiPostman, SiApachekafka } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      gradient: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40",
      iconColor: "text-blue-400",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> }
      ]
    },
    {
      title: "Frameworks & Libs",
      icon: "⚙️",
      gradient: "from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/40",
      iconColor: "text-green-400",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "REST API Dev", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">REST</span> },
        { name: "Microservices", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">MS</span> },
        { name: "MVC Architecture", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">MVC</span> }
      ]
    },
    {
      title: "Databases & Design",
      icon: "🗄️",
      gradient: "from-amber-500/10 to-orange-500/10 border-amber-500/20 hover:border-amber-500/40",
      iconColor: "text-amber-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Database Design", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">DB</span> },
        { name: "Query Optimization", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">OPT</span> },
        { name: "Indexing", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">IDX</span> }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      gradient: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 hover:border-purple-500/40",
      iconColor: "text-purple-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Apache Kafka", icon: <SiApachekafka className="text-[#E0A83A]" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> }
      ]
    },
    {
      title: "Core Concepts",
      icon: "🧠",
      gradient: "from-rose-500/10 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40",
      iconColor: "text-rose-400",
      skills: [
        { name: "DSA", icon: <span className="text-[10px] font-bold text-rose-400 border border-rose-500/20 px-1 rounded">DSA</span> },
        { name: "OOP Principles", icon: <span className="text-[10px] font-bold text-rose-400 border border-rose-500/20 px-1 rounded">OOP</span> },
        { name: "System Design", icon: <span className="text-[10px] font-bold text-rose-400 border border-rose-500/20 px-1 rounded">SYS</span> },
        { name: "Distributed Systems", icon: <span className="text-[10px] font-bold text-rose-400 border border-rose-500/20 px-1 rounded">DIS</span> },
        { name: "Multithreading", icon: <span className="text-[10px] font-bold text-rose-400 border border-rose-500/20 px-1 rounded">MT</span> }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-24 bg-black">
      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-b from-neutral-150 to-neutral-400 bg-clip-text text-transparent mb-4 text-left">
          Skills & Expertises.
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base text-left mb-16 max-w-3xl leading-relaxed">
          I've developed a robust technical foundation focused on building efficient, scalable backend services, designing reliable databases, and implementing event-driven architectures.
        </p>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border bg-neutral-900/30 p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-neutral-900 ${category.gradient}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 group/skill cursor-default"
                  >
                    <div className="text-2xl w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-neutral-300 group-hover/skill:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;