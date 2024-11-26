import React from 'react'
import mypicss from "./image/mypicss.png"
import DownloadButton from './DownloadButton';

export const About = () => {
  
  return (
    <div className='bg' id='aboutsection'>
        <h2  data-aos="fade-down">ABOUT</h2>

        <div className='allabout'>

        <div className='bgimagee'>
    <div className="glow-container">
      <div className="glow-square" data-aos="fade-right">
        <img  src={mypicss} className='mypiccss'/>
      </div>
    </div>
    </div>
      <div className='aboutme' data-aos="fade-down" >
        <p className='para111'>I'm a Developer</p>
        <p className='para122'>Crafting Websites That Both Users & Search Engines Love</p>
        <p className='para133'> Hi, I'm Premkumar, a Front-End Developer based in Chennai with a passion for creating seamless web experiences. With a strong foundation in HTML, CSS, and JavaScript, I've successfully transitioned from a non-IT background to tech, driven by my enthusiasm for digital innovation.<br/><br/>
My 2-year tenure as an SEO Analyst has given me a unique edge in developing search-optimized, user-centric websites. I combine my technical skills in React and Bootstrap with my SEO expertise to build modern web solutions that not only look great but also perform well in search rankings.<br/><br/> 
Currently expanding my skill set through formal front-end development training, I'm always eager to take on new challenges and create impactful digital solutions. Let's build something amazing together!</p>
    <DownloadButton/>
        </div>
        </div>


    </div>
  )
}
