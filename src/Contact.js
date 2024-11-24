import React from 'react'
import addressicon from "./image/addressicon.png"
import emailicon from "./image/emailicon.png"
import phoneicon from "./image/phoneicon.png"

export const Contact = () => {
  return (
    <div className='bg'>
        <h2 id='contactsection' data-aos="fade-down">CONTACT</h2>

<div className='education11'>    
    <div className='contacthead' data-aos="fade-right" data-aos-delay="200">
    <p className='para1111' id='contactsection' >Contact Me</p>
    <p className='para1222'>I Want To Hear From You</p>
    </div>

    <div className='contactform'>
    <div className='personaldetails' data-aos="fade-right" data-aos-delay="200">

        <div className='personaldetails1'> <img src={addressicon}/> <div><p className='headpersonaldetails'>Address</p> <p className='parapersonaldetails'>Chennai</p> </div> </div>

        
        <div className='personaldetails1'> <img src={emailicon}/><div><p className='headpersonaldetails'>Email</p> <p className='parapersonaldetails'>prem5599@gmail.com</p> </div> </div>
        <div className='personaldetails1'><img src={phoneicon}/><div><p className='headpersonaldetails'>Phone</p> <p className='parapersonaldetails'>+91 89397 22775</p>  </div> </div>
    </div>
    <div className='contactinputs' data-aos="fade-left" data-aos-delay="200">
        <form>
       <div className='row1'> 
         <input placeholder='Your Name'/>
        <input placeholder='Your Email'/> </div>
        <div className='row2'> 
        <input placeholder='Your Phone Number'/>
        <input placeholder='Subject'/> </div>
        <textarea placeholder='Type....'/>  
        <button>Submit</button>
        </form>
    </div>      
        </div>
    </div>
    </div>

    
  )
}
