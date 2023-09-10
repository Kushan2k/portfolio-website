import { motion,useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from 'next/image'
import {FiChevronRight} from 'react-icons/fi'


export default function About() {

  const ref = useRef(null)
  const stackref=useRef(null)
  const imgREf = useRef(null)
  const imgInView = useInView(imgREf, { amount: 'some', once: false })
  const stackinView=useInView(stackref,{once:false,amount:'some'})
  const imgControls=useAnimation()
  const inview = useInView(ref, { amount: 'some',once:false })
  const controls = useAnimation()
  const stackControls=useAnimation()
  
  useEffect(() => {
    if (inview) {
      
      controls.start('to')
    } else {
      controls.set('from')
    }
  }, [inview])
  
  useEffect(() => {
    
    if (imgInView) {
      
      
      imgControls.start('to')
    } else {
      imgControls.set('from')
    }
  }, [imgInView])
  
  useEffect(() => {
    
    if (stackinView) {
      
      
      stackControls.start('to')
    } else {
      stackControls.set('from')
    }
  },[stackinView])
  
  return (
    <div className="p-4 m-4 bg-white md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2">
      <motion.div
        
        variants={{
          from: {
            x: -300,
            opacity:0,
          },
          to: {
            x: 0,
            opacity:1,
          }
        }}

        initial='from'
        animate={controls}

        transition={{
          bounce: true,
          duration:0.7
          
        }}
        
        className="about " ref={ref}>
        <h2 className="text-left text-5xl font-extrabold font-mono pb-4 text-transparent bg-clip-text bg-gradient-to-tr from-black  to-gray-100">
          About
          
        </h2>
        <p>
          Hello there! I am Kushan, a passionate Developer with a love for full stack development. I believe
          in the power of continous to drive meaningful
          change. Through my journey, I have honed my skills in full stack development, and I am dedicated to fulfill
          Your Goal.
        </p>
      </motion.div>
      
      <motion.div
        ref={imgREf}
        variants={{
          from: {
            scale: 0,
            opacity:0,
          },
          to: {
            scale: 1,
            opacity:1
          }
        }}
        initial='from'
        transition={{
          bounce: true,
          duration: 0.5,
          delay:0.7
          
        }}
        
      animate={imgControls}
      
      className="p-4"

        
      >

        <Image

          src={'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg'}

          width={200}
          height={200}
          loading="lazy"
          className="rounded-md w-3/4 md:w-full mb-6 mx-auto"

          alt='me'
              
      />
      
      
      </motion.div>

      <motion.div
        
        ref={stackref}
        variants={{
          from: {
            x: -300,
            opacity:0,
          },
          to: {
            x: 0,
            opacity:1,
          }
        }}

        initial='from'
        animate={stackControls}

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

      </motion.div>

    </div>
  )
}
