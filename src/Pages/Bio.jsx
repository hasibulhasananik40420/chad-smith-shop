/* eslint-disable react/no-unescaped-entities */
import Container from "../shared/Container"
import chad2 from '../assets/chad.png'


const Bio = () => {
  return (
    <div>
        <Container>
            <div className="mb-6">
                <h1 className="text-[#1C1C1C] text-[18px] font-Poppins font-medium leading-7 uppercase ">Bio</h1>

                <div className="mt-[66px] lg:flex 2xl:flex 2xl:gap-10 lg:gap-20 xl:gap-20">

                  <div className="lg:w-[536px] w-full h-[444px]">
                     <img className="w-full h-full object-contain" src={chad2} alt="" />
                  </div>

                  <div className="lg:w-[672px] w-full mt-10 md:mt-14 lg:mt-0">
                     <h1 className="text-[24px] text-[#080808] font-Poppins font-semibold leading-[30px]">Chad Smith</h1>

                     <div className="flex flex-col gap-3 mt-4">

                        <div className="flex gap-3">
                  
                         <div className="h-[2px] w-[10px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Contemporary Artist  born in Hampton, Virginia, 1991</p>
                        </div>


                        <div className="flex gap-3">
                        <div className="h-[2px] w-[13px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Bachelor's Degree in Art & Design from Virginia State University, 2014</p>
                        </div>

                        <div className="flex  gap-3">
                        <div className="h-[2px] w-[40px] bg-black mt-2"></div>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">A focus on emphasizing organic black/white abstract shapes to create bold compositions on the choices we make, things we see and things we do whether conventional or unconventional</p>
                        </div>


                        <div className="flex  gap-3">
                        <div className="h-[2px] w-[12px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Mediums - Acrylic, Wood</p>
                        </div>

                        <div className="flex  gap-3">
                        <div className="h-[2px] w-[60px] mt-3 bg-black"></div>
                        <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Paintings/Murals,Merchandise currently on display or owned by collectors in New York City, Palm Desert California, Seattle Washington, Chicago , Miami FL, South Carolina, North Carolina, Richmond VA , Petersburg VA, Norfolk VA, Chesapeake VA , Hampton VA, VA Beach, Newport News VA, Berlin Germany and China.</p>
                        </div>

                        <div className="flex  gap-3">
                        <div className="h-[2px] w-[40px] mt-3 bg-black"></div>
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