import React from "react";
import Window from "./window";

const width = "29vw";
const height = "70vh";

const About = ({ windowState, setwindowState, windowName }) => {
  return (
    <Window
      windowState={windowState}
      setwindowState={setwindowState}
      windowName={windowName}
      width={width}
      height={height}
    >
      <div className="p-4 text-white px-20 flex flex-col h-full items-center justify-around">
        <img
          className="h-50 w-fit rounded-full outline-4 mt-6"
          src="/profile.png"
          alt=""
        />
        <div className="flex flex-col items-center gap-1">
          <h3 className="mt-8 text-2xl text-cyan-300">Hi, I am</h3>
          <h1 className="text-3xl font-bold ">Pratham Bhandari</h1>
          <h2 className="text-cyan-300">FullStack Web Developer</h2>
        </div>
        <p className="text-center  ">
          Hey there! I'm a developer from Mangalore, India who loves bringing
          ideas to life through code. I mostly work with web development.
          Outside of coding, you'll often find me exploring new places,
          listening to music, or out on the field playing football. I'm all
          about building things that feel good to use and are fun to create.
        </p>
      </div>
    </Window>
  );
};

export default About;
