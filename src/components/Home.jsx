import React from 'react'
import amaal from '../assets/amaal.jpg'
//import heroImage from '../assets/heroImage.png'
import { Typewriter } from 'react-simple-typewriter';
import "react-simple-typewriter/dist/index";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mr-6">
      <div className='mr-40 '>
        <div className="flex flex-col justify-center h-full ">
          
          <h2 className="text-xl sm:text-3xl font-bold text-white ">
            I'm a Full Stack 
            <Typewriter
          loop
          cursor
          cursorStyle=' '
          typeSpeed={200} //ll wa9t nt3 lektiba
          deleteSpeed={50}
          delaySpeed={1000}
          words={[' web Developer',' IoT Developer']}
          />
          </h2>
         
          
          
          <p className="text-gray-500 py-4 max-w-md">
            
            I love to work on web application using technologies like
            React, Tailwind, Node JS and express JS.
          </p>

          <div>
            //
          </div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        
        { <div>
              <img src={amaal} alt='my profile' className='rounded-2xl mx-auto w-2/3 w-96 '/>  
  </div> }
  
     
        </div>
        
    </div>
    
  )
}

export default Home