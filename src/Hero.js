import React from 'react'
import herobg from "./image/heroimage.png"
import linkedin from "./image/linkedinlogo.png"
import github from "./image/githublogo.png"
import mypic from "./image/mypic.png"






const Hero = () => {


const handleClick = () => {

  window.open('https://wa.me/+918939722775', '_blank');
};
   
  return (
    <div id='herosection'>        
       <div className="relative bg-cover bg-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen w-full"
  style={{ backgroundImage: `url(${herobg})` }}>

        
        <div className='totalhero'> 
                 <div className='herotext' data-aos="fade-right" data-aos-delay="500">   
           <p className='p1'>Hello, I'm</p>
           <p className='p2'>Premkumar</p>
           <p className='p3'> Crafting <span> Digital Experiences</span> </p>
           <p className='p4'>Frontend developer specializing in React and modern web technologies. Passionate about 
creating intuitive interfaces and exceptional user experiences that push the boundaries 
of what's possible on the web.</p>
           <div className='btnsection'> 
            <button onClick={handleClick}>Hire me </button>
            <div>
            <a href='https://www.linkedin.com/in/prem-kumar-410b301a5/'   target="_blank"
  rel="noopener noreferrer"><img src={linkedin} className='linkedinlogo'></img></a> <a href='https://github.com/prem5599'   target="_blank"
  rel="noopener noreferrer"> <img src={github} className='githublogo'></img></a>
            </div>
            </div>
           
            </div>
            
        

            <div className='mypic' data-aos="fade-left" data-aos-delay="1100">
              <img src={mypic}/>
              </div>
              </div>
              </div>
           
       

            
        
    </div>
  )
}

export default Hero