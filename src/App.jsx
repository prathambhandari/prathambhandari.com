import React, { useState } from "react";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Project from "./windows/Project";
import Resume from "./windows/Resume";
import About from "./windows/About";
import Skills from "./windows/Skills";

const App = () => {
  const [windowState, setwindowState] = useState({
    Resume: false,
    Projects: false,
    Skills: false,
    About: false,
  });
  return (
    <div className="min-h-screen  bg-black flex justify-center">
      <div
        className="w-full max-w-512"
        style={{
          backgroundImage: "url('/walpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <h1 className="absolute font-bold  text-green-400 top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-6/2 text-6xl whitespace-nowrap">
          Pratham Bhandari
        </h1> */}
        <Nav />
        <Dock windowState={windowState} setwindowState={setwindowState} />
        {windowState.Resume && (
          <Resume
            windowName="Resume"
            windowState={windowState}
            setwindowState={setwindowState}
          />
        )}
        {windowState.Projects && (
          <Project
            windowName="Projects"
            windowState={windowState}
            setwindowState={setwindowState}
          />
        )}
        {windowState.Skills && (
          <Skills
            windowName="Skills"
            windowState={windowState}
            setwindowState={setwindowState}
          />
        )}
        {windowState.About && (
          <About
            windowName="About"
            windowState={windowState}
            setwindowState={setwindowState}
          />
        )}
      </div>
    </div>
  );
};

export default App;
