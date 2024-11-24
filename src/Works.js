import React from 'react'
import cookproject from './image/cookproject.png'
import vookproject from './image/vookproject.png'
import dashboardproject from './image/stockmarketproject.png'
import beanlabproject from "./image/beanlabsproject.png"
import avixpressproject from "./image/Avixpressproject.png"

function Works() {
  return (
    <div className='bg'>
      <div className='fullwork' >  
    <h2 className='workhead' id='myworkssection' data-aos="fade-down">MY WORKS</h2>
  <div className='myworks' data-aos="fade-right">
    <p className='para1111'>Works</p>
    <p className='para1222'>My Amazing Works</p>
    <p className='para1333'>Most common methods for designing websites that work well on desktop is
    responsive and adaptive design</p>
    </div>

    <div className="container" data-aos="fade-up">
  <div className="project">
    <img src={cookproject} className="image" alt="Cooking Project" />
    <figcaption>
      "Responsive website for cooking recipes, designed for an optimal user experience across devices." <br/><a href="#" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={vookproject} className="image" alt="Vook Project" />
    <figcaption>
      "Vook was designed by our UI/UX team and developed by me for the Web D event in just 3 hours." <br/> <a href="#" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  <div className="project">
    <img src={dashboardproject} className="image" alt="Dashboard Project" />
    <figcaption>
      "Dashboard for stock market portfolio built with Bootstrap, featuring JavaScript functions in the form section." <br/>
      <a href="#" className='linkyy'><button className='butoom'> Visit Now </button></a>
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
      "AviXpress: This project was created in the WebD event." <br/><a href="#" className='linkyy'><button className='butoom'> Visit Now </button></a>
    </figcaption>
  </div>
  </div>
</div>

  


</div>
  )
}

export default Works