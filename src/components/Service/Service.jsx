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
    title: 'full stack web developer',
    description:'i have been freelancing since 2020 as a full stack web developer helping my clients what they wanna achive. started using php as the backend but now i go for various technologies depending on the task to complete.'
    
  },
  {
    title: 'full stack web developer',
    description:'i have been freelancing since 2020 as a full stack web developer helping my clients what they wanna achive. started using php as the backend but now i go for various technologies depending on the task to complete.'
    
  },
]

export default function Service({onchange}) {
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'all', once: false })

  let delay=0.2
  
  useEffect(() => {

    if (isVisible) {
      onchange("portfolio")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  return (
    <div id="services" ref={ref} className="m-4  bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'My Services'} />
      


      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4">
        
        {
          myservices.map((resvice, index) => (
            <AnimationWrapper
              from={{
                opacity: 0,
                y:200
              }}
              to={{
                opacity: 1,
                y:0
              }}
              transition={{
                bouce: true,
                duration: 0.4,
                delay:delay*(index+1)
              }}
              key={index}>
              <Card
                className="w-[90%]  mx-auto"
                href="#"
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
