import React from 'react';
import frontend from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";
import design from "../../assets/images/design.png";
import ui from "../../assets/images/apps.png";


const Services = () => {
  return (
    <section id="Services">
        <div className="container lg:pt-5">
              <div className="text-center flex-col">
                 <h2 className="font-[800] text-headingColor  mb-2 text-[2.4rem]">
                    What do I help
                 </h2>
                 <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                     nisi ut aliquip ex ea commodo consequat.
                 </p>
              </div>
              <div className="flex flex-col justify-center sm:py-12">
                  <div className="w-full py-3  px-2 sm:max-w-xl sm:mx-auto sm:px-0 ">
                     <div className="relative  text-gray-700  antialiased">
                        {/*----vertical line ----*/}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                                          -translate-x-1/2">
                        </div>
                        {/*-------left card------- */}
                        <div className="mt-0 sm:mt-0 sm:mb-12">

                             <div className="flex items-center flex-col sm:flex-row">
                              
                              
                              <div className="flex justify-start  w-full mx-auto items-center">
                                 <div className=" w-full sm:w-1/2 sm:pr-8">
                                    <div data-aos="fade-right" data-aos-duration="1200"
                                     className="bg-white p-4 rounded  shadow group hover:bg-primaryColor cursor-pointer
                                                   ease-in duration-150">
                                          <h3 className="font-[700] text-primaryColor text-xl group-hover:text-white group-hover:font-[600]">
                                             Frontend Development
                                          </h3>
                                          <p className="font-[600] text-[15px] text-smalltextColor mt-2 leading-7 group-hover:text-white group-hover:font-[500]">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum
                                             , dolorem laboriosam doloremque magni

                                          </p>
                                    </div>
                                 </div>          
                              </div>
                              <div className=" bg-primaryColor rounded-full border-white p-1 mt-2 border-4 w-10 h-10 
                                              absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center
                                                -translate-y-4 sm:-translate-y-0">
                                 <figure>
                                    <img src={frontend} alt=""/>
                                 </figure>
                              </div>
                             </div>
                        </div>
                        
                         {/*-------right card------- */}
                         <div className="mt-0 sm:mt-0 sm:mb-12">

                             <div className="flex items-center flex-col sm:flex-row">
                              
                              
                              <div className="flex justify-end  w-full mx-auto items-center">
                                 <div className=" w-full sm:w-1/2 sm:pl-8">
                                    <div data-aos="fade-left"
                                     data-aos-duration="1200"
                                     className="bg-white p-4 rounded  shadow group hover:bg-primaryColor cursor-pointer
                                                   ease-in duration-150">
                                          <h3 className="font-[700] text-primaryColor text-xl group-hover:text-white group-hover:font-[600]">
                                             Backend Development
                                          </h3>
                                          <p className="font-[600] text-[15px] text-smalltextColor mt-2 leading-7 group-hover:text-white group-hover:font-[500]">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum
                                             , dolorem laboriosam doloremque magni

                                          </p>
                                    </div>
                                 </div>          
                              </div>
                              <div className=" bg-primaryColor rounded-full border-white p-1 mt-2 border-4 w-10 h-10 
                                              absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center
                                                -translate-y-4 sm:-translate-y-0">
                                 <figure>
                                    <img src={backend} alt=""/>
                                 </figure>
                              </div>
                             </div>
                        </div>
          
                          {/*-------left card------- */}
                            <div className="mt-0 sm:mt-0 sm:mb-12">
          
          <div className="flex items-center flex-col sm:flex-row">
           
           
           <div className="flex justify-start  w-full mx-auto items-center">
              <div className=" w-full sm:w-1/2 sm:pr-8">
                 <div data-aos="fade-right" data-aos-duration="1200"
                  className="bg-white p-4 rounded  shadow group hover:bg-primaryColor cursor-pointer
                                ease-in duration-150">
                       <h3 className="font-[700] text-primaryColor text-xl group-hover:text-white group-hover:font-[600]">
                          UI/UX Design
                       </h3>
                       <p className="font-[600] text-[15px] text-smalltextColor mt-2 leading-7 group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum
                          , dolorem laboriosam doloremque magni
          
                       </p>
                 </div>
              </div>          
           </div>
           <div className=" bg-primaryColor rounded-full border-white p-1 mt-2 border-4 w-10 h-10 
                           absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center
                             -translate-y-4 sm:-translate-y-0">
              <figure>
                 <img src={design} alt=""/>
              </figure>
           </div>
          </div>
                            </div>
                          
                            {/*-------right card------- */}
                             <div className="mt-0 sm:mt-0 sm:mb-12">

<div className="flex items-center flex-col sm:flex-row">
 
 
 <div className="flex justify-end  w-full mx-auto items-center">
    <div className=" w-full sm:w-1/2 sm:pl-8">
       <div data-aos="fade-left" data-aos-duration="1200"
        className="bg-white p-4 rounded  shadow group hover:bg-primaryColor cursor-pointer
                      ease-in duration-150">
             <h3 className="font-[700] text-primaryColor text-xl group-hover:text-white group-hover:font-[600]">
                Apps Development
             </h3>
             <p className="font-[600] text-[15px] text-smalltextColor mt-2 leading-7 group-hover:text-white group-hover:font-[500]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum
                , dolorem laboriosam doloremque magni

             </p>
       </div>
    </div>          
 </div>
 <div className=" bg-primaryColor rounded-full border-white p-1 mt-2 border-4 w-10 h-10 
                 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center
                   -translate-y-4 sm:-translate-y-0">
    <figure>
       <img src={ui} alt=""/>
    </figure>
 </div>
</div>
                             </div>


          
                     </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Services
