import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function AnimationWrapper({ from, to, transition, children }) {
  
  const ref = useRef(null)
  const isview = useInView(ref, { once: false, amount: 'some' })
  const controls = useAnimation()

  useEffect(() => {

    if (isview) {
      controls.start('to')
    } else {
      controls.set('from')
    }
    
  },[isview])

  return (

    <motion.div
        
        variants={{
          from: from,
          to: to
        }}

        initial='from'
        animate={controls}

        transition={transition}
        
      className="about " ref={ref}>
      {children}
        </motion.div>
    
  )
}
