import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiCircleMore, CiSearch } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { RiSlashCommands2 } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import NavbarLinks from "./NavbarLinks";

const SideNavbar = () => {
  return (
    <nav className="h-full w-full flex flex-col justify-evenly items-start ">
      <NavbarLinks icon={<FaXTwitter />} />
      <NavbarLinks icon={<GoHome />} display={"Home"} />
      <NavbarLinks icon={<CiSearch />} display={"Explore"} link={"/explore"} />
      <NavbarLinks
        icon={<IoIosNotificationsOutline />}
        display={"Notifications"}
        link={"/notifications"}
      />
      <NavbarLinks icon={<AiOutlineMail />} display={"Messages"} />
      <NavbarLinks icon={<RiSlashCommands2 />} display={"Grok"} />
      <NavbarLinks icon={<TbUsers />} display={"Communities"} />
      <NavbarLinks icon={<FaXTwitter />} display={"Premium"} />
      <NavbarLinks icon={<LuUser2 />} display={"Profile"} />
      <NavbarLinks icon={<CiCircleMore />} display={"More"} />
      <div className=" h-[13%] w-[120%] -ms-[10%]">
        <button
          style={{ backgroundColor: "rgb(29,155,240)" }}
          className="text-white mt-2 font-bold px-5 py-3 w-full rounded-full hover:bg-[#0f4e78]"
        >
          Post
        </button>
      </div>
    </nav>
  );
};

export default SideNavbar;
