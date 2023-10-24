import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#1552ad] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo image" style={{width: '60px'}}/>
      </div>
      
      {/* menu */}
      <ul className='hidden md:flex text-gray-300'>
        <li className='no-underline hover:underline'>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='no-underline hover:underline'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='no-underline hover:underline'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='no-underline hover:underline'>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='no-underline hover:underline'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1552ad] flex flex-col justify-center items-center'}>
        <li className='pt-6 text-4xl no-underline hover:underline'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='pt-6 text-4xl no-underline hover:underline'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='pt-6 text-4xl no-underline hover:underline'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='pt-6 text-4xl no-underline hover:underline'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='pt-6 text-4xl no-underline hover:underline'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#013cff]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Linkedin <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar