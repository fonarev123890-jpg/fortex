import JobStep from "./JobStep";
import { jobsSteps } from "../../../data/homeData";
import { jobsBlock } from "../../../constants/homeBlock";

export default function JobsBlock() {
  return (
    <section>
      <div className="flex flex-col items-center gap-8 py-8">
        <h2 className="peta:text-[24px] text-[18px] font-bold sm:text-2xl">
          {jobsBlock.title}
        </h2>
        <div className="grid grid-cols-1 justify-center gap-2 px-5 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {jobsSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <JobStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={<Icon />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
