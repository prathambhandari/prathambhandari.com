import React, { useState } from "react";
import './animation.css';

// Array of project objects with their details (images, titles, descriptions, and skills)
const projects = [
    {
        img: "https://i.ibb.co/mbwzbDW/work2.png",
        title: "Wood Run",
        description: "Endless Runner mobile game created in 2019",
        skill1: "Unity",
        skill2: "C#",
        skill3: "Unity Assets"
    },
    {
        img: "https://i.ibb.co/B3XKVPC/work5.jpg",
        title: "Q-Sales",
        description: "UI/UX Design created for E-commerce startup",
        skill1: "Adobe XD",
        skill2: "UI",
        skill3: "UX"
    },
    {
        img: "https://i.ibb.co/bFQ5mqK/work3.jpg",
        title: "Github Finder",
        description: "Site where you can Find github accounts via names",
        skill1: "JavaScript",
        skill2: "React",
        skill3: "Bootstrap"
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

// The Project component
function Project() {
    const [selectedProject, setSelectedProject] = useState(null); // State to keep track of the selected project for the modal

    return (
        <div className="flex flex-col justify-center h-auto items-center p-6  bg-black"> {/* Adjusted padding for smaller screens */}
            {/* Section heading */}
            <h1 className="text-4xl font-bold mb-10 text-white pb-10 text-center">Projects</h1>

            {/* Grid layout for displaying project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10 gap-10 justify-around sm:w-full lg:w-auto">
                {/* Iterate over the projects array and display each project card */}
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-black border-gray-700 border p-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-80 h-auto mx-auto" // Added mx-auto for centering
                        onClick={() => setSelectedProject(project)} // Set the selected project when a card is clicked
                    >
                        {/* Project image */}
                        <img src={project.img} alt={project.title} className="object-cover h-48 w-full rounded-lg cursor-pointer" />
                        
                        {/* Project title */}
                        <h2 className="text-xl font-semibold text-white mt-4">{project.title}</h2>
                        
                        {/* Project description */}
                        <p className="text-gray-400 mt-2">{project.description}</p>

                        {/* Project skills (tags) */}
                        <div className="flex flex-wrap gap-2 mt-4 w-full ">
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{project.skill1}</div>
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{project.skill2}</div>
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{project.skill3}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying the selected project details */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    {/* Modal content */}
                    <div className="bg-black border-gray-700 border p-10 rounded-lg relative w-4/5 max-w-3xl">
                        {/* Close button */}
                        <button 
                            className="absolute top-1 right-2 text-white text-3xl px-1" 
                            onClick={() => setSelectedProject(null)} // Close modal by setting selectedProject to null
                        >
                            &times;
                        </button>

                        {/* Display image of the selected project */}
                        <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-auto rounded-lg pb-5" />
                        
                        {/* Display title of the selected project */}
                        <h2 className="text-2xl font-semibold text-white mt-4 text-center pb-3">{selectedProject.title}</h2>
                        
                        {/* Display description of the selected project */}
                        <p className="text-gray-400 mt-2 text-center pb-5">{selectedProject.description}</p>

                        {/* Display skills associated with the selected project */}
                        <div className="flex flex-wrap gap-2 mt-4 w-full justify-center">
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{selectedProject.skill1}</div>
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{selectedProject.skill2}</div>
                            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-xs font-medium flex">{selectedProject.skill3}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
