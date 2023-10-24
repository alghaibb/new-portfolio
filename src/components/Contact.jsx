import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1552ad] flex justify-center items-center 
    p-4'>
      <form method='POST' action="https://getform.io/f/6607e740-e6f8-4aef-96b8-a3e4cabf127d" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or email me at mjaderi97@gmail.com</p>
        </div>
        <input className='p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2' type="email" placeholder='Email' name='email'/>
        <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-gray-300 border-2 hover:bg-red-400 hover:border-red-400 
        hover:scale-110 hover:-translate-y-1 hover:transition duration-300 ease-in-out px-4 py-3 my-8 mx-auto flex items-center'>Let's Collab</button>
      </form>
    </div>
  )
}

export default Contact