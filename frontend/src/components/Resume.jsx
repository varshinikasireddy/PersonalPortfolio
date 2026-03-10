import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Create a printable version
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-black pt-20 px-4 py-12">
      {/* Background Grid */}

      
      {/* Radial Mask */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-4">
            KASIREDDY VARSHINI
          </h1>
          
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:2300060019csit@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaEnvelope /> 2300060019csit@gmail.com
            </a>
            <a href="https://github.com/varshinikasireddy" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaGithub /> varshinikasireddy
            </a>
            <a href="https://linkedin.com/in/varshinikasireddy" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <FaLinkedin /> varshinikasireddy
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Skills.
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'Java', 'Python', 'JavaScript', 'React', 'Spring Boot', 'Flask', 'Django', 'MySQL', 'Data Structures & Algorithms', 'Web Development', 'CI', 'Google Cloud (Vertex AI)', 'Large Language Models (LLMs)', 'REST APIs', 'OpenCV', 'Generative AI', 'NLP'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-neutral-800 rounded-md text-sm border border-neutral-700 hover:border-cyan-400 transition-colors text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">LEARNING</h3>
              <div className="flex flex-wrap gap-2">
                {['Advanced ML & DL', 'MLOps'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-neutral-800 rounded-md text-sm border border-neutral-700 hover:border-indigo-300 transition-colors text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">TOOLS & PLATFORMS</h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Eclipse IDE', 'Postman', 'PyCharm', 'Google Colab', 'Docker', 'MATLAB', 'Git', 'GitHub', 'AWS'].map(platform => (
                  <span key={platform} className="px-3 py-1.5 bg-neutral-800 rounded-md text-sm border border-neutral-700 hover:border-cyan-400 transition-colors text-gray-200">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Experience.
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Engineering Job Simulation</h3>
                  <p className="text-gray-300 text-lg">JPMorgan Chase & Co.</p>
                  <p className="text-gray-400 text-sm italic">Forage Virtual Experience Program</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>📅 March 2026</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Project: MIDAS Core – Transaction Processing System</h4>
                <p className="text-sm text-gray-400 mb-3">Tech Stack: Java, Spring Boot, Apache Kafka, Spring Data JPA, H2 SQL Database, REST API, Maven</p>
                
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Developed a REST endpoint for querying user balances, returning JSON responses through a Spring controller while maintaining clean architectural boundaries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions.</span>
                  </li>
                </ul>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_yGLXq3nSCEWGSmBqt_1773071209208_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                    <FaCertificate /> View Certificate
                  </a>
                  <span className="text-gray-600 mx-1">|</span>
                  <a href="https://github.com/yourusername/midas-core" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Projects.
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Expense Tracker – Full Stack Finance Management Platform</h3>
              <p className="text-gray-300 mb-2">A comprehensive financial management platform enabling users to track expenses, manage budgets, and analyze spending patterns.</p>
              <ul className="space-y-1 text-gray-300 text-sm mb-2">
               Implemented secure JWT-based authentication using Spring Security and BCrypt
                Designed scalable REST APIs for expense, budget, and notification management using Spring Boot and Spring Data JPA
                 Integrated MySQL relational database for structured financial data storage
                Added OCR receipt processing using Tesseract.js and Google Vision API to automatically extract transaction details
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-cyan-400">• Tech Stack: Java, Spring Boot, React, TypeScript, MySQL, Spring Security, JWT</span>
              </div>
            </div>

            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">SQLAI – AI-Powered SQL Assistant</h3>
              <p className="text-gray-300 mb-2">An intelligent developer tool that converts natural language prompts into optimized SQL queries using LLMs.</p>
              <ul className="space-y-1 text-gray-300 text-sm mb-2">
                <li>• Integrated LLM APIs (OpenAI and Google Gemini) to generate SQL queries from natural language prompts</li>
                <li>• Built Django REST APIs for SQL optimization, formatting, validation, and dialect conversion</li>
                <li>• Developed an interactive React + TypeScript frontend with Material UI for real-time query generation</li>
                <li>• Added CSV dataset analysis and MySQL database connectivity for testing queries on structured datasets</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-cyan-400">• Tech Stack: Python, Django, React, TypeScript, MySQL, OpenAI API, Google Gemini</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accomplishments */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Accomplishments.
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-neutral-700 pl-6 py-3 hover:border-indigo-300 transition-colors">
              <p className="text-gray-200">• Achievement or certification 1</p>
            </div>
            <div className="border-l-4 border-neutral-700 pl-6 py-3 hover:border-indigo-300 transition-colors">
              <p className="text-gray-200">• Achievement or certification 2</p>
            </div>
            <div className="border-l-4 border-neutral-700 pl-6 py-3 hover:border-indigo-300 transition-colors">
              <p className="text-gray-200">• Achievement or certification 3</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Education.
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">KL University</h3>
                  <p className="text-gray-300 italic">B.Tech in Computer Science & Information Technology</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>📍 Vaddeswaram, AP</p>
                  <p>📅 Jul 2023 - May 2027</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">Vidyanikethan International School</h3>
                  <p className="text-gray-300 italic">Higher Secondary Education</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>📍 Tirupati, AP</p>
                  <p>📅 Aug 2021 - May 2023</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">AP Model School</h3>
                  <p className="text-gray-300 italic">Secondary Education</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                  <p>📍 Thimmareddypalem, AP</p>
                  <p>📅 2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12 print:hidden">
          <button 
            onClick={handleDownload}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-cyan-500/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
