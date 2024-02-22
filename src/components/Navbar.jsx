"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink';
import {motion} from 'framer-motion';


const links =[
  {url: "/", title: "Home"},
  {url: "/about" ,title:"About"},
  {url: "/portfolio" ,title:"Portfolio"},
  {url: "/contact" ,title:"Contact"}
];


const Navbar = () => {
  const [open,setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate:  0,
    },
    opened: {
      rotate:  45,
      backgroundColor: "rgb(255,255,255)", // Removed leading space
    },
  };
  
  const centerVariants = {
    closed: {
      opacity:  1,
    },
    opened: {
      opacity:  0,
    },
  };
  
  const bottomVariants = {
    closed: {
      rotate:  0,
    },
    opened: {
      opacity:  1,
      rotate: -45, 
      backgroundColor: "rgb(255,255,255)", 
    },
  };
  




  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* links */}
        <div className='hidden md:flex text-black gap-4 w-1/3'>
          {links.map(link =>(
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      {/* logo part */}
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mt-1'>sanal</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      {/* logo part end */}
      {/* social media links */}
      <div className=' hidden md:flex gap-4 w-1/3'>
          <Link href="/">
              <Image src='/github.png' alt='github' width={24} height={24} />
          </Link>
          <Link href="/">
              <Image src='/linkedin.png' alt='linkedin' width={24} height={24} />
          </Link>
          <Link href="/">
              <Image src='/instagram.png' alt='instagram' width={24} height={24} />
          </Link>
          <Link href="/">
              <Image src='/facebook.png' alt='facebook' width={24} height={24} />
          </Link>
      </div>
      {/* social media links ends */}

      {/* responsive menu */}
      <div className='md:hidden'>

        {/* menu button */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() =>setOpen(!open)}>
          <motion.div
          variants={topVariants} 
          animate={open ? "opened" : "closed"}
           className='w-10 h-1 bg-black rounded origin-left'
           ></motion.div>
          <motion.div 
          variants={centerVariants} 
          animate={open ? "opened" : "closed"} 
          className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div 
          variants={bottomVariants} 
          animate={open ? "opened" : "closed"}
          className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>
        {open && (
              <div className='absolute top-3 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
              { links.map((link) =>(
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              ))}
        </div>
        )}
      
      </div>
    </div>
  )
}

export default Navbar