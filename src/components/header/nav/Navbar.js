import React from "react";
import { ReactComponent as SettingsSVG } from "./settings.svg";
import { ReactComponent as FriendsSVG } from "./friends.svg";
// import {ReactComponent as MenuSVG} from './menu.svg'
import { ReactComponent as CloseLeftSVG } from "./close-left.svg";
import { ReactComponent as CloseRightSVG } from "./close-right.svg";
import Icon from "../../icons";

function NavBar() {

  return (
    <div className="w-screen bg-neutral-800 flex justify-between items-center px-6  shadow-neutral-500">
      <div className=" flex">
        <SettingsSVG className="text-neutral-100" />
      </div>
      <a href="/">
        <div className="flex my-2 text-center text-3xl lg:text-5xl uppercase font-medium text-neutral-100">
          <div className='grid text-center'>

            <div className='text-3xl md:text-5xl lg:text-2xl uppercase flex justify-center items-center text-neutral-100 font-normal'>
              Nexus
            </div>

          </div>
        </div>
      </a>
      <div className=" flex">
        {/* <MenuSVG className="text-neutral-100" /> */}
      </div>
    </div>
  );
}

export default NavBar;
