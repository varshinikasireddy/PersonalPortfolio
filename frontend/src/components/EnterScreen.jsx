import React, { useState, useEffect } from "react";

const EnterScreen = ({ onEnter }) => {
  const [showLetters, setShowLetters] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [shrinking, setShrinking] = useState(false);
  const [autoEnter, setAutoEnter] = useState(false);
  
  const letters = ["V", "K", ".", "d", "e", "v"];

  useEffect(() => {
    // Start letter animation immediately
    setShowLetters(true);

    // Show tagline after letters
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1200);

    // Show button
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1800);

    // Auto-enter after 5 seconds
    const autoTimer = setTimeout(() => {
      setAutoEnter(true);
      handleEnter();
    }, 5000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(buttonTimer);
      clearTimeout(autoTimer);
    };
  }, []);

  const handleEnter = () => {
    if (shrinking) return; // Prevent multiple clicks

    setShrinking(true);

    // Complete transition after animation
    setTimeout(() => {
      onEnter();
    }, 1000);
  };  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center z-[9999] overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showLetters ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Main Content Container */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        shrinking 
          ? 'scale-[0.3] opacity-0 translate-y-[-50vh]' 
          : 'scale-100 opacity-100'
      }`}>
        {/* VK.dev Logo */}
        <div className="flex items-center justify-center space-x-1 mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-8xl md:text-9xl font-extrabold transition-all duration-700 ${
                showLetters 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-12 rotate-12'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 30%, #60a5fa 60%, #38bdf8 85%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.7))',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Inspiring Tagline */}
        <div className={`transition-all duration-700 ${
          showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Where creativity meets innovation ✨
          </p>
        </div>

        {/* Enter Button */}
        <div className={`mt-12 transition-all duration-700 ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={handleEnter}
            disabled={shrinking}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-2">
              {shrinking ? 'Loading...' : 'Explore Portfolio'}
              {!shrinking && (
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {!shrinking && (
            <p className="mt-4 text-xs text-neutral-500">
              Auto-entering in a moment...
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnterScreen;
