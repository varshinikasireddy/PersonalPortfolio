import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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

        {/* Projects */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
            Projects.
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Project Title 1</h3>
              <p className="text-gray-300 mb-2">Brief description of your project and what technologies you used.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-cyan-400">• Tech Stack: React, Node.js, MongoDB</span>
              </div>
            </div>

            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Project Title 2</h3>
              <p className="text-gray-300 mb-2">Brief description of your project and what technologies you used.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-cyan-400">• Tech Stack: Python, Flask, AI/ML</span>
              </div>
            </div>

            <div className="border-l-4 border-neutral-700 pl-6 py-4 hover:border-cyan-400 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Project Title 3</h3>
              <p className="text-gray-300 mb-2">Brief description of your project and what technologies you used.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-cyan-400">• Tech Stack: Java, SpringBoot, MySQL</span>
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
