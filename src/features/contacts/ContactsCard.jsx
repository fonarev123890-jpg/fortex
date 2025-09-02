import Tell from "../../components/UI/Tell";

export default function ContactsCard({ title, src, number, name, alt }) {
  return (
    <div className="relative flex h-50 w-[95vw] overflow-hidden rounded-2xl border-4 border-blue-300/30 bg-gray-300/30 text-[19px] font-medium shadow-xl sm:h-55 sm:max-w-[800px] xl:h-70 xl:max-w-[650px]">
      <img
        src={src}
        className="peta:flex hidden h-50 max-w-[170px] object-cover sm:h-60 sm:max-w-[210px] xl:h-70 xl:w-60"
        alt={alt}
      />
      <div className="flex w-full flex-col items-center">
        <h3 className="peta:text-[17px] mt-5 text-[20px] font-semibold sm:text-[20px] xl:text-[22px]">
          {name}
        </h3>{" "}
        <p className="peta:text-[14px] text-[17px] text-gray-500 sm:text-[16px] xl:text-xl">
          {title}
        </p>
        <Tell clas={"absolute bottom-5 peta:text-3xl text-2xl"}>{number}</Tell>
      </div>
    </div>
  );
}
