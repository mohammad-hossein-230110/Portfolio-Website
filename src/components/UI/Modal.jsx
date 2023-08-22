  import React from 'react'
  import portfolios from '../../assets/PortfolioData/portfolioData'
  
  const Modal = ({activeID,setShowModal}) => {

  const portfolio  = portfolios.find(portfolio=>portfolio.id===activeID);

    return (
      <div className=" h-full w-full fixed top-0  left-0 z-10 bg-headingColor bg-opacity-40">
        <div className="w-11/12 md:max-w-[600px] md:w-full absolute bg-white top-1/2 left-1/2 mt-9 rounded-[8px] transform
         -translate-x-1/2 -translate-y-1/2 z-20 p-5">
          <div>
             <figure>
                  <img className="rounded-[8px]" src={portfolio.imgUrl} alt=""></img>
             </figure>
          </div>
           
          <div>
          <h2 className=" text-headingColor text-2xl font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smalltextColor">
            {portfolio.description}
          </p>
          <div className=" mt-5 flex items-center flex-wrap gap-3 ">
            <h4 className=" text-headingColor font-[700] text-[18px]">
                Technologies :      
            </h4>
            {
              portfolio.technologies.map((item , index)=>(
                
                <span className=" py-1 px-2 bg-gray-200 rounded-[5px] text-[14px]">{item}</span>

              ))
            }
          </div>
           <a href={portfolio.siteUrl}>
                <button className=" bg-primaryColor rounded-[8px] py-2 px-4 mt-4 text-white font-[500]
                                        hover:bg-headingColor ease-in duration-300   ">Live Site

                </button>
           </a>
        </div>
           <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-white text-[25px] right-[1.7rem] top-[1.7rem] absolute
                               rounded-[3px] flex items-center justify-center leading-0 cursor-pointer ">&times;</button>
        </div>
      </div>
    )
  }
  
  export default Modal
  