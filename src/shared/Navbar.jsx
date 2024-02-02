import { Link } from "react-router-dom"
import Container from "./Container"


const Navbar = () => {
  return (
        <div className="bg-white">
        <Container>
            <div className="mt-[73px] flex justify-between items-center">
               <Link to={'/'} className="text-[#25242D] md:text-[42px] text-[20px] font-Poppins font-normal tracking-[ -3.4px] cursor-pointer">
               ThisCrates
               </Link>

                <div className="flex items-center md:gap-7 gap-4">
                   <Link to={'/'} className="text-[#25242D] text-[13px] font-Poppins font-normal leading-8 uppercase hover:text-[#6db1e9] duration-300">projects</Link>
                   <Link to={'/bio'} className="text-[#25242D] text-[13px]  font-Poppins font-normal leading-8 uppercase hover:text-[#6db1e9] duration-300">bio</Link>
                   <Link to={'/contact'} className="text-[#25242D] text-[13px]  font-Poppins font-normal leading-8 uppercase hover:text-[#6db1e9] duration-300">Contact</Link>
               
               
               
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar