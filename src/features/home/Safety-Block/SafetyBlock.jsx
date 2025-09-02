import SafetyCard from "./SafetyCard";
import ModalButton from "../../../components/UI/ModalButton";
import firsthomebg from "@/assets/images/background/firsthomebg.jpg";
import { safetyBlock } from "../../../constants/homeBlock";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { safetyCards } from "../../../data/homeData";

export default function SafetyBlock() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={firsthomebg}
        className="deva:h-[850px] absolute inset-0 z-0 h-[1000px] w-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 z-10 bg-black opacity-70"></div>

      <div className="deva:h-[850px] peta:gap-10 relative z-20 flex h-[1000px] flex-col items-center justify-center gap-3 text-center text-white">
        <h1 className="deva:text-3xl peta:px-0 px-5 text-xl font-medium">
          {safetyBlock.title}
        </h1>
        <h2 className="deva:w-580px deva:text-xl w-[80%] text-[16px]">
          {safetyBlock.text}
        </h2>

        <div className="deva:gap-10 deva:flex mt-5 hidden justify-center gap-5">
          {safetyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <SafetyCard
                key={index}
                icon={<Icon />}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>

        <div className="deva:hidden w-full p-10">
          <Swiper
            modules={[Navigation]}
            navigation
            className="w-full"
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 1,
              },
              500: {
                slidesPerView: 1.4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 12,
              },
            }}
          >
            {safetyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <SafetyCard
                    icon={<Icon />}
                    title={card.title}
                    description={card.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <ModalButton
          clas="
          deva:py-2
          deva:px-5
          deva:mt-0
          "
          variant="secondary"
        >
          {safetyBlock.btn}
        </ModalButton>
      </div>
    </section>
  );
}
