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

        
        <div className='personaldetails1'> <img src={emailicon}/><div><p className='headpersonaldetails'>Email</p> <p className='parapersonaldetails'> <a href='https://mail.google.com/mail/u/0/?to=prem5599@gmail.com&su=SUBJECT&body=BODY&bcc&fs=1&tf=cm' target="_blank"
  rel="noopener noreferrer"> prem5599@gmail.com </a></p>  </div> </div>
        <div className='personaldetails1'><img src={phoneicon}/><div><p className='headpersonaldetails'>Phone</p> <p className='parapersonaldetails'>  <a href='tel:+91 89397 22775' target="_blank"
  rel="noopener noreferrer">+91 89397 22775 </a></p>  </div> </div>
    </div>
    <div className='contactinputs' data-aos="fade-up" data-aos-delay="200">
        <form action='https://docs.google.com/forms/d/e/1FAIpQLSdWERfJwJKq1jelgNaOmAYB6PlCfzsCybr2pS82YUT-Kyrv2A/formResponse?usp=pp_url&' method='post'>
       <div className='row1'> 
         <input name='entry.574034737' placeholder='Your Name'/>
        <input name='entry.1231391069' placeholder='Your Email'/> </div>
        <div className='row2'> 
        <input name='entry.95060180' placeholder='Your Phone Number'/>
        <input name='entry.314117180' placeholder='Subject'/> </div>
        <textarea name='entry.1427667376' placeholder='Type....'/>  
        <button acc>Submit</button>
        </form>
    </div>      
        </div>
    </div>
    </div>

    
  )
}
