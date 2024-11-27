import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "./image/navlogo.png"
import Hero from './Hero';
import { Hero2 } from './Hero2';
import { About } from './About';
import Works from './Works';
import { Skills } from './Skills';
import { Education } from './Education';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import CursorLight from './CursorLight';
import Navigation from './Navigation';
import ShootingStars from './ShootingStars';



// const StarryBackground = () => {
//   return (
//     <div className="stars">
//       {[...Array(50)].map((_, index) => (
//         <div key={index} className="star"></div>
//       ))}
//     </div>
//   );
// };


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []); 


  return (
    <div className="App">
      
      <CursorLight />
      <ShootingStars starCount={100}/>
    
       

{/* <div className="stars">

      {[...Array(30)].map((_, index) => (
        <div key={index} className="star"></div>
      ))}
      </div> */}
    
      <Navigation img={img} />
      <Hero></Hero>
      <Hero2></Hero2>
      <About></About>
      <Works></Works>
      <Skills ></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
     
  );
}

export default App;
