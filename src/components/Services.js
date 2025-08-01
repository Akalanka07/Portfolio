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
    <section id="services" className="py-20 bg-gradient-to-b from-black via-[#050022] to-black text-white">
      <div className="text-center mb-10">
        {/* Side Blue Luminous Line */}
        <div className="flex justify-center items-center space-x-4">
          <div className="w-1 h-full bg-blue-500 mr-6"></div> {/* Side Line */}
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Services</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center transition-all hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
