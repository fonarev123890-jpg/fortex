import { NavLink } from "react-router-dom";

function NavMenuLink({ to, children, className = "", ...props }) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${className} ${isActive ? "border-b-1 text-gray-200" : "hover:text-gray-200"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavMenuLink;
