import React from "react";
import { Service, ServiceData } from "../../utils/utils";
import Transition, { TransitionX } from "../../utils/animations";

const Services = () => {
  return (
    <section className="container mt-10 mb-32">
      <TransitionX xPosition={-200}>
        <h1 className="text-secondary text-[47px] leading-[58.99px] font-bold  mb-20">
          Services
        </h1>
      </TransitionX>

      <div className="grid-cols-3 grid gap-[60px]">
        {ServiceData.map(
          ({ icon: Icon, title, description }: Service, index: number) => (
            <Transition>
              <div key={index} className="px-[18px] py-[26px] text-center">
                <Icon className="mx-auto" />
                <p className="text-[22px] leading-[27px] text-secondary pt-[24px]">
                  {title}
                </p>
                <p className="text-base leading-[24px] pt-[20px]">
                  {description}
                </p>
              </div>
            </Transition>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
