import { Link, NavLink, useLocation } from "react-router-dom"
import Container from "./Container"
import { useEffect, useState } from "react";
import MobileMenu from "../components/MobileMenu/MobileMenu";


const Navbar = () => {
 
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
  


   <div className="bg-white">
     <div className="lg:block hidden">
    <Container>
    
     <div className="flex justify-between items-center h-[195px]">
        <Link
          to={'/'}
          className="text-[#1C1C1C] md:text-[34px] text-[20px] font-Poppins font-normal tracking-normal cursor-pointer"
        >
          Chad Smith
        </Link>

        <div className="flex items-center gap-10">
        

             <NavLink
              exact
              to={'/'}
              className={` text-[14px] font-Poppins font-normal leading-6 uppercase ${activeLink === '/' ? 'text-[#1C1C1C]' : 'text-[#999]'}`}
              onClick={() => handleLinkClick('/')}
            >
              WORK samples
            </NavLink>

       
           
         

               <NavLink
              to={'/bio'}
              className={` text-[14px] font-Poppins font-normal leading-6 uppercase ${activeLink === '/bio' ? 'text-[#1C1C1C]' : 'text-[#999]'}`}
              onClick={() => handleLinkClick('/bio')}
            >
              bio
            </NavLink>
         

            <NavLink
              to={'/contact'}
              className={` text-[14px] font-Poppins font-normal leading-6 uppercase ${activeLink === '/contact' ? 'text-[#1C1C1C]' : 'text-[#999]'}`}
              onClick={() => handleLinkClick('/contact')}
            >
              Contact
            </NavLink>
        </div>
      </div>

    
   


    </Container>
  </div>

       <div className="block lg:hidden">
        <MobileMenu/>
       </div>


   </div>
  )
}

export default Navbar