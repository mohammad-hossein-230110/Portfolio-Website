import React from "react";

const Footer1 = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8 ">
          <div className="w-full sm:w-1/2">
            <h2 className=" text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button
                className=" bg-primaryColor text-white font-[500] text-[16px] flex items-center gap-2
                        hover:bg-smalltextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-mail-line"></i>Hire me!
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              consequuntur ipsum repudiandae nobis vero amet asperiores magni
              expedita omnis id
            </p>
            <div className=" flex items-center gap-4 flex-wrap mt-10 md:gap-8">
              <span className=" text-gray-300 font-[600] text-[15px]">
                Follow Me :
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 text-center rounded-[50px] cursor-pointer">
                <a
                  className=" text-gray-300 font-[500] text-[18px]"
                  href="#github"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 text-center rounded-[50px] cursor-pointer">
                <a
                  className=" text-gray-300 font-[500] text-[18px]"
                  href="#instagram"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className=" w-[35px] h-[35px] bg-[#2b2d33] p-1 text-center rounded-[50px] cursor-pointer">
                <a
                  className=" text-gray-300 font-[500] text-[18px]"
                  href="#telegram"
                >
                  <i class="ri-telegram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className=" flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#Services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#Portfolio">
                portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    <div className=" bg-[#1b1e29] py-5 mt-14 ">
      <div className=" container">
        <div className=" flex justify-center items-center sm:justify-between">
          <div className="hidden sm:block">
            <div className="flex items-center gap-[10px]">
              <span
                className=" w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500
                                       text-[18px] flex items-center justify-center"
              >
                M
              </span>
              <div className=" leading-5">
                <h2 className="text-gray-200 font-[500] text-[18px]">
                  Mhossein
                </h2>
                <p className=" text-gray-400 font-[600] text-[14px]">
                  Personal
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-gray-400 text-[14px] ">
              copyright {year} developed by Mhossein - All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer1;
