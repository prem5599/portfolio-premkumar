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
import Button from './Button';
import DownloadButton from './DownloadButton';
import CursorLight from './CursorLight';
import Navigation from './Navigation';



const StarryBackground = () => {
  return (
    <div className="stars">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="star"></div>
      ))}
    </div>
  );
};


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
    
       

<div className="stars">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="star"></div>
      ))}
      </div>

    
      <Navigation img={img} />
      {/* <nav>
        <div className='navbar'>
          <div className='navbg'>
            <div className='navlogo'>
              <img src={img}></img>
            </div>
            <div className='navmenu'>
              <ul>
             
                <a href='#' ><li>Home</li></a>
                <a href='#aboutsection'> <li>About</li></a>
                <a href='#myworkssection'><li>My Works</li></a>
                <a href='#skillssection'><li>My Skills</li></a>
                <a href='#educationsection'> <li>Education</li></a>
                <a href='#contactsection'><li> Contact</li></a>
                <li>  <DownloadButton   pdfURL="../../public/premkumar_portfolio.pdf"    fileName="Premkumar Resume.pdf"  /></li>
              </ul>

            </div>

          </div>

        </div>
      </nav> */}
   
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
