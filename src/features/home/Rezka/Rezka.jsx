import secondhomebg from "@/assets/images/background/secondhomebg.jpg";
import { rezkaBlock } from "../../../constants/homeBlock";
function Rezka() {
  return (
    <div className="relative">
      <img
        className="peta:object-[25%_center] absolute inset-0 z-0 h-[450px] w-full object-cover object-[23%_center] md:object-[30%_center] xl:object-center"
        src={secondhomebg}
        alt="Фон: процесс резки металла на производстве"
      />

      <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
      <div className="relative z-20 h-[450px] gap-30 text-white">
        <h2 className="deva:text-[2.5vw] peta:text-[16px] peta:right-10 peta:left-10 absolute top-20 right-[60px] text-[14px] font-bold md:text-[2.5vw] xl:text-[2vw]">
          {rezkaBlock.title}
        </h2>
        <p className="left-10px deva:right-40 deva:text-[1.4vw] peta:text-[14px] absolute right-0 bottom-15 text-[12px] md:right-[30px] md:text-[2vw] xl:text-[1.2vw]">
          {rezkaBlock.text}
        </p>
      </div>
    </div>
  );
}

export default Rezka;
