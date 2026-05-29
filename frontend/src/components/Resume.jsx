import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCertificate, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-black pt-20 px-4 py-12">
      {/* Radial Mask */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 border-b border-neutral-800 pb-10">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-4 tracking-tight">
            KASIREDDY VARSHINI
          </h1>
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-6">
            Software Engineer & Full Stack Developer
          </p>
          
          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
            <a href="tel:+919121814955" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaPhone className="text-cyan-400" /> +91 9121814955
            </a>
            <a href="mailto:2300060019csit@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaEnvelope className="text-cyan-400" /> 2300060019csit@gmail.com
            </a>
            <a href="https://linkedin.com/in/varshinikasireddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaLinkedin className="text-cyan-400" /> linkedin.com/in/varshinikasireddy
            </a>
            <a href="https://github.com/varshinikasireddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaGithub className="text-cyan-400" /> github.com/varshinikasireddy
            </a>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Technical Skills.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-950/40 border border-neutral-900 rounded-xl p-6">
            <div>
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-3">Programming</h3>
              <p className="text-neutral-300 text-sm">Java, Python, SQL, JavaScript</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-3">Frameworks</h3>
              <p className="text-neutral-300 text-sm">Spring Boot, React, REST API Development, Microservices, MVC</p>
            </div>
            <div className="border-t border-neutral-900 pt-4 md:border-t-0 md:pt-0">
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-3">Databases</h3>
              <p className="text-neutral-300 text-sm">MySQL, Database Design, Query Optimization, Indexing</p>
            </div>
            <div className="border-t border-neutral-900 pt-4 md:border-t-0 md:pt-0">
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-3">Tools & Platforms</h3>
              <p className="text-neutral-300 text-sm">Git, GitHub, Postman, Maven, Apache Kafka, Docker, AWS</p>
            </div>
            <div className="col-span-1 md:col-span-2 border-t border-neutral-900 pt-4">
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 uppercase mb-3">Concepts</h3>
              <p className="text-neutral-300 text-sm">Data Structures & Algorithms, OOP, System Design, Distributed Systems, REST APIs, Multithreading</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Professional Experience.
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-800 pl-6 py-2 hover:border-cyan-400 transition-colors bg-neutral-950/20 rounded-r-lg p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Software Engineering Simulation Project</h3>
                  <p className="text-cyan-400 font-semibold text-base">JPMorgan Chase & Co. <span className="text-neutral-500 font-normal">(Forage Platform)</span></p>
                </div>
                <div className="text-neutral-400 mt-1 md:mt-0 text-sm md:text-right">
                  <p className="font-medium">📅 March 2026</p>
                  <p className="text-xs text-neutral-500">Virtual</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-bold text-neutral-200 mb-2">MIDAS Core – Transaction Processing System</h4>
                <p className="text-xs text-neutral-500 mb-3">Tech Stack: Java, Spring Boot, Apache Kafka, Spring Data JPA, H2 Database, REST API, Maven</p>
                
                <ul className="space-y-2.5 text-neutral-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2.5 mt-1">•</span>
                    <span>Built an event-driven microservice using Spring Boot and Apache Kafka to process transaction messages.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2.5 mt-1">•</span>
                    <span>Implemented transaction validation and persistence using Spring Data JPA and H2 database.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2.5 mt-1">•</span>
                    <span>Integrated an external REST Incentive API into the transaction workflow and developed a REST endpoint for user balance queries and validated reliability using Maven test suites.</span>
                  </li>
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-4 text-xs border-t border-neutral-900 pt-3">
                  <a href="https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_yGLXq3nSCEWGSmBqt_1773071209208_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    <FaCertificate /> View Certificate
                  </a>
                  <a href="https://github.com/varshinikasireddy/midas-core" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Technical Projects.
          </h2>
          <div className="space-y-6">
            {/* Expense Tracker */}
            <div className="border-l-2 border-neutral-800 pl-6 py-2 hover:border-cyan-400 transition-colors bg-neutral-950/20 rounded-r-lg p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-bold text-white">Expense Tracker – Personal Finance Management Platform</h3>
                <span className="text-neutral-400 text-xs mt-1 bg-neutral-900 px-2.5 py-1 rounded">2025</span>
              </div>
              <p className="text-xs text-neutral-500 mb-3">Tech Stack: Java, Spring Boot, React, TypeScript, MySQL, Spring Security, JWT</p>
              
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Built a full-stack expense management platform using Spring Boot and React to track expenses, manage budgets, and generate financial insights.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Implemented budget tracking and expense categorization features to help users analyze spending patterns.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Optimized MySQL queries and indexing for transaction retrieval by 35%, improving database performance and reducing response latency.</span>
                </li>
              </ul>
              <div className="mt-3 text-xs">
                <a href="https://github.com/varshinikasireddy/expense-tracker" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>

            {/* SQLAI */}
            <div className="border-l-2 border-neutral-800 pl-6 py-2 hover:border-cyan-400 transition-colors bg-neutral-950/20 rounded-r-lg p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-bold text-white">SQLAI – Natural Language to SQL Query Engine</h3>
                <span className="text-neutral-400 text-xs mt-1 bg-neutral-900 px-2.5 py-1 rounded">2025</span>
              </div>
              <p className="text-xs text-neutral-500 mb-3">Tech Stack: Python, NLP, MySQL</p>
              
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Engineered an NLP-based pipeline in Python to convert natural language queries into validated SQL commands for automated database querying.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Integrated MySQL execution with caching to improve query performance and response time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span>Implemented secure query generation with input sanitization and exception handling to prevent SQL injection.</span>
                </li>
              </ul>
              <div className="mt-3 text-xs">
                <a href="https://github.com/varshinikasireddy/sqlai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
              Certifications.
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-neutral-800 pl-4 py-2 hover:border-indigo-400 transition-colors bg-neutral-950/20 p-3 rounded-r">
                <h4 className="text-sm font-bold text-white">Spring Framework Specialization</h4>
                <p className="text-xs text-neutral-400">Coursera (2025)</p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-4 py-2 hover:border-indigo-400 transition-colors bg-neutral-950/20 p-3 rounded-r">
                <h4 className="text-sm font-bold text-white">Joy of Computing Using Python</h4>
                <p className="text-xs text-neutral-400">NPTEL (2024)</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
              Key Achievements.
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-neutral-800 pl-4 py-2 hover:border-indigo-400 transition-colors bg-neutral-950/20 p-3 rounded-r">
                <p className="text-sm text-neutral-300">Solved 250+ algorithmic problems on LeetCode and CodeChef, focusing on data structures and algorithms.</p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-4 py-2 hover:border-indigo-400 transition-colors bg-neutral-950/20 p-3 rounded-r">
                <p className="text-sm text-neutral-300">Hosted a hands-on Git & GitHub workshop for 50+ students covering branching workflows and collaborative development.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
            Education.
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-800 pl-6 py-2 hover:border-cyan-400 transition-colors bg-neutral-950/20 rounded-r-lg p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">KL University</h3>
                  <p className="text-neutral-400 text-sm italic">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-neutral-400 mt-1 md:mt-0 text-sm md:text-right">
                  <p>📍 Vaddeswaram, Andhra Pradesh</p>
                  <p className="font-semibold text-cyan-400">CGPA: 9.48 / 10.00</p>
                  <p className="text-xs text-neutral-500">📅 Expected May 2027</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-neutral-800 pl-6 py-2 hover:border-cyan-400 transition-colors bg-neutral-950/20 rounded-r-lg p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Sree Vidyanikethan International School</h3>
                  <p className="text-neutral-400 text-sm italic">Senior Secondary (CBSE – MPC)</p>
                </div>
                <div className="text-neutral-400 mt-1 md:mt-0 text-sm md:text-right">
                  <p>📍 Tirupati, Andhra Pradesh</p>
                  <p className="font-semibold text-cyan-400">SCORE: 85%</p>
                  <p className="text-xs text-neutral-500">📅 2021 – 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Printable/Download Action */}
        <div className="text-center mt-12 print:hidden">
          <button 
            onClick={handleDownload}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-lg transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Print / Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
