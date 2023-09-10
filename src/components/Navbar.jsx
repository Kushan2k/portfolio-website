'use client'
import { HiMenuAlt3, HiRefresh } from 'react-icons/hi'
import { motion } from 'framer-motion' 
import { Navbar} from 'flowbite-react'

function NavbarDefault({isOpen,setOpen,ref,activeLink}) {

  
  
  function changeopne() {
    setOpen(!isOpen)
  }
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
          <Navbar.Link href="#" className={activeLink=='info'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Details
          </Navbar.Link>
          <Navbar.Link href="#" className={activeLink=='skills'?'text-blue-700 scale-110 text-xl':'text-xl'}>
            Stack
          </Navbar.Link>
          <Navbar.Link href="#" className={activeLink=='sportfolio'?'text-blue-700 scale-110 text-xl':'text-xl'}>
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
