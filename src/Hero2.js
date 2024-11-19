import React from 'react'
import oneimg from "./image/res11.png"
import twoimg from "./image/res1.png"
import threeimg from "./image/res111.png"
import sideele1 from "./image/element1.png"


export const Hero2 = () => {
  return (
    <div className='bg'>
        <img src={sideele1} className='sideelement1'></img>
        <div className='compo'>
            <div className='first1'> 
            <div className='element' >
                <img src={oneimg} className='img1'></img>
            </div>
                <div className='textarea11'>
                    <p className='para1'>User-Centric Design</p>
                    <p className='para11'>Prioritizing intuitive, accessible layouts ensures a seamless experience tailored to user needs.</p>
                </div>
            </div>
            <div className='first2'>
                <div className='element2'>
                    <img src={twoimg} className='img1'></img>
                    <div className='textarea11'>
                        <p className='para1'>Responsive and Adaptive Layouts</p>
                        <p className='para11'>Crafting sites that fluidly adapt across devices delivers a consistent experience on any screen size.</p>
                    </div>

                </div>

            </div>
            <div className='first3'>
                <div className='element2'>
                    <img src={threeimg} className='img1'></img>
                    <div className='textarea11'>
                        <p className='para1'>Responsive and Adaptive Layouts</p>
                        <p className='para11'>Crafting sites that fluidly adapt across devices delivers a consistent experience on any screen size.</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
