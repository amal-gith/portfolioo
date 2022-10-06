import React from 'react'
import radess from '../assets/formation/radess.jpg';

import { Slide } from 'react-slideshow-image';

const Rades = () => {

  const slideImages=[
    {
      id:1,
      src:radess,
    },
   
  ]


  return (
    <div name="experience " className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
         
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                   <div >
                   <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline">
            IoT & Robotics Trainer 
          </p>

                   </div>
                   <div className="w-ful gap-8 text-center py-8 px-12 sm:px-0 ">
                    {  /* hethi ll grid eli feha etsawer */   }
                 <div className="shadow-gray-500 py-2 rounded-lg bg-gray-500 h-96 w-screen mr-80">
                  
                  <div className=" mx-auto ml-4  w-80 h-80">
                    <div>
                  
                    <div>
                      
                 <img src= {radess} alt='' className='h-80 rounded-lg w-96 mt-6' />    </div>
                 
                 
                 </div>
                 </div>

                  <div className='-mt-60' >
                    <p className='text-xl font-bold text-white sm:text-3xl mb-9'>Trainer</p> </div>
                  
                  <div className='text-lg ml-10'> 
                  the training is organized by Complexe des Jeunes Maghrebins with the participation of 24 Tunisian regions
                    <li>I am a trainer in IoT and robotics at the Complexe des Jeunes Maghrebins</li>
                    
                     
                   
                   </div>
                                  
                 </div>
                 </div> 
        </div> 
   </div>
   
  )

}




export default Rades





