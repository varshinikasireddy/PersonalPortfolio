import React from "react";
import { FaGithub, FaFigma, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaHtml5, FaCss3Alt, FaAws, FaSass } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiFlask, SiOpencv, SiStreamlit, SiSpringboot, SiPostgresql, SiTensorflow, SiTailwindcss, SiStrapi, SiFramer, SiNextdotjs, SiVercel, SiJavascript, SiTypescript } from 'react-icons/si';
import Lenis from 'lenis';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";


// ICONS
const getTechIcon = (tech) => {
  const iconMap = {
    'React': <FaReact className="text-[#61DAFB]" />,
    'Node.js': <FaNodeJs className="text-[#339933]" />,
    'Python': <FaPython className="text-[#3776AB]" />,
    'Flask': <SiFlask className="text-white" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'Express': <SiExpress className="text-white" />,
    'OpenCV': <SiOpencv className="text-[#5C3EE8]" />,
    'Streamlit': <SiStreamlit className="text-[#FF4B4B]" />,
    'Spring Boot': <SiSpringboot className="text-[#6DB33F]" />,
    'PostgreSQL': <SiPostgresql className="text-[#336791]" />,
    'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
    'Docker': <FaDocker className="text-[#2496ED]" />,
    'Java': <FaJava className="text-[#007396]" />,
    'HTML': <FaHtml5 className="text-[#E34F26]" />,
    'CSS': <FaCss3Alt className="text-[#1572B6]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'AWS': <FaAws className="text-[#FF9900]" />,
    'Strapi': <SiStrapi className="text-[#2F2E8B]" />,
    'Motion': <SiFramer className="text-[#0055FF]" />,
    'SASS': <FaSass className="text-[#CC6699]" />,
    'Vercel': <SiVercel className="text-white" />,
    'NLP': <span className="text-purple-400">🧠</span>,
    'OpenAI': <span className="text-emerald-400">🤖</span>,
    'GPS': <span className="text-blue-400">📍</span>,
  };
  return iconMap[tech] || null;
};


// PROJECT DATA
const projects = [
  {
    year: "2025",
    title: "Text2SQL AI Assistant",
    description:
      "Professional AI-powered chatbot that converts natural language to SQL queries with sleek UI, voice input support, and real-time DB interaction.",
    link: "https://github.com/varshinikasireddy/text-to-sql",
    liveDemo: "#",
    figma: "#",
    image: "/text2sql.png",
    blurhash:"L00000?b00Rj~qIU-;M{00M{M{of",
    tech: ["Python", "Flask", "React", "MySQL", "OpenAI"]
  },
  {
    year: "2024",
    title: "AI Chatbot",
    description:
      "Real-time NLP chatbot with React UI deployed on Vercel for intelligent conversations.",
    link: "#",
    liveDemo: "#",
    figma: "#",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: ["React", "Node.js", "NLP", "Vercel"]
  },
  {
    year: "2024",
    title: "Automated Attendance System",
    description:
      "Face recognition application with Streamlit dashboard for rural schools using OpenCV.",
    link: "#",
    liveDemo: "#",
    figma: "#",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: ["Python", "OpenCV", "Streamlit"]
  },
  {
    year: "2024",
    title: "EV Subscription Platform",
    description:
      "Hackathon project with GPS live tracking and automated maintenance scheduling.",
    link: "#",
    liveDemo: "#",
    figma: "#",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: ["React", "Node.js", "MongoDB", "GPS API"]
  },
  {
    year: "2024",
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application built during hackathon.",
    link: "#",
    liveDemo: "#",
    figma: "#",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: ["React", "Spring Boot", "MySQL"]
  },
  {
    year: "2025",
    title: "Coming Soon",
    description:
      "More exciting projects in development. Stay tuned!",
    link: "",
    liveDemo: "",
    figma: "",
    image: "/black_page.jpg",
    blurhash:"L00SvEayWAfQozfQayfQayfQf8fQ",
    tech: []
  },
];


// MAIN COMPONENT
const Projects = () => {

  const scrollLineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 3.2 });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(scrollLineRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => lenis.destroy();
  }, []);


  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">

      {/* TOP PROGRESS BAR */}
      <div ref={scrollLineRef} className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50" />

      {/* BACKGROUND DOT GRID */}


      {/* RADIAL MASK */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />


      {/* SECTION TITLE */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Things I've been building 🚀
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Exploring ideas, solving problems, and having fun with code — here’s what I’ve built so far.
        </p>
      </div>


      {/* PROJECT LIST */}
      <div className="relative z-10 max-w-6xl w-full space-y-20">

        {projects.map((project, index) => (
          <div key={index} className="group relative">

            {/* FLOATING TECH BADGES */}
            {project.tech.length > 0 && (
              <div className="absolute -top-5 left-12 right-12 z-20 overflow-hidden">
                <div className="flex gap-2.5 animate-scroll">
                  {Array(8).fill(project.tech).flat().map((tech, idx) => {
                    const icon = getTechIcon(tech);
                    return (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded-lg 
                        text-[11px] text-neutral-200 whitespace-nowrap flex items-center gap-2 shadow-lg"
                      >
                        {icon}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* OUTER CONTAINER */}
            <div className="relative bg-neutral-900/40 border border-neutral-800 rounded-2xl p-4 md: hover:border-neutral-700 transition-all duration-300">

              {/* INNER FLOATING CARD */}
              <div className="relative bg-neutral-900/60 rounded-xl p-6 md:p-8 shadow-xl backdrop-blur-sm">

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                  {/* LEFT: TEXT */}
                  <div className="lg:col-span-5 space-y-4">

                    {/* YEAR */}
                    {project.year && (
                      <span className="inline-block bg-neutral-800/60 text-neutral-400 text-xs px-2 py-1 rounded-md">
                        {project.year}
                      </span>
                    )}

                    {/* TITLE */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          className="flex items-center gap-2 px-3.5 py-1.5 text-cyan-400 border border-cyan-400/40 
                          rounded-md text-xs hover:bg-cyan-400/10 transition"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" /> Live demo
                        </a>
                      )}

                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          className="flex items-center gap-2 px-3.5 py-1.5 border border-neutral-700 
                          text-neutral-300 text-xs rounded-md hover:bg-neutral-800 transition"
                        >
                          <FaFigma className="w-3 h-3" /> Figma
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="flex items-center gap-2 px-3.5 py-1.5 border border-neutral-700 text-neutral-300 
                          text-xs rounded-md hover:bg-neutral-800 transition"
                        >
                          <FaGithub className="w-3 h-3" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>


                  {/* RIGHT: IMAGE */}
                  <div className="lg:col-span-7">
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
                      <ProjectImage
                        image={project.image}
                        blurhash={project.blurhash}
                        alt={project.title}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="mt-10">
        <a 
          href="https://github.com/varshinikasireddy"
          target="_blank"
          className="bg-slate-800 group relative shadow-2xl rounded-full p-px text-base font-semibold text-white inline-block"
        >
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10">
            <span>For More</span>
            <FaGithub className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>

    </div>
  );
};

export default Projects;
