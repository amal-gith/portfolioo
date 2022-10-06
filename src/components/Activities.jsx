import React from 'react'

import hackaton3 from '../assets/hackathon/hackaton3.PNG';
import { Slide } from 'react-slideshow-image';

const Activities = () => {

  const slideImages=[
    
    {
      id:3,
      src:hackaton3,
    }
  ]


  return (
    <div name="activities " className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
      
         
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mb-11">
            Activities
          </p>
              
                   <div >
                   <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline">
            Hackathon
          </p>

                   </div>
                   <div className="w-ful gap-8 text-center py-8 px-12 sm:px-0 ">
                    {  /* hethi ll grid eli feha etsawer */   }
                 <div className="shadow-gray-500 py-2 rounded-lg bg-gray-500 h-96 w-screen mr-80">
                  
                  <div className=" mx-auto ml-4  w-80 h-80">
                    <div>
                  
                    <div>
                      
                 <img src= {hackaton3} alt='' className='h-80 rounded-lg w-96 mt-6' />    </div>
                 
                 
                 </div>
                 </div>

                  <div className='-mt-60' >
                    <p className='text-xl font-bold text-white sm:text-3xl'>Third place at "BALADIATech" Hackathon</p> </div>
                  
                  <div className='text-lg'>The hackthon was organized by Smart Tunisian Technoparks and Ras Jbal's municipality
                    <li>The best idea to rationalize the consumption of electrical energy in the streets</li>
                    <li>Reliance on smart lighting project in the streets</li>
                    <li>the municipality can monitor the level of Energy saving by web application </li>
                     <li> Smart lights that can turn on and off in an autonomous way </li>
                     
                   
                   </div>
                                  
                 </div>
                 </div> 
        </div> 
   </div>
   
  )

}

{/*       //////////////////////////// */}


{/*   /////////////////////////// */}





export default Activities








































 


/*



  <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `src(${slideImage.src})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
*/

