import Container from "../shared/Container"
import chad from '../assets/chad.png'

const Bio = () => {
  return (
    <div>
        <Container>
            <div className="mt-[60px] mb-6">
            <h4 className="text-[#25242D] text-[18px] font-medium font-Poppins leading-[36px] uppercase">
            Bio
            </h4>


            <div className="lg:flex gap-[34px] mt-[51px]">

                <div className="lg:w-[400px] w-full h-[366px] px-10">
                    <img className="w-full h-full" src={chad} alt="" />
                </div>

                <div className="flex flex-col gap-1 mt-10 md:mt-10 lg:mt-0">

                   <div className="flex items-center gap-3">
                      <span className="bg-[#080808] size-2 rounded-full"></span>
                      <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Lorem ipsum dolor sit amet consectetur. Senectus arcu rutrum ullamcorper risus.</p>
                   </div> 
                   
                    <div className="flex items-center gap-3">
                      <span className="bg-[#080808] size-2 rounded-full"></span>
                      <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Lorem ipsum dolor sit amet consectetur. Senectus arcu rutrum ullamcorper risus.</p>
                   </div> 
                   
                    <div className="flex items-center gap-3">
                      <span className="bg-[#080808] size-2 rounded-full"></span>
                      <p className="text-[#080808] text-[16px] font-Poppins font-normal leading-6 ">Lorem ipsum dolor sit amet consectetur. Senectus arcu rutrum ullamcorper risus.</p>
                   </div>
                </div>

            </div >

            </div>
        </Container>
    </div>
  )
}

export default Bio