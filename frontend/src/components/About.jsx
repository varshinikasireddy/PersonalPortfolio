import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';
import profile from "../assets/profile.png";
const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-left py-20 px-4">
      <Helmet>
        <title>About Chaitanya Sai Meka | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Learn more about Chaitanya Sai Meka, a passionate full-stack developer with expertise in React, Node.js, AI/ML, UI/UX design, and entrepreneurial ventures. Discover my journey and goals." />
        <link rel="canonical" href="https://chaitanya-sai-meka.vercel.app/about" />
        <meta property="og:title" content="About Chaitanya Sai Meka | Full Stack Developer" />
        <meta property="og:description" content="Get to know Chaitanya Sai Meka's background, skills, projects, and entrepreneurial aspirations in full-stack development and AI/ML." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://chaitanya-sai-meka.vercel.app/about" />
        <meta property="og:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Chaitanya Sai Meka's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@IAMCHAITANYASAI" />
        <meta name="twitter:title" content="About Chaitanya Sai Meka | Full Stack Developer" />
        <meta name="twitter:description" content="Discover Chaitanya Sai Meka's passion for coding, full-stack development, AI, and building impactful digital solutions." />
        <meta name="twitter:image" content="https://chaitanya-sai-meka.vercel.app/profile_pic.png" />
      </Helmet>
      
      {/* Background pattern */}

      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
        <BlurImage
          src={profile}
          blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
          alt="Profile"
          className="w-full h-full"
        />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Hey, I'm Varshini!

Welcome to my corner of the internet! I'm a CS student, multidisciplinary developer, and AI enthusiast who loves working across software engineering, artificial intelligence, and systems development. Passionate about problem-solving and continuous learning to stay updated with emerging technologies. Highly motivated to drive impactful results by integrating modern AI advancements into real-world applications.

          </p>
          <p className="text-lg leading-relaxed mb-4">
            I have hands-on experience across full-stack development, AI/ML, computer vision, NLP, and embedded systems. My projects include end-to-end web applications using React, Spring Boot, Flask, and MySQL, developed NLP-driven platforms and designing  autonomous prototypes involving OpenCV, sensors, and motor control. I enjoy integrating multiple technologies to solve complex problems rather than limiting myself to a single stack.

          </p>
          <p className="text-lg leading-relaxed mb-4">
            Beyond technical depth, I value discipline, leadership, and continuous growth. As an NCC cadet, I bring accountability, and teamwork into every project. I also enjoy sharing knowledge through workshops and collaborative projects.
          </p>
          <p className="text-lg leading-relaxed">
            Currently, I’m exploring agentic AI systems while strengthening my foundations across software, AI, and autonomous technologies with the goal of growing into a well-rounded engineer capable of contributing to impactful, cross-disciplinary teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;