import React from 'react';
import { cn } from "../lib/utils";
import { Helmet } from 'react-helmet-async';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "KL University",
      duration: "Jul 2023 – Expected May 2027",
      location: "Vaddeswaram, Andhra Pradesh (CGPA: 9.48 / 10.00)",
    },
    {
      degree: "Senior Secondary (CBSE – MPC)",
      institution: "Sree Vidyanikethan International School",
      duration: "2021 – 2023",
      location: "Tirupati, Andhra Pradesh (SCORE: 85%)",
    },
  ];

  return (
    <section className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>Education | Kasireddy Varshini</title>
        <meta name="description" content="Educational background of Kasireddy Varshini - B.Tech in Computer Science & IT from KL University and Higher Secondary from Vidyanikethan International School." />
        <link rel="canonical" href="https://varshinikasireddy.vercel.app/education" />
      </Helmet>
      

      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full">
        <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8 mb-16 text-left">
          Education.
        </h1>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-700"></div>
          
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-neutral-600 rounded-full border-4 border-black"></div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1"></div>
              
              {/* Content card */}
              <div className="flex-1 ml-10 md:ml-0 group">
                <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-neutral-500 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-neutral-200 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-neutral-400 mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-neutral-500">
                    <p>📅 {edu.duration}</p>
                    <p>📍 {edu.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
