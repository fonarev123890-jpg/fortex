import { FaPhoneAlt } from "react-icons/fa";
import { headerText } from "@/constants/header";
import BurgerButton from "../../UI/BurgerButton";
import NavMenuLink from "../../UI/NavMenuLink";
import useModal from "../../../features/modal/useModal";

function HeaderMobile({ isMenuOpen, setIsMenuOpen, handleLogoClick }) {
  const { openModal } = useModal();

  return (
    <div className="deva:hidden relative flex w-full items-center text-[24px]">
      <BurgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <NavMenuLink
        onClick={handleLogoClick}
        to={"/"}
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        {headerText.logo}
      </NavMenuLink>

      <button
        onClick={openModal}
        className="ml-auto cursor-pointer hover:text-gray-300"
      >
        <FaPhoneAlt />
      </button>
    </div>
  );
}

export default HeaderMobile;
