import React from 'react'
import workicon from "./image/workicon.png"
import educationicon from "./image/educationlogo.png"


export const Education = () => {
  return (
    <div className='bg' id='educationsection' >
      
        
  <div className='myeducation' data-aos="fade-right">
    <p className='para1111'>Learning is a lifelong journey</p>
    <p className='para1222'>Foundation of knowledge and skill</p>
    <p className='para1333'>My educational qualifications have laid a solid groundwork for my journey.</p>
    </div>

   <div className='fullexp'> 
    <h2 data-aos="fade-down" >EXPERIENCE</h2>
    <div className='allinonecard1'>
    <div className='experiencedetails'data-aos="fade-right" data-aos-delay="700">
        <p className='headd'><b>Experience</b></p>
        
        <div className='flex1'>
        <img src={workicon} />
        <hr/>
        <div className='flex2'>
        <p className='headname'><b>Ploxim Web Solutions</b></p>
        <p className='jobrole'><b>SEO Analyst</b></p>
        <p className='year'> <b>Apirl 2022 - May 2024</b></p>
        </div>
        </div>
        </div>
    </div>
    </div>

     
    <div className='education11'>
    <h2 data-aos="fade-down">EDUCATION</h2>

    <div className='fulledu'>
    <div className='allinonecard1'>
    <div className='experiencedetails' data-aos="fade-left" data-aos-delay="700">
        <p className='headd'><b>Education</b></p>
        
        <div className='flex1'>
        <img src={educationicon} />
        <hr/>
        <div className='flex2'>
        <p className='headname'> <b>VELS University</b></p>
        <p className='jobrole'><b>B.Tech (IT)</b></p>
        <p className='year'><b> 2016 - 2020</b></p>
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
        <p className='headname'><b> St Michael Higher Secondary School, Gingee</b></p>
        <p className='jobrole'><b>HSC</b></p>
        <p className='year'> <b>2015 - 2016 </b></p>
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
        <p className='headname'><b>SSV Higher secondary School, senthamangalam </b></p>
        <p className='jobrole'><b>SSLC </b></p>
        <p className='year'><b> 2013 - 2014 </b></p>
        </div>
        </div>
        </div>
 
    </div>
    </div>

    </div>
    </div>
  )
}
