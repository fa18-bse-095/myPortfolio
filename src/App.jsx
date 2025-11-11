// import React from 'react'
// import './index.css';

// import Hero from './components/Hero';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Feedback from './components/Feedback';
// import Works from './components/Works';
// import Tech from './components/Tech';
// import kite from "../src/Assets/pa.png"
// import kite from "../src/assets/pa.png"
// import Navbar from './components/Navbar';
// import { BrowserRouter } from 'react-router';
// import Hero from './components/Hero';
// import AboutMe from './components/AboutMe';
// import Technologies from './components/Technologies';
// import Experience from './components/Experience';
// import Project from './components/Project';
// import Contact from './components/Contact';

// const bgStyle={
//   backgroundImage :`url(${kite})`,
//   backgroundPosition: "center",
//   backgroundSize:"cover",
//   backgroundRepeat: "no-repeat",
//   width:"100%",
 
  
 
  

// };

// function App() {
//   return (
//     <>
//     <main className='overflow-hidden '>
//     <BrowserRouter>
//     <div style={bgStyle} className=' relative z-0  text-white container  '>
//     <div>
//       <Navbar/>
//       </div>
//       <div>
//         <Hero/>
//         <AboutMe/>
//         <Technologies/>
//         <Experience/>
//         <Project/>
//         <Contact/>
//       </div>
//       </div>
//     </BrowserRouter>

//    </main>

//     </>
    
//   );
// }

// export default App;

import React from 'react';
import kite from './assets/pa.png';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const bgStyle = {
  backgroundImage: `url(${kite})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

function App() {
  return (
    <main className="overflow-hidden">
      <div style={bgStyle} className="relative z-0 text-white pt-24">
        <Navbar />
        {/* Sections with IDs matching Navbar links */}
        <section id="home"><Hero /></section>
         <section id="about"><AboutMe /></section>
         <section id="technologies">
          <Technologies />
          
          
        </section>
        <section id="experience"><Experience /></section>
        <section id="project"><Project /></section>
       
       
        <section id="contact"><Contact /></section>
        

        <Footer />
      </div>
    </main>
  );
}

export default App;

