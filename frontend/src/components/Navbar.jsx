import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If on resume page, navigate to home first
    if (location.pathname === '/resume') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToHome = () => {
    if (location.pathname === '/resume') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center gap-8 pl-2 sm:pl-4 md:pl-8 lg:pl-16 py-5">
          {/* Left - Logo */}
          <button 
  onClick={goToHome} 
  className="text-xl font-normal text-white hover:text-gray-300 transition-colors"
>
  &lt;VK.dev/&gt;
</button>


          {/* Books & Resume next to logo */}
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors text-lg font-normal"
          >
            Books
          </a>
          <button 
            onClick={() => navigate('/resume')}
            className="text-white hover:text-gray-300 transition-colors text-lg font-normal"
          >
            Resume
          </button>
        </div>
      </nav>

      {/* Side Navbar - Hidden on Resume page */}
      {location.pathname !== '/resume' && (
        <nav id="nav-overall" className={isVisible ? 'nav-visible' : ''}>
          <div id="nav-div">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-a"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
