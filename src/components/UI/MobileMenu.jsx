import Tell from "./Tell";
import ModalButton from "./ModalButton";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import NavLinks from "./NavLinks";
import { mobileText } from "../../constants/uiText";

function MobileMenu({ isOpen, onClose }) {
  useLockBodyScroll(isOpen);
  return (
    <>
      <aside
        className={`deva:hidden fixed top-16 left-0 z-50 h-full w-screen transform bg-blue-500 text-white shadow-lg transition-transform duration-75 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 p-6">
          <ul className="flex flex-col gap-4 text-lg font-bold">
            <NavLinks onClick={onClose} />
            <li>
              <Tell>{mobileText.numb}</Tell>
            </li>
          </ul>
          <ModalButton variant="secondary">
            {mobileText.description}
          </ModalButton>
        </nav>
      </aside>
    </>
  );
}

export default MobileMenu;
