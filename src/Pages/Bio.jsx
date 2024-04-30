/* eslint-disable react/no-unescaped-entities */
import Container from "../shared/Container"
import chad2 from '../assets/chad.png'
import { Helmet } from "react-helmet-async"


const Bio = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith - Bio</title>
       
      </Helmet>
        <Container>
            <div className="mb-6">
                <h1 className="text-[#1C1C1C] text-[18px] font-Poppins font-medium leading-7 uppercase mt-6 md:mt-6 lg:mt-0 xl:mt-0 2xl:mt-0">Bio</h1>

                <div className="mt-[32px] lg:flex lg:gap-24 xl:gap-24 2xl:gap-[150px]">

                  <div className="lg:w-[536px] w-full h-[400px] md:h-[700px] lg:h-[444px] xl:h-[444px] 2xl:h-[500px]">
                     <img className="w-full h-full object-cover rounded-lg" src={chad2} alt="" />
                  </div>

                  <div className="lg:w-[750px] xl:w-[750px] 2xl:w-[850px] w-full mt-10 md:mt-14 lg:mt-0">
                     <h1 className="text-[24px] text-[#080808] font-Poppins font-light leading-[20px]">Chad Smith</h1>

                     <div className="flex flex-col md:gap-2 gap-3  md:mt-4 mt-6">

                        <div className="flex gap-3 md:items-center items-baseline">
                  
                         <div className="border-[1px] border-black w-[13px]"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light  leading-6 ">Contemporary Artist  born in Washington, DC, 1988</p>
                        </div>


                        <div className="flex gap-3 md:items-center items-baseline">
                        <div className="border-[1px] border-black w-[13px]"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light leading-6 ">Bachelor's Degree from Hampton University, 2010</p>
                        </div>

                        


                        <div className="flex  gap-3 md:items-center items-baseline">
                        <div className="border-[1px] border-black w-[13px]"></div>
                        <p className="text-[#080808] text-[14px] font-Poppins font-light leading-6 ">Current Medium: Collaboration, 3D Printing & Photography</p>
                        </div>



                     <div className="lg:mt-5 mt-6">
                         <h1 className="text-[24px] text-[#080808] font-Poppins font-light leading-[30px]">Artist Statement</h1>

                        <p className="text-[#080808] lg:mt-3 mt-4 text-[14px] font-Poppins font-light leading-6 ">
                        I've always enjoyed working with others to make art. I've collaborated with video artists, illustrators, animators and 3D print makers to explore new genres and ideas of artistic exploration. 
                        </p>

                        <p className="text-[#080808] lg:mt-2 mt-2 text-[14px] font-Poppins font-light leading-6 ">
                        My portfolio pieces, "Self-portrait", "please help me", and "A talk on the mind", are a few of my favorite collaborative projects so far. Each piece is a snapshot from my personal life and builds upon a common theme; entitled, "the black man and the gold box".
                        </p>

                        <p className="text-[#080808] lg:mt-2 mt-2 text-[14px] font-Poppins font-light leading-6 ">
                        I'm currently interested in art exhibitions, opportunities to reuse "the black man and the gold box" theme to disseminate research findings and partnerships to mass produce created artwork. In addition, I'm always interested in collaborating with others to create new artwork.
                        </p>
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