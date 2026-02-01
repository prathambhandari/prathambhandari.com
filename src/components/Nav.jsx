import React from "react";
import DateTime from "./DateTime";
import { RiWifiLine, RiVolumeUpLine } from "@remixicon/react";

const Nav = () => {
  return (
    <div className="flex bg-[#000000b0]  p-2 px-4 bg justify-between">
      <div className="left">
        <h1>Activites</h1>
      </div>
      <div className="center">
        <DateTime />
      </div>
      <div className="right flex gap-2">
        <div className="wifi">
          <RiWifiLine />
        </div>
        <div className="speaker">
          <RiVolumeUpLine />
        </div>
      </div>
    </div>
  );
};

export default Nav;
