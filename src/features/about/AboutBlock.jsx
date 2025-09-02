import { aboutBlock } from "../../constants/aboutBlock";
import { logosAboutData } from "../../data/aboutData";
import LogoCard from "./LogoCard";
import partners from "@/assets/images/background/partnersbg.jpg";

function AboutBlock() {
  return (
    <section className="bg-white pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          {aboutBlock.title}
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-[16px] text-gray-700 sm:text-[18px]">
          {aboutBlock.text}
        </p>
        <h3 className="mb-8 text-[20px] font-semibold sm:text-2xl">
          {aboutBlock.target}
        </h3>
      </div>

      <div className="relative h-[500px]">
        <img
          src={partners}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-start gap-4 px-0 sm:justify-center sm:px-8">
          <h3 className="deva:text-3xl mt-10 text-2xl font-bold text-white sm:mt-0">
            {aboutBlock.parnters}
          </h3>
          <div className="deva:gap-5 grid grid-cols-4 gap-2">
            {logosAboutData.map((logo, index) => (
              <LogoCard key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
