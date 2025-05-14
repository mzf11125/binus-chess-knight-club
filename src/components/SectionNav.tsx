
import { useEffect, useState } from "react";

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, div.section');
      const scrollPosition = window.scrollY + 100; // Offset to trigger earlier
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        if (!sectionId) return;
        
        // Cast the Element to HTMLElement to access offsetTop property
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.clientHeight;
        
        if (scrollPosition >= sectionTop && 
            scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "join", label: "Join Us" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id 
                ? "bg-chessGreen w-4 h-4" 
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            title={section.label}
            aria-label={`Scroll to ${section.label}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionNav;
