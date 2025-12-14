
import { useState, useEffect } from 'react';
import { ImigongoSpiral, ImigongoDivider } from './components/ImigongoPatterns';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PORTFOLIO_DATA } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null); // Using any to simplify type matching for now, or import Project type
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Parallax & Scroll Spy
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'projects', 'contact'];
      // Adjust offset for mobile headers
      const offset = window.innerWidth < 768 ? 100 : 200;
      const scrollPosition = window.scrollY + offset;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#F4F4F0] font-sans selection:bg-[#8B2E2E] selection:text-white overflow-x-hidden">

      {/* --- Custom CSS for Animations --- */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 35s linear infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* --- Parallax Background Decor --- */}
      <div className="fixed top-0 right-0 -mr-20 -mt-20 z-0 opacity-10 pointer-events-none">
        <ImigongoSpiral
          size="w-96 h-96"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)` }}
        />
      </div>
      <div className="fixed bottom-0 left-0 -ml-20 -mb-20 z-0 opacity-10 pointer-events-none">
        <ImigongoSpiral
          size="w-96 h-96"
          color="border-[#8B2E2E]"
          style={{ transform: `translateY(-${scrollY * 0.1}px) rotate(-${scrollY * 0.05}deg)` }}
        />
      </div>

      <Navigation
        activeSection={activeSection}
        scrollTo={scrollTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setActiveSection={setActiveSection}
      />

      {/* --- Main Content Area --- */}
      <main className="lg:pl-20 pt-20 lg:pt-0">

        <Hero
          scrollTo={scrollTo}
          mounted={mounted}
          tagline={PORTFOLIO_DATA.tagline}
        />

        <ImigongoDivider className="opacity-30" />

        <About
          aboutText={PORTFOLIO_DATA.about}
          experience={PORTFOLIO_DATA.experience}
          education={PORTFOLIO_DATA.education}
          skills={PORTFOLIO_DATA.skills}
        />

        <Projects
          projects={PORTFOLIO_DATA.projects}
          setSelectedProject={setSelectedProject}
        />

        <Contact
          contactInfo={PORTFOLIO_DATA.contact}
        />

        <Footer name={PORTFOLIO_DATA.name} />

      </main>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}