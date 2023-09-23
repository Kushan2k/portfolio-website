import { useInView } from "framer-motion"
import { useRef,useEffect } from "react"
import AnimationWrapper, { Heading } from ".."
import { Card } from "flowbite-react"


const myservices = [
  {
    title: 'full stack web developer',
    description:'i have been freelancing since 2020 as a full stack web developer helping my clients what they wanna achive. started using php as the backend but now i go for various technologies depending on the task to complete.'
    
  },
  {
    title: 'adnroid app development',
    description:'i have more than 2+ years in android application development,using android studio/react native and flutter.'
    
  },
  {
    title: 'machine learning driven solutions',
    description:'i can provide machine learning driven solutions for your projects in need.'
    
  },
  {
    title: 'blochchain based web applications',
    description:'currently learning web3 development with blockchain.'
    
  },
]

export default function Service({onchange}) {
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'all', once: false })

  let delay=0.4
  
  useEffect(() => {

    if (isVisible) {
      onchange("services")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  return (
    <div id="services" ref={ref} className="m-4 mt-12 pb-10 bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'My Services'} />
      


      <div className="grid  grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4">
        
        {
          myservices.map((resvice, index) => (
            <AnimationWrapper
              from={{
                opacity: 0,
                y:100
              }}
              to={{
                opacity: 1,
                y:0
              }}
              transition={{
                bounce: true,
                duration: 0.4,
                delay:delay
              }}
              key={index}>
              <Card
                  className="w-[90%]  mx-auto h-40 py-3"
                  
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p className="capitalize">
                      {resvice.title}
                    </p>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p className="first-letter:capitalize">
                      {resvice.description}
                    </p>
                  </p>
              </Card>
            </AnimationWrapper>
          ))
        }
      
      </div>

      
    </div>
  )
}
