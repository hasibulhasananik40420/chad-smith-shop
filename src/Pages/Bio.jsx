/* eslint-disable react/no-unescaped-entities */
import Container from "../shared/Container"
import chad2 from '../assets/chad.png'


const Bio = () => {
  return (
    <div>
        <Container>
            <div className="mb-6">
                <h1 className="text-[#1C1C1C] text-[18px] font-Poppins font-medium leading-7 uppercase ">Bio</h1>

                <div className="mt-[32px] lg:flex lg:gap-24 xl:gap-24 2xl:gap-[120px]">

                  <div className="lg:w-[536px] w-full h-[444px] xl:h-[444px] 2xl:h-[600px]">
                     <img className="w-full h-full object-cover" src={chad2} alt="" />
                  </div>

                  <div className="lg:w-[750px] xl:w-[750px] 2xl:w-[850px] w-full mt-10 md:mt-14 lg:mt-0">
                     <h1 className="text-[24px] text-[#080808] font-Poppins font-light leading-[30px]">Chad Smith</h1>

                     <div className="flex flex-col gap-3 mt-4">

                        <div className="flex gap-3">
                  
                         <div className="h-[2px] w-[10px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light leading-6 ">Contemporary Artist  born in Washington, DC, 1988</p>
                        </div>


                        <div className="flex gap-3">
                        <div className="h-[2px] w-[13px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light leading-6 ">Bachelor's Degree from Hampton University, 2010</p>
                        </div>

                        


                        <div className="flex  gap-3">
                        <div className="h-[2px] w-[12px] mt-2 bg-black"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light leading-6 ">Current Medium: Collaboration, 3D Printing & Photography</p>
                        </div>



                     <div className="mt-5">
                         <h1 className="text-[24px] text-[#080808] font-Poppins font-light leading-[30px]">Artist Statement</h1>

                        <p className="text-[#080808] mt-3 text-[14px] font-Poppins font-light leading-6 ">I've always been interested in working across mediums. In my mid-20s, I began collaborating with other artists in the medium of Video Art. Using Collaboration as a tool allowed me to enter other artist's styles, and extend my own style, to create something unachievable alone. I've currently landed in 3D Printing and Photography, collaborating with illustrators, animators and 3D printing professionals, to build a collection of new work. "Self-portrait", "Please help me", and "A talk on the mind" are a few of my favorites from the collection so far.</p>
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