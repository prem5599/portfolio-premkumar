import React from 'react'
import herobg from "./image/heroimage.png"
import linkedin from "./image/linkedinlogo.png"
import github from "./image/githublogo.png"
const Hero = () => {
  
  return (
    <div>        
        <div       style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
>         <div className='herotext'>   
           <p className='p1'>Hello, I'm</p>
           <p className='p2'>Premkumar</p>
           <p className='p3'>A <span> Creative Developer</span>  From Chennai</p>
           <p className='p4'>I'm creative developer based in New York, and I'm very
           passionate and dedicated to my work.</p>
           <div className='btnsection'> 
           <a href='#'><button>Hire me</button></a>
            <div>
            <a href='#'><img src={linkedin}></img></a> <a href='#'> <img src={github}></img></a>
            </div>
            </div>
            </div>
            </div>          
        
    </div>
  )
}

export default Hero