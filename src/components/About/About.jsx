
import Image from 'next/image'
import {FiChevronRight} from 'react-icons/fi'
import AnimationWrapper, { Heading, NumberFacts, TechStack } from ".."
import me2 from '../../../public/images/me2.jpg'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'


export default function About({onchange}) {

  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'some', once: false })
  
  useEffect(() => {

    if (isVisible) {
      onchange("about")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return (
    <div id='about' ref={ref} className="w-[95%] p-4 m-4 bg-white md:w-[90%] mx-auto flex flex-col overflow-hidden  dark:bg-black ">
      

      <AnimationWrapper
        from={{
        x: -300,
        opacity: 0,
        }}
        to={
           {
            x: 0,
            opacity:1,
          }
         }
        transition={{
          bounce: true,
          duration:0.7
          
        }}
      >
        <Heading title={'About'}/>
        <p className='md:mb-[100px]'>
          Hello there! I am Kushan, a passionate Developer with a love for full stack development. I believe
          in the power of continous to drive meaningful
          change. Through my journey, I have honed my skills in full stack development, and I am dedicated to fulfill
          Your Goal.
        </p>


      </AnimationWrapper>

      
      <div className="p-4 grid grid-cols-1 items-center justify-center lg:grid-cols-2">
        <AnimationWrapper
        from={{
            scale: 0,
            opacity:0,
      }}
        to={{
            scale: 1,
            opacity:1
        }}
        
        transition={{
          bounce: true,
          duration: 0.5,
          delay:0.7
          
        }}
        
      
        >
        
        <Image
            //placeholder img
            // 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'
          src={me2}

          width={200}
          height={200}
          loading="lazy"
          className="rounded-md w-3/4 md:w-3/4 mb-6 mx-auto mt-3"

          alt='me'
              
            />
            
        
      </AnimationWrapper>
      <AnimationWrapper
        from={{
            x: -300,
            opacity:0,
        }}
        to={{
            x: 0,
            opacity:1,
        }}
        transition={{
          bounce: true,
          duration:0.7
          
        }}
        
      >
        <h4 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-t from-blue-900 to-blue-300">Full-Stack Developer</h4>
        <p>
          started with HTML,CSS to a full stack developer. i am passionate about developing web and mobile applications on your needs.
          leveling up my stack with Machine learning and Blockchain technologies.
        </p>

        <ul className="ml-2 mt-2 flex flex-col gap-y-2">
          <li className="flex items-center">
            <FiChevronRight color="blue"/>
            <span className="font-bold mr-2">
              
              LinkedIn:
            </span>
            <a  target="_blank" href="https://www.linkedin.com/in/kushan-gayantha-b2069b1a8/">Visit here</a>
          </li>
          <li className="flex items-center">
            <FiChevronRight color="blue"/>
            <span className="font-bold mr-2">
              
              Mobile:
            </span>
            (+94) 71-2720033
          </li>
          <li className="flex items-center">
            <FiChevronRight color="blue"/>
            <span className="font-bold mr-2">
              
              City:
            </span>
            Kurunegala,Sri Lanka
          </li>
          <li className="flex items-center">
            <FiChevronRight color="blue"/>
            <span className="font-bold mr-2">
              
              Mail:
            </span>
            kushangayantha001@gmail.com
          </li>
          <li className="flex items-center">
            <FiChevronRight color="blue"/>
            <span className="font-bold mr-2">
              
              Degree:
            </span>
            BSc in Engineering in Information and communication Engineering
          </li>
          
        </ul>
      </AnimationWrapper>
      </div>
      <hr />
      <NumberFacts />
      <hr />
      <TechStack />

    </div>
  )
}
