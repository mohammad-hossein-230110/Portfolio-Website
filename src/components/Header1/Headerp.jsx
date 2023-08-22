import React,{useRef,useEffect}  from 'react'
import "../../App.css";
const Headerp = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = ()=>{
window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
              headerRef.current.classList.add('sticky__Header')
            } else{
              headerRef.current.classList.remove('sticky__Header')
            }
})
  }

 useEffect(()=>{
          
  stickyHeaderFunc()

  return window.removeEventListener('scroll',stickyHeaderFunc)

 },[])

 const handleClick = e=>{

   e.preventDefault()

   const targetattr = e.target.getAttribute('href')
   const location = document.querySelector(targetattr).offsetTop

  window.scrollTo({

    top:location - 80,
    left:0,
  });


 };
 const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return (
     <header
     ref={headerRef}
     className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
      <div className=" flex  items-center justify-between">
        {/* ======logo==========*/}
        <div className="flex items-center gap-2">
          <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] 
                           rounded-full flex items-center justify-center">M</span>
          <div className=" leading-[20px]">
            <h2 className=" text-smalltextColor text-xl font-[700]">Mhossein</h2>
            <p className=" text-smalltextColor text-[14px] font-[500]">Personal</p>
            </div>                 
        </div>
         {/* ======logo end==========*/}
         {/*=============menu start============ */}

                   <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className=" flex items-center gap-10">
                      <li><a onClick={handleClick} className="text-smalltextColor font-[600]" href="#About">About</a></li>
                      <li><a onClick={handleClick} className="text-smalltextColor font-[600]" href="#Services">Services</a></li>
                      <li><a onClick={handleClick} className="text-smalltextColor font-[600]" href="#Portfolio">portfolio</a></li>
                      <li><a onClick={handleClick} className="text-smalltextColor font-[600]" href="#Contact">Contact</a></li>
                    </ul>
                   </div>
         {/*=============menu end============ */}
         {/*=============menu right============ */}
         <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 font-[600] text-smalltextColor border border-solid border-smalltextColor
                               max-h-[40px] py-2 px-4 rounded-[8px] hover:bg-smalltextColor hover:text-white
                                hover:font[500] ease-in duration-200">
          <i class="ri-send-plane-line"></i>Let's Talk
          </button>
          <span onClick={toggleMenu} className="text-2xl text-smalltextColor md:hidden cursor-pointer">
          <i class="ri-menu-line"></i>
          </span>
         </div>

         {/*=============menu end============ */}


        </div>
      </div>
     </header>
  )
}

export default Headerp
