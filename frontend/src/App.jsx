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
import Experience from './components/Experience';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';

function App() {
  useEffect(() => {
    const warmUpServer = async () => {
      try {
        await fetch("https://portfolio-m60v.onrender.com/health");
        console.log("Backend warmed up");
      } catch (err) {
        console.error("Backend warm-up failed:", err);
      }
    };
    warmUpServer();
  }, []);

  return (
    <>
      <Helmet>
        <title>Kasireddy Varshini | Software Engineer & Full Stack Developer</title>
        <meta name="description" content="Portfolio of Kasireddy Varshini, a Computer Science undergraduate (KL University, 2027) specialising in Java, Spring Boot, React, and distributed systems. Explore projects and skills." />
        <link rel="canonical" href="https://varshinikasireddy.vercel.app/" />

        <meta property="og:title" content="Kasireddy Varshini | Software Engineer" />
        <meta property="og:description" content="Portfolio of Kasireddy Varshini — backend engineering, full-stack projects, microservices, and DSA. CGPA 9.48, KL University 2027." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://varshinikasireddy.vercel.app/" />
        <meta property="og:image" content="https://varshinikasireddy.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Kasireddy Varshini Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@varshinikasireddy" />
        <meta name="twitter:title" content="Kasireddy Varshini | Software Engineer" />
        <meta name="twitter:description" content="Portfolio of Kasireddy Varshini — backend engineering, full-stack projects, microservices, and DSA." />
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
              "jobTitle": "Software Engineer & Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Student at KL University"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "KL University"
              },
              "image": "https://varshinikasireddy.vercel.app/profile_pic.png",
              "description": "Kasireddy Varshini is a Computer Science undergraduate at KL University (graduating 2027), experienced in building scalable backend services using Java, Spring Boot, REST APIs, and MySQL. She has developed microservices and event-driven systems with Apache Kafka, with a strong foundation in data structures, algorithms, and system design.",
              "telephone": "+919121814955",
              "email": "2300060019csit@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vaddeswaram",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              }
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
                <div id="home"><Hero /></div>
                <div id="about"><About /></div>
                <div id="skills"><Skills /></div>
                <div id="experience"><Experience /></div>
                <div id="projects"><Projects /></div>
                <div id="education"><Education /></div>
                <div id="interests"><Interests /></div>
                <div id="contact"><Contact /></div>
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
