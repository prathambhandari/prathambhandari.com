import React from "react";
import {
  RiFilePdf2Fill,
  RiBookFill,
  RiFileUserFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeFill,
  RiTerminalBoxLine,
} from "@remixicon/react";

const Dock = ({ windowState, setwindowState }) => {
  return (
    <div className="bg-[#000000b0]   p-5  px-4 flex flex-col w-fit h-screen gap-3 transition-all duration-75 ease">
      {/* <button
        onClick={() => {
          setwindowState((state) => ({ ...state, Resume: true }));
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-150 active:scale-125 focus:outline-none"
        aria-label="Resume"
      >
        <RiFilePdf2Fill className="text-red-600" size={50} />
        <h1>Resume</h1>
      </button> */}
      <button
        onClick={() => {
          setwindowState((state) => ({ ...state, Projects: true }));
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="Projects"
      >
        <RiBookFill className="text-amber-600 rounded-xl" size={50} />
        <h1>Projects</h1>
      </button>
      <button
        onClick={() => {
          setwindowState((state) => ({ ...state, Skills: true }));
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="Skills"
      >
        <RiTerminalBoxLine className="text-amber-50 rounded-xl" size={50} />
        <h1>Skills</h1>
      </button>

      <button
        onClick={() => {
          setwindowState((state) => ({ ...state, About: true }));
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiFileUserFill className="text-green-600 rounded-xl" size={50} />
        <h1>About Me</h1>
      </button>
      <button
        onClick={() => {
          window.open("https://github.com/prathambhandari", "_blank");
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiGithubFill
          className="text-gray-800 bg-amber-50 rounded-xl"
          size={50}
        />
        <h1>Github</h1>
      </button>
      <button
        onClick={() => {
          window.open("https://www.linkedin.com/in/prathambhandari/", "_blank");
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiLinkedinBoxFill
          className="text-blue-800 bg-white  rounded-xl"
          size={50}
        />
        <h1>Linkedin</h1>
      </button>
      <button
        onClick={() => {
          window.open("https://x.com/zewstaz", "_blank");
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiTwitterXLine className="text-white-800   rounded-xl" size={50} />
        <h1>X</h1>
      </button>
      <button
        onClick={() => {
          window.open("https://www.instagram.com/bhandariprath/", "_blank");
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiInstagramLine className="text-pink-800   rounded-xl" size={50} />
        <h1>Instagram</h1>
      </button>
      <button
        onClick={() => {
          window.open("https://www.youtube.com/@prathambhandari", "_blank");
        }}
        className="mb-4 flex flex-col justify-center items-center text-center transform transition-transform duration-200 ease-in-out hover:scale-125 active:scale-110 focus:outline-none"
        aria-label="About Me"
      >
        <RiYoutubeFill className="text-red-800   rounded-xl" size={50} />
        <h1>Youtube</h1>
      </button>
    </div>
  );
};

export default Dock;
