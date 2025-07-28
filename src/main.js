import React from 'react';
import { motion } from 'framer-motion';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Education from './components/Education';  // Added the Education component

const sectionStyle = `
  group relative m-6 p-6 rounded-2xl
  border border-white/10
  backdrop-blur-md bg-white/5
  shadow-lg
  transition-transform duration-500 ease-in-out
  hover:shadow-blue-500/40 hover:scale-[1.03] hover:rotate-1
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Main() {
  return (
    <div className="flex bg-black min-h-screen flex-col">
      <Sidebar />
      <motion.div
        className="flex-1 ml-20 sm:ml-36 space-y-20 px-4 pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section id="home" className={sectionStyle} variants={sectionVariants}>
          <Home />
        </motion.section>
        <motion.section id="about" className={sectionStyle} variants={sectionVariants}>
          <About />
        </motion.section>
        <motion.section id="projects" className={sectionStyle} variants={sectionVariants}>
          <Projects />
        </motion.section>
        <motion.section id="services" className={sectionStyle} variants={sectionVariants}>
          <Services />
        </motion.section>
        {/* Education section now comes before Contact */}
        <motion.section id="education" className={sectionStyle} variants={sectionVariants}>
          <Education /> {/* Education component */}
        </motion.section>
        <motion.section id="contact" className={sectionStyle} variants={sectionVariants}>
          <Contact />
        </motion.section>
        {/* Add space below the last section */}
        <div className="py-8"></div> {/* Space below the last section */}
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">
          © 2025 Akalanka Rathnayaka. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
