'use client'
import './navbar.css'
import { useEffect } from 'react'
import { HiMenuAlt3, HiRefresh } from 'react-icons/hi'
import { motion,useAnimation } from 'framer-motion' 
import { Navbar} from 'flowbite-react'
import Link from 'next/link'

function NavbarDefault({isOpen,setOpen,ref,activeLink}) {

  const controls=useAnimation()
  
  
  function changeopne() {
    setOpen(!isOpen)
  }

  useEffect(() => {

    if (isOpen) {
      controls.start('show')
    } else {
      controls.start('start')
      
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  
  return (
    <div ref={ref} className="navbar h-16 flex md:flex-col items-center justify-end w-rounded-r-full z-50 pb-5 md:pb-0 dark:bg-black">
      
      <Navbar fluid className='w-full z-50 fixed h-16 hidden bg-gray-100 md:flex md:justify-between md:items-center dark:bg-black' >
        
        
        <Navbar.Collapse >
          <Navbar.Link
            // active={activeLink=='home'?true:false}
            href="#home"
            className={activeLink=='home'?'text-blue-700 scale-110 dark:text-white text-xl':'text-xl'}
            
          >
            
              Home
            
          </Navbar.Link>
          <Navbar.Link href="#about" className={activeLink=='about'?'text-blue-700 scale-110 text-xl dark:text-white':'text-xl'}  >
            About
          </Navbar.Link>
          <Navbar.Link href="#resume" className={activeLink=='resume'?'text-blue-700 scale-110 text-xl dark:text-white':'text-xl'}  >
            Resume
          </Navbar.Link>
          
          <Navbar.Link href="#portfolio" className={activeLink=='portfolio'?'text-blue-700 scale-110 text-xl dark:text-white':'text-xl'}>
            Portfolio
          </Navbar.Link>
          <Navbar.Link href="#services" className={activeLink=='services'?'text-blue-700 scale-110 text-xl dark:text-white':'text-xl'}>
            Services
          </Navbar.Link>
          <Navbar.Link href="#contacts" className={activeLink=='contacts'?'text-blue-700 scale-110 text-xl dark:text-white':'text-xl'}>
            Contacts
          </Navbar.Link>
        </Navbar.Collapse>
        
      </Navbar>

      <div className="hidden fixed w-3/4 border-b-2 border-blue-700  md:block"></div>
      
      <button onClick={changeopne} className='fixed mt-5 mr-3 md:hidden z-50 rounded-full bg-gradient-to-tr from-blue-700 to-blue-900 p-2 transition-transform hover:scale-110'>

        {
          isOpen ? <HiRefresh className='transition-opacity' size={35} color='white'/>:<HiMenuAlt3 className='transition-opacity' size={35} color='white' />
        }
        
        
      </button>

      <motion.div className="pop-up-nav fixed bottom-0 left-0 right-0 mx-auto  w-[90%] rounded-tr-lg rounded-tl-lg bg-blue z-50  flex items-center h-[50vh] md:hidden bg-white shadow-2xl dark:bg-gray-700"
      
        variants={{
          start: {
            
            y: 400,
            opacity:0
          },
          show: {
            
            y: 0,
            opacity:1
          },
          
          
        }}
        transition={{
          bounce: 1,
          duration:1
          
        }}

        initial='start'

        animate={controls}
      >
        <ul className='bottm-nav list-none flex flex-col w-full h-4/5 items-center justify-around'>
          <li className={activeLink=='home'?'active-link':''}>
            <Link href={'#home'}>Home</Link>
          </li>
          <li className={activeLink=='about'?'active-link':''}>
            <Link href={'#about'}>About</Link>
          </li>
          <li className={activeLink=='resume'?'active-link':''}>
            <Link href={'#resume'}>Resume</Link>
          </li>
          
          <li className={activeLink=='portfolio'?'active-link':''}>
            <Link href={'#portfolio'}>Portfolio</Link>
          </li>
          <li className={activeLink=='services'?'active-link':''}>
            <Link href={'#services'}>Services</Link>
          </li>
          <li className={activeLink=='contacts'?'active-link':''}>
            <Link href={'#contacts'}>Contacts</Link>
          </li>
          
        </ul>
        
      </motion.div>
    </div>
    
  )
}

export default NavbarDefault
