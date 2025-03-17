import React from "react";
import { SocialIcon } from 'react-social-icons';

function About() {
    return (
        <div className="flex flex-col justify-center items-center bg-black py-6 pt-20 px-3 w-full">
            {/* About Card Section with Slate Background and Border */}
            <div className="bg-black w-full max-w-2xl flex flex-col items-center justify-evenly sm:flex-col md:flex-col lg:flex-row p-6 rounded-lg shadow-lg border-2 border-slate-900">
            <img 
                src="https://avatars.githubusercontent.com/u/62651866?v=4" 
                className="w-48 h-52 border-4 border-slate-500 rounded-2xl object-cover mb-6 lg:mb-0"
                style={{
        borderImage: "linear-gradient(135deg, rgba(255, 0, 255, 0.6), rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.6))",
        borderImageSlice: 0,
        borderRadius:'1rem',
    }}
                alt="Profile"
            />

                <div className="p-4 lg:p-6 text-lg text-white text-center lg:text-left w-full lg:w-[60%]">
                    <p className="text-justify leading-relaxed">
                        Born in Mangalore, India. I love coding and video editing. I enjoy traveling, listening to music, and working with tools like 
                        Premiere Pro and After Effects. My coding skills include 
                        HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and AWS.
                        
                    </p>

                    {/* Skills Capsule Section inside the Card */}
                    
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6 p-6 mt-6">
                <SocialIcon url="https://x.com/prathbhandari" network="twitter" target="_blank" fgColor="white" bgColor="transparent" className="hover:scale-150  transition-transform duration-300 ease-in-out" />
                <SocialIcon url="https://www.instagram.com/prathamkrishnabhandari" network="instagram" target="_blank" fgColor="white" bgColor="transparent" className="hover:scale-150 transition-transform duration-300 ease-in-out" />
                <SocialIcon url="https://www.youtube.com/@prathambhandari" network="youtube" target="_blank" fgColor="white" bgColor="transparent" className="hover:scale-150 transition-transform duration-300 ease-in-out"/>
                <SocialIcon url="https://github.com/prathambhandari" network="github" target="_blank" fgColor="white" bgColor="transparent" className="hover:scale-150 transition-transform duration-300 ease-in-out"/>
            </div>
        </div>
    );
}

export default About;
