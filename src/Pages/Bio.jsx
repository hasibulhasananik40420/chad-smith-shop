/* eslint-disable react/no-unescaped-entities */
import Container from "../shared/Container"
import chad from '../assets/chad.png'
import { LuMinus } from "react-icons/lu";


const Bio = () => {
  return (
    <div>
        <Container>
            <div>
                <h1 className="text-[#1C1C1C] text-[18px] font-Poppins font-medium leading-7 uppercase ">Bio</h1>

                <div className="mt-[66px] lg:flex gap-[112px]">

                  <div className="lg:w-[536px] w-full h-[464px]">
                     <img className="w-full h-full" src={chad} alt="" />
                  </div>

                  <div className="lg:w-[672px] w-full mt-10 md:mt-14 lg:mt-0">
                     <h1 className="text-[24px] text-[#080808] font-Poppins font-semibold leading-[30px]">Chad Smith</h1>

                     <div className="flex flex-col gap-3 mt-4">

                        <div className="flex items-center gap-2">
                        <LuMinus />
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Contemporary Artist  born in Hampton, Virginia, 1991</p>
                        </div>


                        <div className="flex items-center gap-2">
                        <LuMinus />
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Bachelor's Degree in Art & Design from Virginia State University, 2014</p>
                        </div>

                        <div className="flex  gap-2">
                        <LuMinus className="size-6"/>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">A focus on emphasizing organic black/white abstract shapes to create bold compositions on the choices we make, things we see and things we do whether conventional or unconventional</p>
                        </div>


                        <div className="flex items-center gap-2">
                        <LuMinus />
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Mediums - Acrylic, Wood</p>
                        </div>

                        <div className="flex  gap-2">
                        <LuMinus className="size-10 mt-[-10px]"/>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Paintings/Murals,Merchandise currently on display or owned by collectors in New York City, Palm Desert California, Seattle Washington, Chicago , Miami FL, South Carolina, North Carolina, Richmond VA , Petersburg VA, Norfolk VA, Chesapeake VA , Hampton VA, VA Beach, Newport News VA, Berlin Germany and China.</p>
                        </div>

                        <div className="flex  gap-2">
                        <LuMinus className="size-7"/>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Current collections include VMFA (Virginia Museum of Fine Arts), WPA (Work Program Architects), Within Interior Design Firm, Commune VA and Dollar Tree HQ at Summit Pointe VA.</p>
                        </div>


                     </div>
                  </div>
                     
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Bio