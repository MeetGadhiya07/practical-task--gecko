import React from "react";
import Header from "../header/Header";
import { TransitionX } from "../../utils/animations";

const HeroSection = () => {
  return (
    <div className="bg-[url('/src/assets/Images/heroMainBg.svg')]   bg-cover bg-center ">
      <Header />

      <section className="container flex items-end h-[calc(100%-120px)] mt-[128px]">
        <div>
          <TransitionX xPosition={-200}>
            <h1 className="text-5xl leading-[58.99px] font-bold">
              How much <br /> could you save?
            </h1>
            <p className="text-lg leading-[22.59px]">
              Answer the questions below to get a fixed price <br /> quotation
              for us to take your accountancy hassles away <br /> from you.
            </p>
          </TransitionX>
          <div className="bg-white px-[46px] py-[34px] rounded-xl w-[612px] mt-[28px]">
            <p className="text-center text-[28px] leading-[35px]">
              Is your turnover expected to be more than £85k?
            </p>
            <div className="flex justify-center gap-3.5 pt-[21px]">
              <button className="px-[31px] py-[11px] bg-primary rounded-full text-xl leading-[23.7px] font-bold text-white">
                Yes
              </button>
              <button className="px-[31px] py-[11px] bg-primary rounded-full text-xl leading-[23.7px] font-bold text-white">
                No
              </button>
            </div>
          </div>
          <p className="text-base font-semibold mt-[19px] mb-10 1366:mb-[70px]">
            Takes less than 30 seconds
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
