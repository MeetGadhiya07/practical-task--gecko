import React from "react";
import { PROCESS_STEP, ProcessType } from "../../utils/utils";

const Process = () => {
  return (
    <section className="container mt-10 ">
      <h1 className="text-secondary text-[47px] leading-[58.99px] font-bold  mb-20">
        Our Process
      </h1>

      <div className="flex justify-center gap-[98px]">
        {PROCESS_STEP.map(({ step, content }: ProcessType, index: number) => (
          <div
            key={index}
            className="py-[98px] px-[59px] text-center bg-[url('/src/assets/Images/process-round.svg')] bg-no-repeat w-[340px] h-[336px]"
          >
            <p className="text-[22px] leading-[24px] font-bold">Step {step}</p>
            <p className="mt-[20px] leading-[24px] text-lg">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
