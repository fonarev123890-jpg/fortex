import { servicesBlock } from "../../constants/servicesBlock";
import { servicesCardData } from "../../data/servicesData";
import ServicesCard from "./ServicesCard";

export default function ServicesInfo() {
  return (
    <section className="py-13 text-[15px]">
      <div className="flex flex-col items-center">
        <h2 className="mb-13 text-xl font-bold sm:text-2xl">
          {servicesBlock.title}
        </h2>
        <div className="grid grid-cols-1 gap-6 px-5 lg:grid-cols-2">
          {servicesCardData.map((card, index) => (
            <ServicesCard
              key={index}
              src={card.src}
              title={card.title}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
