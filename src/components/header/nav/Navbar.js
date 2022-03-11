import React from "react";
import { ReactComponent as SettingsSVG } from "./settings.svg";
import { ReactComponent as FriendsSVG } from "./friends.svg";
import { ReactComponent as CloseLeftSVG } from "./close-left.svg";
import { ReactComponent as CloseRightSVG } from "./close-right.svg";

function NavBar() {

  return (
    <div className="w-screen md:h-14 lg:h-20 bg-gradient-to-t from-neutral-800  to-neutral-700 px-4 py-3 flex justify-between  shadow-neutral-500">
      <div className=" flex"> 
        <SettingsSVG className="text-white" />
      </div>
      <a href="/">
        <p className="flex text-center text-3xl lg:text-5xl uppercase font-medium text-neutral-100">
          NEXUS
        </p>
      </a>
      <div className=" flex">
         <FriendsSVG className="text-white" />
        </div>
    </div>
  );
}

export default NavBar;
