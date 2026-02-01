import React from "react";
import Window from "./window";

const width = "55vw";
const height = "73vh";

const Resume = ({ windowState, setwindowState, windowName }) => {
  return (
    <Window
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      width={width}
      height={height}
    >
      <div className="h-full">
        <embed
          className="w-full h-full block"
          src="/resume.pdf"
          type="application/pdf"
        />
      </div>
    </Window>
  );
};

export default Resume;
