"use client"
import Link from 'next/link'
import React, { useState } from 'react'


const links =[
  {url: "/", title: "Home"},
  {url: "/about" ,title:"About"},
  {url: "/contact" ,title:"Contact"}
];


const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* logo part */}
      <div className=''>
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mt-1'>sanal</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>

      {/* responsive menu */}
      <div className=''>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
        onClick={() =>setOpen(!open)}>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
        </button>
        {open && (
              <div className='absolute top-3 left-0 v-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
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