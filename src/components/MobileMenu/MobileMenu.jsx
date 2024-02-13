import { Link } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="bg-white h-[120px]">
        <div className="flex justify-between items-center px-4 h-[120px]">

           <div>
           <Link
          to={'/'}
          className="text-[#1C1C1C] md:text-[34px] text-[24px] font-Poppins font-normal tracking-normal cursor-pointer"
        >
          Chad Smith
        </Link>
           </div>

           <div>
           <CiMenuFries onClick={toggleMenu} className="size-7"/>
           </div>

        </div>



        {isMenuOpen && (
        <div className="w-[80%] right-0 fixed inset-y-0 bg-gray-900 h-screen z-50">
          {/* Add your mobile menu content here */}

           <div className="flex justify-end mt-6 pr-4">
           <IoCloseOutline onClick={toggleMenu} className="size-7 text-red-500"/>
           </div>
            
          <div className="flex flex-col gap-5 p-8">
          <Link to={'/'} onClick={toggleMenu} className="text-white text-[16px] font-Poppins font-normal leading-6 uppercase ">
             WORK samples
            </Link>


            <Link to={'/bio'} onClick={toggleMenu} className="text-white text-[16px] font-Poppins font-normal leading-6 uppercase">
             bio
            </Link>

            <Link to={'/contact'} onClick={toggleMenu} className="text-white text-[16px] font-Poppins font-normal leading-6 uppercase">
              contact
            </Link>


          </div>
          
        </div>
      )}



    </div>
  )
}

export default MobileMenu