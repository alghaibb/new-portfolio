import React from 'react'

// Importing project images
import readmeImg from '../assets/readmeImg.png'
import pwgenImg from '../assets/pwgenImg.png'
import recipefinderImg from '../assets/recipefinderImg.png'
import schedulerImg from '../assets/schedulerImg.png'

const Projects = () => {
  return (
    
    <div name='projects' className='w-full md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl text-gray-900 font-bold inline border-b-4 border-gray-900'>Projects</p>
          <p className='py-6 text-gray-900'>Here are some of my recent projects</p>
        </div>
        
        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/* card container */}
          <div style={{backgroundImage: `url(${readmeImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
          items-center mx-auto content-div'>
            
            {/* Hover fx */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                  Node JS App
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://vimeo.com/876988086?share=copy#t=0">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Video Demo</button>
                  </a>
                  <a href="https://github.com/alghaibb/readme-wizard">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
          
          {/* card container */}
          <div style={{backgroundImage: `url(${pwgenImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
          items-center mx-auto content-div'>
            
            {/* Hover fx */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                  JavaScript App 
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://alghaibb.github.io/password-gen/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/alghaibb/password-gen">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
          
          {/* card container */}
          <div style={{backgroundImage: `url(${recipefinderImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
          items-center mx-auto content-div'>
            
            {/* Hover fx */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                  JavaScript App 
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://alghaibb.github.io/project1-grp3/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/alghaibb/project1-grp3">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
          
          {/* card container */}
          <div style={{backgroundImage: `url(${schedulerImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
          items-center mx-auto content-div'>
            
            {/* Hover fx */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-gray-300 tracking-wider'>
                  JavaScript App 
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://alghaibb.github.io/homework-4/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/alghaibb/homework-4">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects