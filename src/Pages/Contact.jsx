import { Helmet } from "react-helmet-async";
import Container from "../shared/Container";

const Contact = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith - Contact</title>
       
      </Helmet>
      <Container>
        <div className="">
          <h1 className="text-[#1C1C1C] text-[18px] font-Poppins font-medium leading-7 uppercase mt-6 md:mt-6 lg:mt-0 xl:mt-0 2xl:mt-0">
            Contact
          </h1>
          <div className="mt-[32px] lg:w-[584px] w-full mx-auto">
            <form   action="https://formspree.io/f/xayrojww"
                   method="POST" className="flex flex-col gap-[16px]">
              <div className="lg:flex gap-6">
                <div>
                  <label
                    htmlFor="First Name*"
                    className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="lg:w-[280px] w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 "
                  />
                </div>

                <div className="mt-4 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0">
                  <label
                    htmlFor="Last Name*"
                    className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="lg:w-[280px] w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Email*"
                  className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 "
                />
              </div>

              <div>
                <label
                  htmlFor="Phone"
                  className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full h-[48px] border-[1px] border-[#1C1C1C] block mt-[6px] outline outline-0 transition-all pl-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500 "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[#1C1C1C] text-[14px] font-Poppins font-normal leading-5"
                >
                  Message*
                </label>
                <textarea
              
                  className="w-full h-[180px]  block border-[1px] border-[#1C1C1C] mt-[6px] outline outline-0 transition-all pl-4 pt-4 focus:ring-[0.7px] focus:ring-neutral-600 duration-500"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-[48px] bg-[#1C1C1C] text-white text-[16px] font-Poppins font-semibold leading-6 "
              >
                Submit
              </button>
            </form>
          </div>

          <div className="bg-[#25242D] lg:w-[910px] lg:h-[198px] w-full h-full mx-auto md:mt-[66px] mt-12 lg:px-[120px] lg:py-12 px-[30px] py-[30px]">
            <h3 className="text-white md:text-[20px] text-[18px] font-Poppins font-semibold leading-[30px]">
              Sign up with your email address to receive news and updates
            </h3>

            <div className="mt-6 md:flex">
              <input
                className="lg:w-[568px] w-full h-[48px] bg-[#25242D] border-[1px] border-white pl-4 text-white text-[16px] font-Poppins font-normal leading-6 outline-0"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <button className="w-[102px]  h-[48px] mt-3 md:mt-0 bg-white text-[#25242D] text-[16px] font-Poppins font-semibold leading-6">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
