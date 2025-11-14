import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Interests from './components/Interests';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';

function App() {
  useEffect(() => {
    const warmUpServer = async () => {
      try {
        await fetch("https://portfolio-m60v.onrender.com/health");
        console.log(" Backend warmed up");
      } catch (err) {
        console.error("Backend warm-up failed:", err);
      }
    };

    warmUpServer();
  }, []);

  return (
    <>
      {/* Global SEO Metadata */}
      <Helmet>
        <title>Kasireddy Varshini | AI & Software Developer</title>
        <meta name="description" content="Portfolio of Kasireddy Varshini, an AI & Software Developer skilled in Python, Java, React, and passionate about Generative AI, NLP, and ML. Explore projects and skills." />
        <link rel="canonical" href="https://varshinikasireddy.vercel.app/" />

        <meta property="og:title" content="Kasireddy Varshini | AI & Software Developer" />
        <meta property="og:description" content="Portfolio of Kasireddy Varshini, an AI & Software Developer skilled in Python, Java, React, and passionate about Generative AI, NLP, and ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://varshinikasireddy.vercel.app/" />
        <meta property="og:image" content="https://varshinikasireddy.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Kasireddy Varshini's Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@varshinikasireddy" />
        <meta name="twitter:title" content="Kasireddy Varshini | AI & Software Developer" />
        <meta name="twitter:description" content="Portfolio of Kasireddy Varshini, an AI & Software Developer skilled in Python, Java, React, and passionate about Generative AI, NLP, and ML." />
        <meta name="twitter:image" content="https://varshinikasireddy.vercel.app/profile_pic.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kasireddy Varshini",
              "url": "https://varshinikasireddy.vercel.app/",
              "sameAs": [
                "https://github.com/varshinikasireddy",
                "https://www.instagram.com/varshinikasireddy/",
                "https://www.linkedin.com/in/varshinikasireddy/",
                "https://leetcode.com/u/klu2300060019/",
                "https://www.codechef.com/users/klu2300060019"
              ],
              "jobTitle": "AI & Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Student"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "KL University"
              },
              "image": "https://chaitanya-sai-meka.vercel.app/profile_pic.png",
              "description": "Chaitanya Sai Meka is a passionate full-stack developer specializing in React and modern web technologies, with expertise in AI and machine learning, based in Rajamahendravaram, Andhra Pradesh, India."
            }
          `}
        </script>
      </Helmet>

      <Router>
        <div className="bg-white dark:bg-black">
          <Navbar />
          <Routes>
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={
              <>
                <div id="home">
                  <Hero />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="education">
                  <Education />
                </div>
                <div id="interests">
                  <Interests />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            } />
          </Routes>
          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </>
  );
}

export default App;
