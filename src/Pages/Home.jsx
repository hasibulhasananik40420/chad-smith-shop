/* eslint-disable react/prop-types */

import { useState } from "react";
import Container from "../shared/Container";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

import { IoIosArrowBack, IoIosArrowForward, IoIosExpand } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <IoIosArrowForward
    className="size-9 absolute top-1/2 right-[-60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
    onClick={onClick}
  />
);

const PrevArrow = ({ onClick }) => (
  <IoIosArrowBack
    className="size-9 absolute top-1/2 left-[-60px] transform -translate-y-1/2 text-gray-500 cursor-pointer"
    onClick={onClick}
  />
);

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [expandedImage, setExpandedImage] = useState(null);
  const [sliderModalOpen, setSliderModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      _id: 1,
      image: product1,
      caption: "'Self-portrait' (2021)",
      size: "46” X 72” yarn tapestry",
    },
    {
      _id: 2,
      image: product2,
      caption: "'Please help me' (2022)",
      size: "46” X 72” yarn tapestry2",
    },
    {
      _id: 3,
      image: product3,
      caption: "'A talk on the mind' (2022)",
      size: "46” X 72” yarn tapestry3",
    },

   
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index) => setCurrentSlide(index),
  };

  const handleExpandClick = (index) => {
    setSliderModalOpen(true);
    setCurrentSlide(index);
  };

  const handleCloseModal = () => {
    setSliderModalOpen(false);
    setExpandedImage(null);
  };

  return (
    <div className="">
      <Container>
        <div className="">
          <h4 className="text-[#1C1C1C] text-[16px] font-medium font-Poppins  uppercase">
          WORK samples
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-[32px]">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className="relative lg:w-[280px] xl:w-[290px] 2xl:w-[424px] w-full 2xl:h-[468px] xl:h-[370px] lg:h-[360px] group"
              >
                <div className="2xl:h-[424px] xl:h-[330px] lg:h-[320px] h-[350px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    src={project?.image}
                    alt="product image"
                    onClick={() => handleExpandClick(index)}
                  />
                  <div className="overlay absolute top-0 left-0 w-full 2xl:h-[424px] xl:h-[330px] lg:h-[320px] h-[350px] bg-opacity-40 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <IoIosExpand
                  className="size-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleExpandClick(index)}
                />
                <p className="text-[#404040] text-[14px] font-FuturaPT font-light leading-[22.4px]  tracking-[0.84px] text-center mt-4 ">
                  {project?.caption}
                </p>
              </div>
            ))}
          </div>

          {sliderModalOpen && (
            <div
              className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white z-50 max-w-[1920px] mx-auto 2xl:px-0 lg:px-2 px-2 xl:px-4`}
            >
              <div className="lg:flex justify-center 2xl:gap-[164px] lg:gap-20 2xl:mt-[127px] lg:mt-[70px] xl:mt-[90px] mt-20 md:mt-[120px]">
                <div className="2xl:w-[600px] lg:w-[440px] xl:w-[550px] 2xl:h-[728px] lg:h-[470px] xl:h-[500px] h-full w-full zoom-in">
                  <Slider {...sliderSettings} initialSlide={currentSlide}>
                    {projects.map((project) => (
                      <div
                        key={project._id}
                        className="2xl:h-[728px] lg:h-[470px] xl:h-[500px] w-full h-[450px] md:h-[600px] outline-0 border-none"
                      >
                        <img
                          src={project?.image}
                          alt="expanded image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="zoom-in 2xl:mt-[58px] lg:mt-[58px] mt-10">
                  <h1 className="text-[#1C1C1C] md:text-[32px] text-[24px] font-Poppins font-normal leading-[44px]">
                    {" "}
                    {projects[currentSlide]?.caption}
                  </h1>

                  <p className="text-[#1C1C1C] text-[16px]  font-Poppins font-normal leading-[24px] mt-2">
                    {projects[currentSlide]?.size}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-5 absolute top-8 2xl:right-16 lg:right-5">
                <MdOutlineClose
                  className="size-7 text-black cursor-pointer"
                  onClick={handleCloseModal}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
