import React from "react";
import { FaReact, FaJava, FaPython, FaJs, FaGitAlt, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiPostman, SiApachekafka, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> }
      ]
    },
    {
      title: "Frameworks & Backend",
      icon: "⚙️",
      gradient: "from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/40",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "REST APIs", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">REST</span> },
        { name: "Microservices", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">MS</span> },
        { name: "MVC Architecture", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">MVC</span> }
      ]
    },
    {
      title: "AI / LLM / GenAI",
      icon: "🤖",
      gradient: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 hover:border-purple-500/40",
      skills: [
        { name: "RAG Pipelines", icon: <span className="text-[10px] font-bold text-purple-400 border border-purple-500/30 px-1 rounded">RAG</span> },
        { name: "Groq LLM Integration", icon: <span className="text-[10px] font-bold text-purple-400 border border-purple-500/30 px-1 rounded">GROQ</span> },
        { name: "ChromaDB & Vector DBs", icon: <span className="text-[10px] font-bold text-purple-400 border border-purple-500/30 px-1 rounded">CDB</span> },
        { name: "AI Workflow Automation (n8n)", icon: <span className="text-[10px] font-bold text-purple-400 border border-purple-500/30 px-1 rounded">n8n</span> }
      ]
    },
    {
      title: "Databases & Storage",
      icon: "🗄️",
      gradient: "from-amber-500/10 to-orange-500/10 border-amber-500/20 hover:border-amber-500/40",
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
      gradient: "from-rose-500/10 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Maven", icon: <span className="text-[10px] font-bold text-neutral-400 border border-neutral-700 px-1 rounded">MVN</span> },
        { name: "Apache Kafka", icon: <SiApachekafka className="text-[#E0A83A]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> }
      ]
    },
    {
      title: "Core CS Concepts",
      icon: "🧠",
      gradient: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 hover:border-teal-500/40",
      skills: [
        { name: "Data Structures & Algorithms", icon: <span className="text-[10px] font-bold text-teal-400 border border-teal-500/20 px-1 rounded">DSA</span> },
        { name: "OOP Principles", icon: <span className="text-[10px] font-bold text-teal-400 border border-teal-500/20 px-1 rounded">OOP</span> },
        { name: "System Design", icon: <span className="text-[10px] font-bold text-teal-400 border border-teal-500/20 px-1 rounded">SYS</span> },
        { name: "Multithreading", icon: <span className="text-[10px] font-bold text-teal-400 border border-teal-500/20 px-1 rounded">MT</span> }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-24 bg-black">
      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8 mb-4 text-left">
          Skills & Technologies.
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base text-left mb-16 max-w-3xl leading-relaxed">
          Technologies and tools I work with regularly — from backend services and databases to RAG pipelines and cloud infrastructure.
        </p>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border bg-neutral-900/30 p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-900/40 ${category.gradient}`}
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