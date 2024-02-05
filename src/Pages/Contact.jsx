import Container from "../shared/Container"

const Contact = () => {
  return (
    <div>
      <Container>
       <div className="2Issue:px-4 px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
       <div className="mt-[32px] lg:w-[584px] w-full mx-auto">

<form className="flex flex-col gap-[15px]">
   <div className="lg:flex gap-6">
   <div >
     <label htmlFor="First Name*" className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5">First Name*</label>
     <input type="text" className="lg:w-[280px] w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 " />
   </div>

   <div >
     <label htmlFor="Last Name*" className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5">First Name*</label>
     <input type="text" className="lg:w-[280px] w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 " />
   </div>
   </div>

   <div >
     <label htmlFor="Email*" className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5">Email*</label>
     <input type="email" className="w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 " />
   </div>

   <div >
     <label htmlFor="Phone*" className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5">Phone*</label>
     <input type="text" className="w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 " />
   </div>

   <div >
     <label htmlFor="message" className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5">How can we help you*</label>
     <input type="email" className="w-full h-[180px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 " />
   </div>

   <button type="submit" className="w-full h-[48px] bg-[#1C1C1C] text-white text-[16px] font-Poppins font-semibold leading-6 ">Submit</button>

  


</form>



</div>


<div className="bg-[#25242D] lg:w-[910px] lg:h-[198px] w-full h-full mx-auto mt-[66px] lg:px-[120px] lg:py-12 px-[30px] py-[30px]">

 <h3 className="text-white lg:text-[20px] text-[16px] font-Poppins font-semibold leading-[30px]">Sign up with email address to receive news and updates</h3>

  <div className="mt-6 flex">
    <input className="lg:w-[568px] w-ful h-[48px] bg-[#25242D] border-[1px] border-white pl-4 text-white text-[16px] font-Poppins font-normal leading-6 outline-0" type="email" name="" id="" placeholder="Email" />
    <button className="w-[102px] h-[48px] bg-white text-[#25242D] text-[16px] font-Poppins font-semibold leading-6">Sign Up</button>
  </div>

</div>
       </div>
      </Container>
    </div>
  )
}

export default Contact