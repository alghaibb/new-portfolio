import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#e2e2e2]'>
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='font-semibold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Mahmoud Jaderi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Junior Full Stack Developer</h2>
        <p className='py-4 max-w-[700px]'>With a passion for creating innovative web applications and a strong commitment to continuous learning. 
          Throughout my journey as a student in a coding bootcamp, I've had the opportunity to explore the diverse 
          world of web development, from designing user-friendly interfaces to building robust server-side solutions. 
          My portfolio showcases a selection of projects that reflect my dedication to honing my technical skills 
          and my creative approach to problem-solving. I believe in the power of technology to transform the digital 
          landscape, and I'm excited to embark on a career in full stack development. Feel free to explore my work 
          and get in touch to discuss how I can contribute to your next project or collaborate on exciting ventures 
          in the tech world</p>
          <div>
            <button className='border-2 group border-gray-700 px-6 py-3 my-2 flex items-center hover:bg-[#1552ad] hover:border-[#1552ad] hover:text-white'>
              View Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Home