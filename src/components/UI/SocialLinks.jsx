// src/components/UI/SocialLinks.jsx
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="deva:justify-center flex justify-start gap-2">
      <a
        href="https://t.me/+79185555932"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram size={50} className="cursor-pointer hover:text-blue-300" />
      </a>
      <a
        href="https://wa.me/79185555932"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={50} className="cursor-pointer hover:text-green-400" />
      </a>
    </div>
  );
}

export default SocialLinks;
