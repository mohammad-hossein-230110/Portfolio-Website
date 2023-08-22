import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import Headerp from "./components/Header1/Headerp.jsx";
import Footer1 from "./components/Footer1/Footer1";
import Hero from "./components/UI/Hero.jsx";
import Services from "./components/UI/Services.jsx";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
    <Headerp/>
 <main>
    <Hero/>
     <Services/>
     <Portfolio/>
     <Contact/>
 </main>
 <Footer1/>
    </>
  );
}

export default App;
