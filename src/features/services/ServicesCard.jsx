import ModalButton from "../../components/UI/ModalButton";
import { servicesBlock } from "../../constants/servicesBlock";

export default function ServicesCard({ title, src, alt }) {
  return (
    <div className="peta:h-[170px] peta:max-w-[600px] relative flex h-[130px] max-w-[450px] overflow-hidden rounded-2xl border-2 border-blue-300/30 bg-gray-300/30 text-[14px] font-medium shadow-xl sm:h-50 sm:max-w-[700px] sm:text-[17px] lg:max-w-[600px] 2xl:text-[19px]">
      <img
        src={src}
        className="peta:w-45 peta:h-[170px] h-37 w-35 object-cover sm:h-50 sm:w-60"
        alt={alt}
      />
      <div className="flex w-full flex-col items-center justify-between pb-3 text-center">
        <p className="peta:mt-4 mt-2 p-1 sm:mt-8">{title}</p>
        <ModalButton>{servicesBlock.btn}</ModalButton>
      </div>
    </div>
  );
}
