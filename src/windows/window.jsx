import React from "react";
import { Rnd } from "react-rnd";
import {
  RiSubtractLine,
  RiCheckboxBlankLine,
  RiCloseLine,
} from "@remixicon/react";

const Window = ({
  children,
  width = "55vw",
  height = "73vh",
  windowName,
  windowState,
  setwindowState,
}) => {
  // Responsive: calculate start position based on viewport
  const startX = Math.max(80, Math.min(200, window.innerWidth * 0.1));
  const startY = Math.max(50, Math.min(100, window.innerHeight * 0.08));

  return (
    <Rnd
      default={{ width: width, height: height, x: startX, y: startY }}
      bounds="parent"
      minWidth={280}
      minHeight={180}
      className="z-50 rndr"
    >
      <div className="window h-full w-full rounded-2xl bg-[#000000b0] flex flex-col">
        <div className="nav flex justify-between rounded-t-2xl items-center p-4 border-b border-gray-900 bg-gray-950">
          <h1>{windowName}</h1>
          <div className="close-section flex gap-4">
            <div className="minus bg-gray-700 p-1 rounded-3xl cursor-pointer hover:bg-yellow-600">
              <RiSubtractLine size={18} />
            </div>
            <div className="maximize flex items-center bg-gray-700 p-1 rounded-3xl cursor-pointer hover:bg-green-600">
              <RiCheckboxBlankLine size={18} />
            </div>
            <div
              onClick={() => {
                setwindowState((state) => ({ ...state, [windowName]: false }));
              }}
              className="close bg-gray-700 p-1 rounded-3xl cursor-pointer hover:bg-red-600"
            >
              <RiCloseLine size={18} />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
