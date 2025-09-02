import { linksText } from "../../constants/uiText";
import NavMenuLink from "./NavMenuLink";

function NavLinks({ onClick }) {
  return (
    <>
      <li>
        <NavMenuLink to="/" onClick={onClick}>
          {linksText.home}
        </NavMenuLink>
      </li>
      <li>
        <NavMenuLink to="/services" onClick={onClick}>
          {linksText.services}
        </NavMenuLink>
      </li>
      <li>
        <NavMenuLink to="/about" onClick={onClick}>
          {linksText.about}
        </NavMenuLink>
      </li>
      <li>
        <NavMenuLink to="/contacts" onClick={onClick}>
          {linksText.contacts}
        </NavMenuLink>
      </li>
    </>
  );
}

export default NavLinks;
