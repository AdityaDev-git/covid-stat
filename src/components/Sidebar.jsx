import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaVirusCovid } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const links = "flex gap-x-4 items-center hover:text-neo-orange cursor-pointer";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? "w-56" : "w-20"} duration-300 h-screen border-4 border-light-purple relative`}>
      <div className="absolute cursor-pointer right-1 top-16 bg-light-purple border-2 border-neo-orange rounded-full w-7">
        {open ? (
          <MdKeyboardDoubleArrowLeft className="text-neo-orange text-2xl" onClick={() => setOpen(!open)} />
        ) : (
          <MdKeyboardDoubleArrowRight className="text-neo-orange text-2xl" onClick={() => setOpen(!open)} />
        )}
      </div>
          <FaVirusCovid className="text-3xl mb-5 m-5 text-neo-orange"/>
          <hr className="border-2 border-light-purple mb-4"/>
          <div className={`${open ? "p-7" : "p-6"}`}>
            <div className="space-y-4">
          <div className="flex gap-x-2 items-center"> <MdDashboard className="text-neo-orange"/><p className={`${open ? "block" :"hidden"} text-neo-orange`}>Dashboard</p></div>
          <div className={links}><FaRegNewspaper/><p className={`${open ? "block" :"hidden"}`}>News</p></div>
          <div className={links}><FaBell/><p className={`${open ? "block" :"hidden"}`}>Alerts</p></div>
          <div className={links}><FaUser/> <p className={`${open ? "block" :"hidden"}`}>Profile</p></div>
          <div className={links}><IoMdSettings/><p className={`${open ? "block" :"hidden"}`}>Setting</p></div>
            </div>
            <BiLogOut className="absolute bottom-10 text-xl cursor-pointer hover:text-neo-orange"/>
          </div>
    </div>
  );
};

export default Sidebar;
