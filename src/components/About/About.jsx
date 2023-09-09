import { motion,useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export default function About() {

  const ref=useRef(null)
  const inview = useInView(ref, { amount: 'some' })
  const controls=useAnimation()
  
  useEffect(() => {
    if (inview) {
      console.log('view')
      controls.start('to')
    } else {
      controls.set('from')
    }
  },[inview])
  
  return (
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
        
      }}
      
      className="about p-4 m-4 bg-white" ref={ref}>
      <h2 className="text-left text-5xl font-bold font-mono pb-4 ">
        <span className="border-b-4 border-blue-800">About</span>
        
      </h2>
      <p>
        
        Hello there! I am Kushan, a passionate Developer with a love for full stack development. I believe
        in the power of continous to drive meaningful
        change. Through my journey, I have honed my skills in full stack development, and I am dedicated to fulfill
        Your Goal.
            
      </p>
    </motion.div>
  )
}
