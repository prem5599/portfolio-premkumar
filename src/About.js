import React from 'react'
import mypicss from "./image/mypicss.png"
import DownloadButton from './DownloadButton';

export const About = () => {
  const handleClick = () => {

    window.open('https://wa.me/8939722775', '_blank');
  };
  return (
    <div className='bg'>
        <h2 id='aboutsection' data-aos="fade-down">ABOUT</h2>

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
        <p className='para122'>I Can Design And Develope Anything
        You Want</p>
        <p className='para133'> I am a passionate Front-End Web Developer with over 2 years of experience in SEO, specializing in creating visually engaging, user-friendly websites that deliver seamless experiences across all devices. My expertise includes HTML, CSS, JavaScript, and React, along with a solid foundation in responsive design, cross-browser compatibility, and SEO best practices. I am dedicated to building dynamic, accessible web solutions that enhance both user engagement and visibility.</p>
    <DownloadButton/>
        </div>
        </div>


    </div>
  )
}
