import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterLogo from "./FooterLogo";
import FooterContacts from "./FooterContacts";

function Footer() {
  return (
    <footer className="deva:items-start deva:p-[5px] deva:text-[18px] flex flex-col items-start justify-between bg-slate-700 p-5 text-white sm:flex-row sm:items-center">
      <div className="deva:h-60 deva:flex-row deva:items-center deva:px-20 deva:py-5 deva:text-[15px] relative flex h-auto w-full flex-col items-start justify-between gap-8 text-[15px] sm:gap-6 sm:px-10 xl:px-50 xl:text-xl 2xl:px-70">
        <FooterCompanyInfo />
        <FooterLogo />
        <FooterContacts />
      </div>
    </footer>
  );
}

export default Footer;
