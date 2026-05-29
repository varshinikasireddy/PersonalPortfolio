import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';
import profile from "../assets/profile.png";
const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-left py-20 px-4">
      <Helmet>
  <title>About Varshini Kasireddy | AI-Driven Full Stack Developer</title>
  <meta name="description" content="Learn more about Varshini Kasireddy, an AI-driven full stack developer skilled in Java, Spring Boot, React, and building scalable real-world applications." />
  <link rel="canonical" href="https://varshinikasireddy.vercel.app/about" />
  <meta property="og:title" content="About Varshini Kasireddy | Full Stack Developer" />
  <meta property="og:description" content="Explore Varshini Kasireddy's background, skills, and projects in full-stack development and AI-driven applications." />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://varshinikasireddy.vercel.app/about" />
  <meta property="og:image" content="https://varshinikasireddy.vercel.app/profile_pic.png" />
  <meta property="og:site_name" content="Varshini Kasireddy Portfolio" />
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
  I'm Varshini, a Computer Science student and AI-driven full stack developer who enjoys building scalable and impactful software systems.
</p>

<p className="text-lg leading-relaxed mb-4">
  I work across full-stack development with hands-on experience in Java, Spring Boot, React, and databases like MySQL and MongoDB. I have a strong foundation in data structures, object-oriented programming, and system design, and I enjoy applying these concepts to solve real-world problems.
</p>

<p className="text-lg leading-relaxed mb-4">
  My projects include an NLP-powered Text-to-SQL system, a full-stack expense tracking platform, and event-driven microservices using Apache Kafka. I focus on writing clean, maintainable code and building systems that are efficient, scalable, and user-friendly.
</p>

<p className="text-lg leading-relaxed mb-4">
  As an NCC cadet, I bring discipline, teamwork, and consistency into my work. I value continuous learning and actively explore new technologies to improve both my technical and problem-solving skills.
</p>

<p className="text-lg leading-relaxed">
  I am currently seeking opportunities as a Software Engineer or Full Stack Developer where I can contribute to real-world products, learn from experienced teams, and grow by building impactful solutions.
</p>
        </div>
      </div>
    </section>
  );
};

export default About;