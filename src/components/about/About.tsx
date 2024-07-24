import React from "react";
import aboutContentBg from "../../assets/Images/about-contentBg.svg";
import Transition from "../../utils/animations";

const About = () => {
  return (
    <>
      <section className="container  mb-32 pl-[41px] pr-0">
        <div className="bg-[url('/src/assets/Images/AboutBg.svg')] bg-cover bg-left h-full">
          <Transition>
            <div className="pt-[393px] grid grid-cols-[45%_55%] pb-[147px]">
              <div className="pt-[77px] pl-[162px] pr-[15px]">
                <h1 className="text-[47px] leading-[58px] font-bold">
                  About us
                </h1>

                <p className="text-lg leading-[22px] mt-[22px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr
                </p>
                <button className="bg-primary text-white px-[65px] py-[15px] rounded-full text-xl leading-6 shadow-[0_4px_4px_0px_#00000040] mt-[41px]">
                  Get IN Touch
                </button>
              </div>
              <div className="">
                <img src={aboutContentBg} alt="aboutUS" className="mx-auto" />
              </div>
            </div>
          </Transition>
        </div>
      </section>
    </>
  );
};

export default About;
