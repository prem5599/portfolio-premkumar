import React from 'react'
import cookproject from './image/cookproject.png'
import vookproject from './image/vookproject.png'
import dashboardproject from './image/stockmarketproject.png'
import beanlabproject from "./image/beanlabsproject.png"
import avixpressproject from "./image/Avixpressproject.png"
import massz from "./image/massz.png"
import restapi from "./image/Countries-Explorer-project.png"
import restapireact from "./image/Rest-countries-API-react.png"

function Works() {
  
  return (
    <div className='bg' id='myworkssection'>
      <div className='fullwork' >  
    <h2 className='workhead'  data-aos="fade-down">MY WORKS</h2>
  <div className='myworks' data-aos="fade-right">
    <p className='para1111'>Works</p>
    <p className='para1222'>My Amazing Works</p>
    <p className='para1333'>Most common methods for designing websites that work well on desktop is
    responsive and adaptive design</p>
    </div>

    <div class="wrap">
   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={cookproject} alt="Girl Eating Pizza"/>
      <div class="title-flex">
        <h3 class="box-title">Cook</h3>
        <p class="user-follow-info">Cook is a food recipes website with advance website cook is helps you.</p>
      </div>
      <p class="description">A responsive recipe website designed for seamless exploration of diverse culinary content across all devices.</p>
      <a href="https://prem5599.github.io/cook/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>
   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={vookproject} alt="Girl Eating Pizza"/>
      <div class="title-flex">
        <h3 class="box-title">Vook</h3>
        <p class="user-follow-info">Vook is a Hallowen based theme speaker selling website.</p>
      </div>
      <p class="description">Vook was designed by our UI/UX team and developed by me for the Web D event in just 2 hours.</p>
      <a href="https://prem5599.github.io/vook/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>
    
   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={dashboardproject} alt="Girl Eating Pizza"/>
      <div class="title-flex">
        <h3 class="box-title">Stockz</h3>
        <p class="user-follow-info">Stockz is a dashboard for Stockmarket portfolio.</p>
      </div>
      <p class="description">Dashboard for stock market portfolio built with Bootstrap, featuring JavaScript functions in the form section.</p>
      <a href="https://prem5599.github.io/stockmarketdashboard/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>

   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={massz} alt="Shopping_website"/>
      <div class="title-flex">
        <h3 class="box-title">Massz</h3>
        <p class="user-follow-info">Massz showcases elegant watches with cart functionality.</p>
      </div>
      <p class="description"> A dynamic e-commerce platform featuring a product catalog, shopping cart, and user authentication.</p>
      <a href="https://watch-shopping-react-prem.netlify.app/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>

   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={restapi} alt="Shopping_website"/>
      <div class="title-flex">
        <h3 class="box-title">REST Countries API</h3>
        <p class="user-follow-info"> A website to explore and save favorite countries worldwide.</p>
      </div>
      <p class="description"> A responsive country explorer website with modern gradient UI, animations, and interactive filtering features.</p>
      <a href="https://prem5599.github.io/REST-Countries/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>
   <div class="box">
    <span class="border-slide"></span>
    <span class="slide-overlay">
      <span class="slide-vertical"></span>
    </span>
    <div class="box-top">
      <img class="box-image" src={restapireact} alt="Shopping_website"/>
      <div class="title-flex">
        <h3 class="box-title">REST API (React)</h3>
        <p class="user-follow-info">GlobalView Seamless Country Navigation in Modern Design</p>
      </div>
      <p class="description">Modern React Application, Seamless Country Navigation, Beautiful UI, and Smooth State Management</p>
      <a href="https://watch-shopping-react-prem.netlify.app/" class="button112" target="_blank"  rel="noopener noreferrer">Visit Website</a>
    </div>
    </div>
  
  

</div>



    {/* <div className="container" data-aos="fade-up">
  <div className="project">
    <img src={cookproject} className="image" alt="Cooking Project" />
    <figcaption>
      "Responsive website for cooking recipes, designed for an optimal user experience across devices." <br/><a href="https://prem5599.github.io/cook/" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={vookproject} className="image" alt="Vook Project" />
    <figcaption>
      "Vook was designed by our UI/UX team and developed by me for the Web D event in just 3 hours." <br/> <a href="https://prem5599.github.io/vook/" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={dashboardproject} className="image" alt="Dashboard Project" />
    <figcaption>
      "Dashboard for stock market portfolio built with Bootstrap, featuring JavaScript functions in the form section." <br/>
      <a href="https://prem5599.github.io/stockmarketdashboard/" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={beanlabproject} className="image" alt="Beanlab Project" />
    <figcaption>
      "Beanlab: This project was created in the WebD event." <br/><a href="#" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={avixpressproject} className="image" alt="AviXpress Project" />
    <figcaption>
      "AviXpress: This project was created in the WebD event." <br/><a href="https://zamam-perm-abi-plane-website.netlify.app/" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  </div> */}
</div>

  


</div>


  )
}




export default Works