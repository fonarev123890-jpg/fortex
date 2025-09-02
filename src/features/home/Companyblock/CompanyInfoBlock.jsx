import CompanyCard from "./CompanyCard";
import { companyDataCard } from "../../../data/homeData";
import { companyBlock } from "../../../constants/homeBlock";

export default function CompanyInfoBlock() {
  return (
    <section className="py-15">
      <div className="flex flex-col items-center gap-8">
        <h2 className="deva:text-2xl peta:text-[24px] mb-2 text-[18px] font-bold sm:text-3xl">
          {companyBlock.title}
        </h2>
        <div className="deva:grid-cols-3 deva:gap-x-40 deva:gap-y-15 peta:grid-cols-2 grid grid-cols-1 gap-x-25 gap-y-15">
          {companyDataCard.map((card, index) => (
            <CompanyCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
