import { useInView } from "framer-motion"
import { useRef,useEffect } from "react"
import { Heading } from ".."

export default function Service({onchange}) {
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'all', once: false })
  
  useEffect(() => {

    if (isVisible) {
      onchange("portfolio")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  return (
    <div id="services" ref={ref} className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'My Services'} />
      
    </div>
  )
}
