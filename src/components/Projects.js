import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import elephantPulseMockup from '../assets/elephantpulse.jpg';
import medicAidMockup from '../assets/medicaid.jpg';
import styloraMockup from '../assets/stylora.jpg';
import greenStayMockup from '../assets/greenstay.jpg';
import greenPassMockup from '../assets/greenpass.jpg';
import motivoMockup from '../assets/motivo.jpg';

const projectData = [
  {
    title: "Elephant Pulse",
    shortDesc: "Smart Forecasting of Elephant-Train Accidents",
    longDesc:
"Elephant Pulse is an innovative rail safety solution designed to prevent elephant-train collisions in Sri Lanka’s railway system. The project combines sensor-based embedded systems, mobile applications, and predictive analytics to tackle a long-standing issue that affects both wildlife conservation and railway operations.",
    tech: ["Apache Spark", "Snowflake", "Scikit-learn", "XGBoost", "Python"],
    github: "#",
    mockup: elephantPulseMockup,
  },
  {
    title: "Motivo - Garage Automation App",
    shortDesc: "Mobile app for garage management.",
    longDesc:
      "Developed using Flutter & Firebase, Motivo supports real-time service tracking, vehicle history, role-based dashboards. Designed for small/medium garages in Sri Lanka with customer/operator modes.",
    tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    github: "#",
    mockup: motivoMockup,
  },
  {
    title: "Stylora - eCommerce Platform",
    shortDesc: "Clothing website with full MERN stack features.",
    longDesc:
      "Created a responsive clothing store with user login, shopping cart, product filtering, and secure checkout. Admin dashboard for inventory control. Final-year group project using modern web stack.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "CSS"],
    github: "#",
    mockup: styloraMockup,
  },
  {
    title: "MedicAid - Medicine Finder App",
    shortDesc: "Bridging healthcare gaps in Sri Lanka.",
    longDesc:
      "Mobile app that helps users find nearby pharmacies and check medicine availability in real-time. Used Firebase for backend, integrated APIs for geo-location, and provided a clean UX for quick access.",
    tech: ["Flutter", "Firebase", "Google Maps", "API Integration"],
    github: "#",
    mockup: medicAidMockup,
  },
  {
    title: "Purple Palace - 3D Furniture E-Commerce Platform",
    shortDesc: "Interactive 3D furniture shopping experience.",
    longDesc:
      "An e-commerce platform that lets users customize and visualize furniture in a virtual 3D room before buying. Focused on improving user decision-making with interactive visual tools.",
    tech: ["React.js", "Three.js", "JavaScript", "Figma"],
    github: "#",
    video: "/videos/purplepalace.mp4",
  },
  {
    title: "Green Library - Library Management System",
    shortDesc: "Book reservation and alert automation system.",
    longDesc:
      "A system designed for university libraries to automate book reservations, overdue alerts, and notifications. Simplifies the management process for both staff and students.",
    tech: ["C#", "MySQL", "Figma"],
    github: "#",
    mockup: "/mockups/greenlibrary.jpg",
  },
  {
    title: "Green Events - University Event Ticketing",
    shortDesc: "Event listing and ticket management platform.",
    longDesc:
      "A web application built to manage university events and real-time ticket status. Helps streamline event promotion and ticket distribution.",
    tech: ["HTML", "PHP", "Firebase", "Figma"],
    github: "#",
    mockup: "/mockups/greenevents.jpg",
  },
  {
    title: "Green Pass - Event Ticketing Mobile App",
    shortDesc: "Mobile app for digital event ticketing.",
    longDesc:
      "A real-time mobile solution for browsing events, purchasing tickets, and validating access with QR codes. Simplifies the entry process for students and organizers.",
    tech: ["Flutter", "Firebase", "Figma"],
    github: "https://github.com/Akalanka07/GreenPass",
    mockup: greenPassMockup,
  },
  {
    title: "Green Stay - Student Accommodation Portal",
    shortDesc: "Web app for managing student housing.",
    longDesc:
      "A portal for students to search, filter, and book accommodations efficiently. Built to reduce communication gaps and streamline listings.",
    tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    github: "#",
    mockup: greenStayMockup,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-black via-[#050022] to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => toggleProject(index)}
              className="relative group p-4 bg-gray-900 border border-gray-700 rounded-xl cursor-pointer transition-shadow hover:shadow-xl"
              whileHover={{ scale: 1.015 }}
              layout
            >
              <motion.h3 layout className="text-lg font-semibold text-white mb-1">
                {project.title}
              </motion.h3>

              <motion.p layout className="text-gray-300 text-sm mb-3">{project.shortDesc}</motion.p>

              <div className="overflow-hidden rounded-lg mb-3 border border-gray-700">
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    className="w-full object-cover max-h-44 rounded-lg"
                  />
                ) : (
                  <motion.img
                    src={project.mockup}
                    alt={`${project.title} mockup`}
                    className="w-full object-cover max-h-44 rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                    layout
                  />
                )}
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 text-sm text-gray-300"
                  >
                    <p>{project.longDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm rounded hover:bg-blue-800 transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
