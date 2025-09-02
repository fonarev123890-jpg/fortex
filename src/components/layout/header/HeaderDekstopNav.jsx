import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import NavLinks from "../../UI/NavLinks";

function HeaderDesktopNav() {
  return (
    <nav className="deva:flex hidden items-center gap-10 font-bold">
      <Link to={"/"}>
        <img className="w-40" src={logo} alt="logo" />
      </Link>
      <ul className="flex gap-6">
        <NavLinks />
      </ul>
    </nav>
  );
}

export default HeaderDesktopNav;
