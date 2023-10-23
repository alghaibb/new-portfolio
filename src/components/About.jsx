import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e2e2e2]'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-black'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>
                Welcome!<br></br> 
                My name is Mahmoud,<br></br>  
                and I'm thrilled to have you here.
              </p>
            </div>
            <div>
             <p> I've always been captivated by the world of design, even from a young age when I 
              dabbled in Photoshop. As a Junior Full Stack Developer, I've found the perfect 
              canvas to blend my design sensibilities with intricate technical craftsmanship. 
              My journey began at a coding bootcamp where I acquired the skills to bring web pages 
              to life. I take pride in harmonizing aesthetics with functionality, creating digital 
              experiences that not only work flawlessly but also look stunning. I firmly believe 
              that technology holds the key to shaping a brighter online future, and I'm eager to 
              be a part of this transformative journey. Feel free to explore my portfolio, and 
              let's chat about crafting digital wonders together.</p> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default About