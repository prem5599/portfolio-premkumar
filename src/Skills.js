import React from 'react'
import figmalogo from "./image/figmalogo.png"
import photoshoplogo from "./image/photoshoplogo.png"
import canvalogo from "./image/canvalogo.png"
import bootstraplogo from "./image/Bootstarplogo.png"
import htmllogo from "./image/htmllogo.png"
import csslogo from "./image/csslogo.png"
import javascriptlogo from "./image/javascriptlogo.png"
import jqyerylogo from "./image/jquerylogo.png"
import githublogo2 from "./image/githublogo2.png"
import reactlogo from "./image/reactlogo.png"
import wordpresslogo from "./image/wordpresslogo.png"
import awslogo from "./image/awslogo.png"
import mypicss from "./image/mypicss.png"


export const Skills = () => {
  return (
    <div className='bg'id='skillssection' >
            <h2 className='skillshead' data-aos="fade-down" >MY SKILLS</h2>
  <div className='myskills' data-aos="fade-right">
    <p className='para1111'>Developement is Life</p>
    <p className='para1222'>I Develop Skills Regularly
    to Keep Me Update</p>
    <p className='para1333'>Most common methods for develop websites that work well on
desktop is responsive and adaptive design</p>
    </div>
    <div data-aos="flip-left"></div>

    <div className='alllree'>

    <div className='skillimages'>

    <div data-aos="flip-left" data-aos-delay="200"><img src={figmalogo} /></div>
    <div data-aos="flip-left" data-aos-delay="350"><img src={photoshoplogo} /></div>
    <div data-aos="flip-left" data-aos-delay="400"><img src={canvalogo} /></div>
    <div data-aos="flip-left" data-aos-delay="550"><img src={htmllogo} /></div>
    <div data-aos="flip-left" data-aos-delay="600"><img src={csslogo} /></div>
    <div data-aos="flip-left" data-aos-delay="750"><img src={javascriptlogo} /></div>
    <div data-aos="flip-left" data-aos-delay="900"><img src={bootstraplogo} /></div>
    <div data-aos="flip-left" data-aos-delay="1000"><img src={jqyerylogo} /></div>
    <div data-aos="flip-left" data-aos-delay="1100"><img src={githublogo2} /></div>
    <div data-aos="flip-left" data-aos-delay="1200"> <img src={reactlogo} /></div>
    <div data-aos="flip-left" data-aos-delay="1350"><img src={wordpresslogo} /></div>
    <div data-aos="flip-left" data-aos-delay="1500"> <img src={awslogo} /> </div>


    </div>

   
    </div>
    </div>
  )
}
