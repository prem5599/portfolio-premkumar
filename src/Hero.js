import React from 'react'
import herobg from "./image/heroimage.png"
import linkedin from "./image/linkedinlogo.png"
import github from "./image/githublogo.png"
import mypic from "./image/mypic.png"






const Hero = () => {

   
  return (
    <div>        
       <div className="relative bg-cover bg-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-screen w-full"
  style={{ backgroundImage: `url(${herobg})` }}>

        
        <div className='totalhero'> 
                 <div className='herotext' data-aos="fade-right" data-aos-delay="500">   
           <p className='p1'>Hello, I'm</p>
           <p className='p2'>Premkumar</p>
           <p className='p3'>A <span> Creative Developer</span>  From Chennai</p>
           <p className='p4'>I'm creative developer based in New York, and I'm very
           passionate and dedicated to my work.</p>
           <div className='btnsection'> 
           <button type='download'><a ahref='premkumar_portfolio.pds' download="Premkumar Resume">Hire me </a></button>
            <div>
            <a href='#'><img src={linkedin}></img></a> <a href='#'> <img src={github}></img></a>
            </div>
            </div>
           
            </div>
            
        

            <div className='mypic' data-aos="fade-up" data-aos-delay="1100">
              <img src={mypic}/>
              </div>
              </div>
              </div>
           
       

            
        
    </div>
  )
}

export default Hero