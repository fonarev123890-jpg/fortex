import logo from "@/assets/images/logo.png";

function FooterLogo() {
  return (
    <img
      src={logo}
      alt="logo"
      className="deva:order-2 deva:hidden order-4 flex h-[150px] w-[240px] sm:order-3 xl:h-[220px] xl:w-[350px]"
    />
  );
}

export default FooterLogo;
