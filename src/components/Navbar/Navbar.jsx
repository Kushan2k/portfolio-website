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
    <div ref={ref} className="navbar h-16 flex md:flex-col items-center justify-end w-rounded-r-full pb-5 md:pb-0">
      
      <Navbar fluid className='w-full fixed h-16 hidden bg-gray-100 md:flex md:justify-between md:items-center ' >
        
        
        <Navbar.Collapse >
          <Navbar.Link
            // active={activeLink=='home'?true:false}
            href="#"
            className={activeLink=='home'?'text-blue-700 scale-110 text-xl':'text-xl'}
            
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link href="#about" className={activeLink=='about'?'text-blue-700 scale-110 text-xl':'text-xl'}  >
            About
          </Navbar.Link>
          <Navbar.Link href="#stats" className={activeLink=='stats'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Stats
          </Navbar.Link>
          <Navbar.Link href="#stack" className={activeLink=='stack'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Stack
          </Navbar.Link>
          <Navbar.Link href="#" className={activeLink=='portfolio'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Portfolio
          </Navbar.Link>
          <Navbar.Link href="#" className={activeLink=='services'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className={activeLink=='contacts'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Contacts
          </Navbar.Link>
        </Navbar.Collapse>
        
      </Navbar>

      <div className="hidden fixed w-3/4 border-b-2 border-blue-700  md:block"></div>
      
      <button onClick={changeopne} className='fixed mt-5 mr-3 md:hidden  rounded-full bg-gradient-to-tr from-blue-700 to-blue-900 p-2 transition-transform hover:scale-110'>

        {
          isOpen ? <HiRefresh className='transition-opacity' size={35} color='white'/>:<HiMenuAlt3 className='transition-opacity' size={35} color='white' />
        }
        
        
      </button>

      <motion.div className="pop-up-nav fixed bottom-0 left-0 right-0 mx-auto  w-[90%] rounded-tr-lg rounded-tl-lg bg-blue z-50  flex items-center h-[50vh] md:hidden bg-white shadow-2xl"
      
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
          <li className={activeLink=='stats'?'active-link':''}>
            <Link href={'#stats'}>Stats</Link>
          </li>
          <li className={activeLink=='stack'?'active-link':''}>
            <Link href={'#stack'}>Stack</Link>
          </li>
          <li className={activeLink=='sportfolio'?'active-link':''}>
            <Link href={'#sportfolio'}>Portfolio</Link>
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
