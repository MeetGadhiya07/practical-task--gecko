import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogFirst from "./path/to/your/blogFirstImage";
import blogMobile from "../../assets/Images/blog-mobile.png";
import blogMoney from "../../assets/Images/blog-money.png";

const BlogSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...sliderSettings}>
            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>

            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>

            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>

            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>

            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>

            <div className="blog-slider">
                <img
                    src={blogFirst}
                    alt="blogImage"
                    className="mb-2.5"
                />
                <p className="text-xl text-[#232323] mb-2">
                    Account Management Tips
                </p>
                <p className="text-[#606060] text-sm mb-2">
                    May 13, 2019 by{" "}
                    <span className="text-[#D0021B]">Allison Fox</span>
                </p>
                <p className="text-[#606060] text-base">
                    Lorem ipsum dolor sit amet, consetetur sadip
                </p>
            </div>
        </Slider>
    );
};

export default BlogSlider;
