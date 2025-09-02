import { footerTitles, companyInfo } from "@/constants/footer";

function FooterCompanyInfo() {
  return (
    <div className="deva:order-1 order-2 flex flex-col gap-5">
      <h2 className="text-[25px] font-bold sm:text-[31px]">
        {footerTitles.company}
      </h2>
      <p>{companyInfo.name}</p>
      <p>{companyInfo.inn}</p>
      <p>{companyInfo.founded}</p>
    </div>
  );
}

export default FooterCompanyInfo;
