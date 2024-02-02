
import { useState } from 'react';
import Container from "../shared/Container";
import image1 from "../assets/image 7.png";
import { IoIosExpand } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const Home = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const projects = [
    {
      _id: 1,
      image: 'https://images.squarespace-cdn.com/content/v1/551777cee4b0767424416ab0/1670973203292-9YPAGX6G0XVMUGXCY58C/thumbnail-7.jpg?format=500w',
      caption: 'Premium Statue Collection'
    },
    {
      _id: 2,
      image: image1,
      caption: 'Premium Statue Collection 2'
    },
    {
      _id: 3,
      image: image1,
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

  const handleExpandClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  return (
    <div className="">
      <Container>
        <div className="mt-[60px]">
          <h4 className="text-[#25242D] text-[18px] font-medium font-Poppins leading-[36px] uppercase">
            PROJECTS
          </h4>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9 mb-5 mt-[51px]">

            {projects.map((project) => (
              <div key={project._id} className=" relative lg:w-[375px] w-full h-[409px]">
                <div className="lg:w-[375px] w-full h-[375px] border ">
                  <img
                    className="w-full h-full object-cover"
                    src={project?.image}
                    alt="product image"
                  />
                </div>

                <p className="text-[#565659] text-[14px] font-Poppins font-light leading-[22px]  text-center tracking-[0.84px] mt-[10px]">
                  {project?.caption}
                </p>

                <IoIosExpand className="size-5 absolute left-0 bottom-0 cursor-pointer" onClick={() => handleExpandClick(project?.image)} />

              </div>
            ))}
          </div>

          {expandedImage && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50 modal-overlay" onClick={handleCloseModal}>
              <div className="w-[700px] h-[500px] ring-2 ring-white zoom-in">
                <img src={expandedImage} alt="expanded image" className="w-full h-full " />
               <div className='flex justify-end mt-1'>
               <MdOutlineClose  className="size-7 text-red-500 cursor-pointer" onClick={handleCloseModal} />
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
