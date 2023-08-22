import React,{useEffect,useState} from 'react';
import data from "../../assets/PortfolioData/portfolioData.js";
import Modal from './Modal.jsx';

const Portfolio = () => {

const[nextItems,setNextItems]=useState(6);
const[portfolios,setPortfolios]=useState(data);
const[selectTab,setSelectTab]=useState("all");
const[activeID,setActiveID]=useState(null);
const[showModal,setShowModal]=useState(false);

const showModalHandler = id=>{

        setShowModal(true);
        setActiveID(id);
}

useEffect(()=>{

if(selectTab==="all"){
    setPortfolios(data);
}
if(selectTab==="web-design"){
    const filterdData = data.filter(item=>item.category==="Web Design");
    setPortfolios(filterdData);
}
if(selectTab==="ux-design"){
    const filterdData = data.filter(item=>item.category==="Ux");
    setPortfolios(filterdData);
}


},[selectTab]);


const loadMorehandlre = ()=>{
 setNextItems(prev=>prev+3);

}

  return (
    <section id="Portfolio">
        <div className=" container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className=" text-headingColor text-[2rem] font-[700]">My recent projects</h3>
                </div>
                <div  className="flex gap-3">
                    <button onClick={()=>setSelectTab("all")} className=" text-smalltextColor border border-solid border-smalltextColor 
                                           py-2 px-4 rounded-[8px] font-[500] ">
                    All</button>
                    <button onClick={()=>setSelectTab("web-design")} className=" text-smalltextColor border border-solid border-smalltextColor 
                                           py-2 px-4 rounded-[8px] font-[500] ">
                    Web Design</button>
                    <button onClick={()=>setSelectTab("ux-design")} className=" text-smalltextColor border border-solid border-smalltextColor 
                                           py-2 px-4 rounded-[8px] font-[500] ">
                    UX Design</button>
                </div>

            </div>
            <div className="flex items-center gap-4 flex-wrap mt-12">
                  {
                    portfolios?.slice(0,nextItems)?.map((portfolio,index)=>(
                        <div
                        key={index}
                        data-aos="fade-zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="50"
                        className=" group max-w-full sm:w-[48.2%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                             <figure>
                                <img className="rounded-[8px]" src={portfolio.imgUrl} alt=""></img>
                             </figure>
                             <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                 hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                  <button onClick={()=>showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smalltextColor py-2 px-4
                                                    rounded-[8px] font-[500] ease-in duration-200">
                                    See details
                                  </button>
                                </div>
                             </div>
                        </div>
                        
                    ))
                  }    
            </div>
            <div className=" text-center mt-6">

                   {
                     nextItems <portfolios.length && data.length > 6 && (
                      
                        <button onClick={loadMorehandlre} className="text-white mb-6 bg-headingColor hover:bg-smalltextColor py-2 px-4 rounded-[8px]
                        font-[500] ease-in duration-200"> 
                         Load More
                        </button>
                     )
                   }

               
            </div>
        </div>
       {

          showModal && <Modal activeID={activeID} setShowModal={setShowModal}/>

       }
    </section>
  )
}

export default Portfolio
