import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const isManualScroll = useRef(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "services", "education", "contact"];  // Moved education before contact

    const handleScroll = () => {
      if (isManualScroll.current) return;

      let currentSection = "home";
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    isManualScroll.current = true;

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isManualScroll.current = false;
      }, 600);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-16 sm:w-28 min-h-screen fixed top-0 left-0 z-20
                 bg-black/90 
                 backdrop-blur-md flex flex-col justify-center items-center"
    >
      <nav className="flex flex-col space-y-3 w-full px-2">
        {["home", "about", "projects", "services", "education", "contact"].map((id) => ( // Moved education before contact here as well
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`
              w-full text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-center
              transition-transform duration-300 ease-in-out
              ${
                activeSection === id
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
              }
            `}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
