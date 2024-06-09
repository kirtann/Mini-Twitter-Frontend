import { NavLink } from "react-router-dom";

const NavbarLinks = ({ icon, display, link = "/" }) => {
  return (
    <NavLink
      className={
        "text-white font-medium text-2xl flex justify-start items-center hover:bg-[#202327] rounded-full w-max px-2 h-[10%]"
      }
      to={link}
    >
      <span>{icon && icon}</span>
      {display && <span className="ms-4">{display}</span>}
    </NavLink>
  );
};

export default NavbarLinks;
