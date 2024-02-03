
import { useState } from 'react';
import Container from "../shared/Container";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

import { IoIosExpand } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [expandedImage, setExpandedImage] = useState(null);
  const [sliderModalOpen, setSliderModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  const projects = [
    {
      _id: 1,
      image: product1,
      caption: 'Premium Statue Collection'
    },
    {
      _id: 2,
      image: product2,
      caption: 'Premium Statue Collection 2'
    },
    {
      _id: 3,
      image: product3,
      caption: 'Premium Statue Collection 3'
    },

    {
      _id: 4,
      image: 'https://images.squarespace-cdn.com/content/v1/551777cee4b0767424416ab0/1670972932603-TSA6PFF8YBSQDTEOHVHF/thumbnail-9.jpg?format=500w',
      caption: 'Premium Statue Collection'
    },

    {
      _id: 5,
      image: 'https://images.squarespace-cdn.com/content/v1/551777cee4b0767424416ab0/1670973203292-9YPAGX6G0XVMUGXCY58C/thumbnail-7.jpg?format=500w',
      caption: 'Premium Statue Collection'
    },

    {
      _id: 6,
      image: 'https://images.squarespace-cdn.com/content/v1/551777cee4b0767424416ab0/1670987375382-YZ7AG4K2SJ12OWR7RRQQ/8C60263E-2655-4394-AD0A-5883CDD11544.jpeg?format=500w',
      caption: 'Premium Statue Collection'
    },


  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <h4 className="text-[#1C1C1C] text-[18px] font-medium font-Poppins leading-[28px] uppercase">
          WORK SAMPLES
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-[66px]">
          {projects.map((project, index) => (
            <div key={project._id} className="relative lg:w-[375px] xl:w-[424px] w-full h-[468px]">
              <div className="h-[424px]">
                <img
                  className="w-full h-full object-cover"
                  src={project?.image}
                  alt="product image"
                  onClick={() => handleExpandClick(index)}
                />
              </div>
              <IoIosExpand
                className="size-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer"
                onClick={() => handleExpandClick(index)}
              />
              <p className="text-[#404040] text-[18px] font-Poppins font-normal leading-[28px] text-center mt-4">
                {project?.caption}
              </p>
            </div>
          ))}
        </div>

         {sliderModalOpen && (
           
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 modal-overlay" >
             
            <div className="w-[1000px] h-[600px] ring-2 ring-white zoom-in">
            
              <Slider {...sliderSettings} initialSlide={currentSlide}>
                {projects.map((project) => (
                  <div key={project._id} className="h-[600px]">
                    <img src={project?.image} alt="expanded image" className="w-full h-full" />
                  </div>
                ))}
              </Slider>
              <div className='flex justify-end mt-1'>
                <MdOutlineClose className="size-7 text-red-500 cursor-pointer" onClick={handleCloseModal} />
              </div>
            </div>

            
          </div>

           
        )}

        
      </div>
    </Container>
  </div>








  );
};

export default Home;
