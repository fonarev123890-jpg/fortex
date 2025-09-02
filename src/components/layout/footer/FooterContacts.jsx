import { footerTitles, contacts } from "@/constants/footer";
import Tell from "../../UI/Tell";
import SocialLinks from "../../UI/SocialLinks";

function FooterContacts() {
  return (
    <div className="deva:order-3 deva:text-center order-1 flex flex-col gap-3 text-start">
      <h2 className="text-[25px] font-bold whitespace-nowrap sm:text-[31px]">
        {footerTitles.contacts}
      </h2>
      <Tell clas="sm:text-2xl text-2xl deva:text-3xl whitespace-nowrap">
        {contacts.phone}
      </Tell>
      <SocialLinks />
      <p>{contacts.email}</p>
    </div>
  );
}

export default FooterContacts;
