import React from "react";
import aboutImage from "../assets/image2.jpg";
import cloudFrame from "../assets/bluecloudframe.png"; // make sure to import your uploaded frame here

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-[#050022] to-black text-white"
>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 bg-black/80 rounded-xl shadow-xl p-6 border border-blue-900">
        
        {/* Left - Image with Frame */}
        <div className="relative w-80 h-80 md:w-[330px] md:h-[330px] flex items-center justify-center">
          {/* Blue Frame Image */}
          <img
            src={cloudFrame}
            alt="Blue Frame"
            className="absolute w-full h-full object-contain pointer-events-none select-none z-0"
          />

          {/* Profile Image */}
          <img
            src={aboutImage}
            alt="About"
            className="relative w-[75%] h-[75%] object-cover rounded-lg shadow-lg z-10"
            style={{
              boxShadow: "0 0 25px rgba(0, 183, 255, 0.4)",
              border: "2px solid rgba(0, 136, 255, 0.5)",
            }}
          />
        </div>

        {/* Right - Info */}
        <div className="flex-1 text-white mt-4 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left text-blue-600">
            ABOUT
          </h2>
          <h3 className="text-xl font-semibold text-white mb-2">
            Software Developer & Tech Enthusiast
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            I am a Computer Science graduate passionate about building scalable software solutions and intuitive digital experiences. 
            With hands-on experience in web, mobile, and backend development, I enjoy turning complex problems into elegant solutions.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p><strong>Birthday:</strong> 13 July 2001</p>
            <p><strong>Degree:</strong> BSc (Hons) in Computer Science</p>
            <p><strong>Phone:</strong> 0757508808</p>
            <p><strong>Email:</strong> akalankarathnayaka07@gmail.com</p>
            <p><strong>City:</strong> Kegalle, Sri Lanka</p>
          </div>

          {/* CV Button */}
          <div className="mt-6">
            <a
              href="/Akalanka_Rathnayaka_CV.pdf"
              download
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>

          {/* Bottom Paragraph */}
          <p className="text-sm mt-6 text-gray-300">
            I'm highly motivated to apply my knowledge in real-world projects and continuously learn new technologies. 
            Whether it’s designing system architecture, implementing RESTful APIs, or crafting seamless UI/UX, 
            I thrive in team environments and love building things that matter.
          </p>
        </div>
      </div>
    </section>
  );
}
