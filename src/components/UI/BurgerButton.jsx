import { FaBars, FaTimes } from "react-icons/fa";

function BurgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative h-8 w-8 cursor-pointer"
      aria-label="Меню"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <FaBars />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "scale-100 rotate-0 opacity-100"
            : "scale-75 -rotate-90 opacity-0"
        }`}
      >
        <FaTimes />
      </span>
    </button>
  );
}

export default BurgerButton;
