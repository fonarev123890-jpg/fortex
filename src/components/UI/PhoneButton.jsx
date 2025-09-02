import { FaPhoneAlt } from "react-icons/fa";
import useModal from "../../features/modal/useModal";

export default function PhoneButton() {
  const { isOpen } = useModal();
  if (isOpen) {
    return null;
  }
  return (
    <a
      href="tel:79185555932"
      aria-label="Позвонить нам"
      className="fixed right-8 bottom-20 z-100 hidden rounded-full bg-blue-300/70 p-4 text-white shadow-lg hover:bg-teal-700 min-[500px]:flex"
    >
      <FaPhoneAlt size={50} />
    </a>
  );
}
