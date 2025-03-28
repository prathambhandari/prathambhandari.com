import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Alternative icon that works

const service = {
  name: "Onariam",
  description: "I create high-performance websites using React, Next.js, and Tailwind CSS. Let's build something amazing together!",
  image: "/onariam.png", // Ensure this is in /public folder if using Vercel
  demoLink: "https://onariam.com",
};

function Ser() {
  return (
    <div className="flex flex-col items-center bg-black p-10 w-full">
      <h1 className="text-4xl font-semibold text-white mb-6 pb-10">Services</h1>

      <div className="w-full max-w-4xl bg-black border  rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        {/* Image container with padding and border */}
        <div className="p-4  rounded-lg">
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-[500px] object-cover transition-transform transform  rounded-lg"
          />
        </div>
        
        {/* Service Details */}
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{service.name}</h2>
          <p className="text-gray-400 mb-6">{service.description}</p>
          
          {/* Live Demo Button */}
          <a 
            href={service.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-slate-700 text-black hover:text-white font-semibold px-8 py-3 rounded-lg "
          >
            Live Demo 
            <FaExternalLinkAlt className="ml-2 text-lg" /> {/* Alternative icon */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ser;
