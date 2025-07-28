import React from 'react';
import { FaMobileAlt, FaDatabase, FaCode, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaMobileAlt size={32} className="text-blue-600" />,
    title: "Mobile App Development",
    desc: "Building cross-platform mobile apps with Flutter for seamless performance and rich UI.",
  },
  {
    icon: <FaDatabase size={32} className="text-blue-600" />,
    title: "Database Management",
    desc: "Designing and managing scalable cloud-based databases with Firebase and MongoDB.",
  },
  {
    icon: <FaCode size={32} className="text-blue-600" />,
    title: "Full Stack Web Apps",
    desc: "Creating modern, responsive websites using MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    icon: <FaCloud size={32} className="text-blue-600" />,
    title: "Cloud Integration",
    desc: "Deploying and integrating apps using cloud services like Firebase and Snowflake.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-[#050022] to-black text-white"
>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/60 backdrop-blur-md border border-violet-400/20 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-black">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
