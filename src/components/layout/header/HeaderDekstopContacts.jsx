import { headerText } from "@/constants/header";
import Tell from "../../UI/Tell";
import useModal from "../../../features/modal/useModal";

function HeaderDesktopContacts() {
  const { openModal } = useModal();

  return (
    <div className="deva:flex hidden gap-5 min-[1080px]:gap-15">
      <Tell>{headerText.phone}</Tell>
      <button
        className="cursor-pointer hover:text-gray-300"
        onClick={openModal}
      >
        {headerText.title}
      </button>
    </div>
  );
}

export default HeaderDesktopContacts;
