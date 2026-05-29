import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/draw_line_text";

const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
        {/* Dot Background */}


        {/* Radial Mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        {/* Content */}
        <div className="relative z-20 text-center">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
             Hi, I'm
           <button className="name-button" data-text="Varshini Kasireddy">
  <span className="actual-text">&nbsp;Varshini Kasireddy&nbsp;</span>
  <span aria-hidden="true" className="hover-text-name">&nbsp;Varshini Kasireddy&nbsp;</span>
</button>
          </h1>

          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#e5e5e5" offset="0%" />
                <stop stopColor="#737373" offset="100%" />
              </linearGradient>
            </defs>
          </svg>

          <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
  AI-Driven Full Stack Developer{" "}
  <span className="text-indigo-300 font-semibold typing-text">
    <Typewriter
      words={[
        "Building scalable web applications",
        "Developing with Java & Spring Boot",
        "Creating responsive UIs with React",
        "Designing NLP-based systems",
        "Working with Microservices & Kafka",
        "Solving real-world problems",
      ]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      deleteSpeed={80}
      delaySpeed={1000}
    />
  </span>
</h2>
          <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-3 border-2 border-gray-500 rounded-full text-gray-300 hover:text-white hover:border-white transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wider uppercase">Work With Me</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

         <div className="flex justify-center gap-4 mt-8 text-2xl">

  {/* GitHub */}
  <div className="relative group">
    <a
      href="https://github.com/varshinikasireddy"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-circle hover:text-white transition"
    >
      <FaGithub />
    </a>
    <span className="tooltip">GitHub</span>
  </div>

  {/* Instagram */}
  <div className="relative group">
    <a
      href="https://www.instagram.com/varshinikasireddy/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-circle hover:text-pink-600 transition"
    >
      <FaInstagram />
    </a>
    <span className="tooltip">Instagram</span>
  </div>

  {/* LinkedIn */}
  <div className="relative group">
    <a
      href="https://linkedin.com/in/varshinikasireddy"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-circle hover:text-blue-600 transition"
    >
      <FaLinkedin />
    </a>
    <span className="tooltip">LinkedIn</span>
  </div>

  {/* LeetCode */}
  <div className="relative group">
    <a
      href="https://leetcode.com/u/klu2300060019/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-circle hover:text-yellow-500 transition"
    >
      <SiLeetcode />
    </a>
    <span className="tooltip">LeetCode</span>
  </div>

  {/* CodeChef */}
  <div className="relative group">
    <a
      href="https://codechef.com/users/klu2300060019"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-circle hover:text-orange-500 transition"
    >
      <SiCodechef />
    </a>
    <span className="tooltip">CodeChef</span>
  </div>

</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
