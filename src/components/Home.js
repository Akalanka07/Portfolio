import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPython,
} from "react-icons/si";
import avatar from "../assets/3dimage.png";

const Home = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section
      name="home"
      className="relative w-full min-h-screen bg-gradient-to-r from-[#0f0f3f] via-[#050038] to-[#0f0f3f] animate-gradient-x text-white px-6 sm:px-12 md:px-20 py-20 flex flex-col md:flex-row justify-between items-center overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#000000" } },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
            opacity: { value: 0.3 },
          },
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Left Content */}
      <div className="flex flex-col gap-4 max-w-2xl z-10 animate-fade-in">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent"
        >
          {greeting}, how are you?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-2xl sm:text-3xl font-semibold leading-tight pt-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          I AM,
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 drop-shadow-lg"
        >
          Akalanka Rathnayaka
        </motion.h1>

        <p className="text-gray-300 text-lg mt-1">
          "Crafting interfaces & solving backend puzzles"
        </p>

        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            2000,
            "Frontend Enthusiast 🎨",
            2000,
            "Backend Engineer ⚙",
            2000,
          ]}
          speed={50}
          className="text-xl sm:text-2xl text-cyan-300 font-medium mt-2"
          repeat={Infinity}
          cursor={true}
        />

        <div className="mt-6 flex gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl">
          <a
            href="https://www.facebook.com/share/1CQe1d7nZC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              size={22}
              className="text-blue-500 hover:scale-125 transition-transform hover:shadow-[0_0_15px_#00f2ff]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/akalanka-rathnayaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              size={22}
              className="text-blue-300 hover:scale-125 transition-transform hover:shadow-[0_0_15px_#0ff]"
            />
          </a>
          <a href="https://wa.me/94757508808" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              size={22}
              className="text-green-400 hover:scale-125 transition-transform hover:shadow-[0_0_15px_#1eff00]"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              size={22}
              className="text-pink-400 hover:scale-125 transition-transform hover:shadow-[0_0_15px_#ff00ff]"
            />
          </a>
        </div>
      </div>

      {/* Right Avatar */}
      <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} className="z-10 mt-12 md:mt-0">
        <div className="relative w-[230px] sm:w-[280px] md:w-[340px] lg:w-[360px] animate-fade-in">
          <img
            src={avatar}
            alt="3D Avatar"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />

          {/* Floating Tech Icons */}
          {[
            { icon: <SiHtml5 />, className: "top-2 left-2 text-blue-400" },
            { icon: <SiCss3 />, className: "top-2 right-2 text-blue-500 delay-150" },
            { icon: <SiJavascript />, className: "bottom-2 left-10 text-yellow-400 delay-300" },
            { icon: <SiReact />, className: "top-[20%] right-0 text-cyan-400 delay-500" },
            { icon: <SiNodedotjs />, className: "bottom-[15%] right-10 text-green-500 delay-700" },
            { icon: <SiGit />, className: "top-[50%] left-2 text-pink-500 delay-700" },
            { icon: <SiGithub />, className: "bottom-0 right-0 text-white delay-300" },
            { icon: <SiPython />, className: "top-0 left-[40%] text-blue-300 delay-500" },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute animate-bounce ${item.className}`}
              style={{ fontSize: "36px" }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </Tilt>

      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Home;
