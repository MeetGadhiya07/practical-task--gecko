import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get } from "../../services/apiService";

type BlogItem = {
  id: number;
  image_url: string;
  name: string;
  writer_name: string;
  short_description: string;
  createdAt: string;
};

const BlogSlider: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("blogs ===>", blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await get<BlogItem[]>("/blog");
        if (response.success) {
          setBlogs(response.data);
        } else {
          setError("Failed to fetch blog data");
        }
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-slider">
          <img
            src={blog.image_url}
            alt="blog"
            className="mb-[19px] h-[200px] w-[332px] rounded-xl"
            width={332}
            height={200}
          />
          <p className="text-xl text-[#232323] mb-2">{blog.name}</p>
          <p className="text-[#606060] text-sm mb-2">
            {new Date(blog.createdAt).toLocaleDateString()} by{" "}
            <span className="text-[#D0021B]">{blog.writer_name}</span>
          </p>
          <p className="text-[#606060] text-base">{blog.short_description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default BlogSlider;
