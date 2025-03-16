import React, { useState } from "react";
import './animation.css';

const projects = [
    {
        img: "https://i.ibb.co/mbwzbDW/work2.png",
        title: "Wood Run",
        description: "Endless Runner mobile game created in 2019"
    },
    {
        img: "https://i.ibb.co/B3XKVPC/work5.jpg",
        title: "Q-Sales",
        description: "UI/UX Design created for E-commerce startup"
    },
    {
        img: "https://i.ibb.co/bFQ5mqK/work3.jpg",
        title: "Github Finder",
        description: "Site where you can Find github accounts via names"
    },
    // {
    //     img: "https://i.ibb.co/2Z87w4C/work4.png",
    //     title: "Project Four",
    //     description: "This is a brief description of Project Four."
    // },
    // {
    //     img: "https://i.ibb.co/xM8m2LG/work1.jpg",
    //     title: "Project Five",
    //     description: "This is a brief description of Project Five."
    // },
    // {
    //     img: "https://user-images.githubusercontent.com/62651866/221272922-d98ffc5d-ecbb-4e0c-b6f0-579f36adb73f.png",
    //     title: "Project Six",
    //     description: "This is a brief description of Project Six."
    // }
];

function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="flex flex-col justify-around h-auto items-center p-24 bg-black">
            <h1 className="text-4xl font-bold mb-10 text-white pb-10">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-slate-900  border-gray-700 border p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-80 h-auto"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.img} alt={project.title} className="object-cover h-48 w-full rounded-lg cursor-pointer" />
                        <h2 className="text-xl font-semibold text-white mt-4">{project.title}</h2>
                        <p className="text-gray-400 mt-2">{project.description}</p>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="bg-slate-900 p-10 rounded-lg relative w-4/5 max-w-3xl">
                        <button 
                            className="absolute top-2 right-2 text-white text-2xl" 
                            onClick={() => setSelectedProject(null)}
                        >
                            &times;
                        </button>
                        <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-auto rounded-lg" />
                        <h2 className="text-2xl font-semibold text-white mt-4 text-center">{selectedProject.title}</h2>
                        <p className="text-gray-400 mt-2 text-center">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;