import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black via-[#050022] to-black text-white">
      <div className="text-center mb-10">
        {/* Side Blue Luminous Line */}
        <div className="flex justify-center items-center space-x-4">
          <div className="w-1 h-full bg-blue-500 mr-6"></div> {/* Side Line */}
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Education</span>
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* BSc Computer Science */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-4">
            {/* Blue Dot */}
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h3 className="text-lg font-bold text-blue-400">
              🎓 BSc (Hons) Computer Science
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            <strong>University of Plymouth / NSBM Green University</strong><br />
            2022 – 2025
          </p>
          <p className="text-gray-400 mt-2">
            Pursuing Computer Science, focusing on mobile application development, frontend technologies, and full-stack development, and have achieved Second Class (Upper Division).
          </p>
        </div>

        {/* G.C.E A/L */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-4">
            {/* Blue Dot */}
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h3 className="text-lg font-bold text-blue-400">
              📖 G.C.E A/L - Physical Science Stream
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            <strong>Sri Lankan National Curriculum</strong><br />
            2020
          </p>
          <p className="text-gray-400 mt-2">
            Passed all subjects (Studied Physics, Combined Maths, and Chemistry under the physical science stream)
          </p>
        </div>

        {/* G.C.E O/L */}
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-4">
            {/* Blue Dot */}
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <h3 className="text-lg font-bold text-blue-400">
              📖 G.C.E O/L - English Medium
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            <strong>Sri Lankan National Curriculum</strong><br />
            2017
          </p>
          <p className="text-gray-400 mt-2">
            Passed all subjects in English medium with strong results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
