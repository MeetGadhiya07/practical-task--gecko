import profile from "../../assets/Images/josh-man.png";
import topQuote from "../../assets/Images/top-quote.svg";
import downQuote from "../../assets/Images/down-quote.svg";

import BlogSlider from "../blog-slider/blog-slider";
import { RightArrow } from "../../utils/icons";
import Transition from "../../utils/animations";

const TestimonialsAndBlogs = () => {
  return (
    <section>
      <div className="container bg-[url('/src/assets/Images/testimonial.svg')] h-full pt-[87.12px] pb-[132px]">
        <section className="testimonials-wrapper">
          <h1 className="text-secondary text-[47px] leading-[58.99px] font-bold  mb-[60px]  ">
            Testimonials
          </h1>

          <Transition>
            <div className="w-full flex items-center justify-center gap-[98px]">
              <div className="bg-white w-[502px] rounded-xl p-8 shadow relative">
                <img
                  src={topQuote}
                  alt="top-quote"
                  className="absolute -top-[17px] left-[10px]"
                ></img>
                <div className="flex justify-start items-center mb-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-full mr-4"
                  ></img>
                  <p className="text-lg font-bold ">Josh brollins</p>
                </div>
                <p className="text-[#5E5E5E] leading-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua
                </p>

                <img
                  src={downQuote}
                  alt="top-quote"
                  className="absolute -bottom-[17px] right-[12px]"
                ></img>
              </div>

              <div className="bg-white w-[502px] rounded-xl p-8 shadow relative">
                <img
                  src={topQuote}
                  alt="top-quote"
                  className="absolute -top-[17px] left-[10px]"
                ></img>
                <div className="flex justify-start items-center mb-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-full mr-4"
                  ></img>
                  <p className="text-lg font-bold ">Josh brollins</p>
                </div>
                <p className="text-[#5E5E5E] leading-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua
                </p>

                <img
                  src={downQuote}
                  alt="top-quote"
                  className="absolute -bottom-[17px] right-[12px]"
                ></img>
              </div>
            </div>
          </Transition>
        </section>

        <section className="blogs-wrapper mt-[180px]">
          <div className="container">
            <div className="flex justify-between items-center">
              <h1 className="text-secondary text-[47px] leading-[58.99px] font-bold mb-[60px]">
                Blogs
              </h1>

              <p className="flex items-center gap-2 text-[#3D5FDD] font-bold text-[22px] cursor-pointer">
                View More <RightArrow />
              </p>
            </div>

            <Transition>
              <div className="max-w-[1084px] mx-auto">
                <BlogSlider />
              </div>
            </Transition>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TestimonialsAndBlogs;
