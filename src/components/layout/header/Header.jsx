import { useState, useEffect } from "react";
import HeaderDesktopNav from "./HeaderDekstopNav";
import HeaderDesktopContacts from "./HeaderDekstopContacts";
import HeaderMobile from "./HeaderMobile";
import MobileMenu from "../../UI/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="deva:px-10 deva:text-[17px] sticky top-0 z-50 flex items-center justify-between bg-blue-400 px-5 py-4 text-[16px] text-white shadow-md xl:px-20 xl:text-xl">
      <HeaderDesktopNav />

      <HeaderDesktopContacts />

      <HeaderMobile
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleLogoClick={handleLogoClick}
      />

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
