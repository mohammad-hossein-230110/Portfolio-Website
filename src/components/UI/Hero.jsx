import React from 'react'
import heroimg from "../../assets/images/hero.svg";

import CountUp from 'react-countup';



const Hero = () => {
  return (
<section className="pt-0" id="About">
    <div className="container pt-14">
      <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
         <div className="w-full md:basis-1/2">
            <h5
            data-aos="fade-right"
            data-aos-duration="1500"
            className=" text-headingColor font-[600] text-[16px]"
            >
            Hello welcome
            </h5>
            <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" text-headingColor font-[800]  sm:text-[40px] leading-[35px]
             sm:leading-[46px] mt-5"
            >
            I'm Mohammad Hossein<br/>Software Developer
            </h2>
            <div data-aos="fade-up"
                 data-aos-duration="1800"
                 data-aos-delay="200"                
                 className=" flex items-center gap-6 mt-7"
                >
                 <a href="#contact">
                    <button className=" bg-primaryColor text-white font-[500] text-[16px] flex items-center gap-2
                        hover:bg-smalltextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                    <i class="ri-mail-line"></i>Hire me!
                    </button>
                 </a>
                 <a href="#protfolio">
                    <button className="text-smalltextColor border-b border-solid font-[600] text-[16px]
                                          border-smalltextColor">
                    <i class="ri-mail-line"></i>See portfolio
                    </button>
                 </a>
            </div>
            <p data-aos="fade-left"
                    data-aos-duration="1500"
                    className=" text-headingColor gap-2 flex leading-7 mt-12 font-[600] text-[15px] 
                                 sm:pl-14 sm:pr-10 ">
                      <span>
                      <i class="ri-apps-2-line"></i>
                      </span>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                     nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center mt-14 gap-9">
              <span>
                Follow me:
              </span>
              <span className=" flex items-center gap-9">
                <a href="#github">
                  <button className="font-[600] text-[20px] text-smalltextColor">
                  <i class="ri-github-fill"></i>
                  </button>
                </a>
                <a href="#telegram">
                  <button className="font-[600] text-[20px] text-smalltextColor">
                  <i class="ri-telegram-fill"></i>
                  </button>
                </a>
                <a href="#instagram">
                  <button className="font-[600] text-[20px] text-smalltextColor">
                  <i class="ri-instagram-line"></i>
                  </button>
                </a>
              </span>
            </div>
         </div>
         <div className="basis-1/3 mt-10 sm:mt-0">
         
         </div>
         {/*_____________right content start ___________*/}
         <div className="md:basis-1/5 flex justify-between text-center flex-wrap mt-10 gap-3 md:mt-0
                         md:flex-col   md:text-end">
           <div className="mb-10">
            <h2 data-aos="zoom-in" data-aos-duration="1500" className=" text-headingColor font-[600] text-[32px]">
              <CountUp start={0} end={6} duration={2} suffix="+"/>
            </h2>
            <h4 data-aos="zoom-in" data-aos-duration="1500" className="text-headingColor font-[600] text-[18px]">Years of exprience</h4>
           </div>
           <div className="mb-10">
            <h2 data-aos="zoom-in" data-aos-duration="1500" className=" text-headingColor font-[600] text-[32px]">
              <CountUp start={0} end={81} duration={2} suffix="%"/>
            </h2>
            <h4 data-aos="zoom-in" data-aos-duration="1500" className="text-headingColor font-[600] text-[18px]">Sucsess Rate</h4>
           </div>
           <div className="mb-10">
            <h2 data-aos="zoom-in" data-aos-duration="1500" className=" text-headingColor font-[600] text-[32px]">
              <CountUp start={0} end={61} duration={2} suffix="+"/>
            </h2>
            <h4 data-aos="zoom-in" data-aos-duration="1500" className="text-headingColor font-[600] text-[18px]">Happy Clients</h4>
           </div>
           <div className="mb-10">
            <h2 data-aos="zoom-in" data-aos-duration="1500" className=" text-headingColor font-[600] text-[32px]">
              <CountUp start={0} end={101} duration={2} suffix="+"/>
            </h2>
            <h4 data-aos="zoom-in" data-aos-duration="1500" className="text-headingColor font-[600] text-[18px]">Project Completed</h4>
           </div>
         </div>
         {/*_____________right content end ___________*/}
         
         <div>

         </div>
      </div>
    </div>

</section>
  )
}

export default Hero
