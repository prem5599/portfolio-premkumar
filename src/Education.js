import React from 'react'
import workicon from "./image/workicon.png"
import educationicon from "./image/educationlogo.png"


export const Education = () => {
  return (
    <div className='bg'>
      
        
  <div className='myeducation' id='educationsection' data-aos="fade-right">
    <p className='para1111'>Learning is a lifelong journey</p>
    <p className='para1222'>Foundation of knowledge and skill</p>
    <p className='para1333'>My educational qualifications have laid a solid groundwork for my journey.</p>
    </div>

    <div className='headwithcard'>
    <h2 data-aos="fade-down" >EXPERIENCE</h2>
    <div className='allinonecard1'>
    <div className='experiencedetails'data-aos="fade-right" data-aos-delay="700">
        <p className='headd'>Experience</p>
        
        <div className='flex1'>
        <img src={workicon} />
        <hr/>
        <div className='flex2'>
        <p className='headname'>Ploxim Web Solutions</p>
        <p className='jobrole'>SEO Analyst</p>
        <p className='year'> Apirl 2022 - May 2024</p>
        </div>
        </div>
        </div>
    </div>
    </div>
    <div className='education11'>
    <h2 data-aos="fade-down">EDUCATION</h2>

    
    <div className='allinonecard1'>
    <div className='experiencedetails' data-aos="fade-left" data-aos-delay="700">
        <p className='headd'>Education</p>
        
        <div className='flex1'>
        <img src={educationicon} />
        <hr/>
        <div className='flex2'>
        <p className='headname'>VELS University</p>
        <p className='jobrole'>B.Tech (IT)</p>
        <p className='year'> 2016 - 2020</p>
        </div>
        </div>
    </div>
    </div>
    
    <div className='allinonecard'>
    <div className='educationdetails' data-aos="fade-right" >
        
   
        <div className='flex11'>
        <img src={educationicon} />
        <hr/>
        <div className='flex22'>
        <p className='headname'>St Michael Higher Secondary School, Gingee</p>
        <p className='jobrole'>HSC</p>
        <p className='year'> 2015 - 2016</p>
        </div>
        </div>
        </div>
    </div>
    <div className='allinonecard'>
    <div className='educationdetails' data-aos="fade-left" >
        
   
        <div className='flex11'>
        <img src={educationicon} />
        <hr/>
        <div className='flex22'>
        <p className='headname'>SSV Higher secondary School, senthamangalam</p>
        <p className='jobrole'>SSLC </p>
        <p className='year'> 2013 - 2014</p>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
