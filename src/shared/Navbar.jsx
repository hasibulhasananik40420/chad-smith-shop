import { Link } from "react-router-dom"
import Container from "./Container"
import { useState } from "react";


const Navbar = () => {
 

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
  


    <div className="bg-white">
    <Container>
      <div className="flex justify-between items-center h-[195px]">
        <Link
          to={'/'}
          className="text-[#1C1C1C] md:text-[34px] text-[20px] font-Poppins font-normal tracking-normal cursor-pointer"
        >
          ThisCrates
        </Link>

        <div className="flex items-center gap-10">
          <Link
            to={'/'}
            onClick={() => handleLinkClick('home')}
            className={`${activeLink === 'home' ? 'text-[#1C1C1C]' : 'text-[#999]'}  text-[16px] font-Poppins font-normal leading-6 uppercase`}
          >
            WORK samples
          </Link>
          <Link
            to={'/bio'}
            onClick={() => handleLinkClick('bio')}
            className={`${activeLink === 'bio' ? 'text-[#1C1C1C]' : 'text-[#999]'}  text-[16px] font-Poppins font-normal leading-6 uppercase`}
          >
            bio
          </Link>
          <Link
            to={'/contact'}
            onClick={() => handleLinkClick('contact')}
            className={`${activeLink === 'contact' ? 'text-[#1C1C1C]' : 'text-[#999]'}  text-[16px] font-Poppins font-normal leading-6 uppercase`}
          >
            Contact
          </Link>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Navbar