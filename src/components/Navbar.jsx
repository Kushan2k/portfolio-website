'use client'

import { useState } from 'react'
import { HiMenuAlt3, HiRefresh } from 'react-icons/hi'
import { motion } from 'framer-motion' 

function NavbarDefault({isOpen,setOpen,ref}) {

  
  
  function changeopne() {
    setOpen(!isOpen)
  }
  return (
    <div ref={ref} className="navbar h-16 flex items-center justify-end w-rounded-r-full pb-5 md:pb-0">
      <ul className='hidden justify-between items-center w-2/5 md:flex '>
        <li>Main</li>
        <li>Home</li>
        <li>Home</li>
        <li className='mr-5'>Home</li>
      </ul>
      <button onClick={changeopne} className='mt-5 mr-3 md:hidden  rounded-full bg-gradient-to-tr from-blue-700 to-blue-900 p-2 transition-all hover:scale-110'>

        {
          isOpen ? <HiRefresh className='transition-opacity' size={35} color='white'/>:<HiMenuAlt3 className='transition-opacity' size={35} color='white' />
        }
        
        
      </button>

      {
        isOpen ? (
          <motion.div className="pop-up-nav fixed bottom-0 left-0 right-0 mx-auto  w-[90%] rounded-tr-lg rounded-tl-lg bg-blue z-50  flex items-center h-[40vh] md:hidden bg-white"
      
        variants={{
          start: {
            y: 400,
            opacity:0
          },
          show: {
            y: 0,
            opacity:1
          }
          
        }}
        transition={{
          bounce: 1,
          duration:1
          
        }}

        initial='start'

        animate='show'
      >
        <ul className=' list-none flex flex-col w-full h-3/4 items-center justify-around'>
          <li>Main</li>
          <li>Main</li>
          <li>Main</li>
          <li>Main</li>
        </ul>
        
      </motion.div>
        ):null
      }
    </div>
    
  )
}

export default NavbarDefault
