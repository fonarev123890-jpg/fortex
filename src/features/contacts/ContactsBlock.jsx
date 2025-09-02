import { contactsBlock } from "../../constants/contactsBlock";
import { cardContactData } from "../../data/contactsData";
import ContactsCard from "./ContactsCard";
import { FaQuoteLeft } from "react-icons/fa";

export default function ContactsInfo() {
  return (
    <section className="py-13 text-[15px]">
      <div className="flex flex-col items-center gap-10 px-10 xl:flex-row xl:justify-center">
        {cardContactData.map((card, index) => (
          <ContactsCard
            key={index}
            src={card.src}
            title={card.title}
            number={card.tell}
            name={card.name}
            alt={card.alt}
          />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-xl font-bold sm:text-2xl">
          {contactsBlock.title}
        </h2>
        <div className="flex flex-col items-center gap-8 p-5 xl:flex-row xl:justify-center">
          {cardContactData.map((q, index) => (
            <div
              key={index}
              className="peta:max-w-[700px] relative flex h-[250px] w-[95vw] flex-col justify-between rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 p-8 shadow-md xl:max-w-[750px]"
            >
              <FaQuoteLeft className="mb-4 text-2xl text-blue-500" />
              <p className="mb-6 text-base italic">“{q.description}”</p>
              <div className="mt-auto border-t pt-4">
                <p className="font-semibold">{q.name}</p>
                <p className="text-sm text-gray-500">{q.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
