import CountUp from "react-countup";
import AnimationWrapper, { Heading } from "..";
import { FiSmile, FiCheckCircle } from 'react-icons/fi'
import { Card } from 'flowbite-react'



export default function NumberFacts() {

  
  
  return (
    <div id="stats" className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">

      <Heading title={'Info'} />
      <div
      
      >
        <p className="mx-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex maiores voluptatibus delectus non reiciendis impedit asperiores beatae facilis nam magni? Inventore minima ab iusto facere quis obcaecati nisi, distinctio quam!
        </p>

        <div className="mt-4 grid items-center gap-y-4 md:gap-x-2 justify-evenly grid-cols-1 md:grid-cols-3">

          <AnimationWrapper from={{scale:0,opacity:0}} to={{scale:1,opacity:1}} transition={{delay:0.2,duration:0.4}} >
            <Card className="w-[90%] mx-auto md:w-full   h-40  transition-transform   hover:cursor-pointer hover:scale-110">
            <div className="item flex items-center justify-center">
              <FiSmile size={40} color="#23ef" />
              <div className="m-4 flex flex-col items-start justify-start">
                <h3 className="text-4xl font-[900]">
                  <CountUp end={5} duration={3} />
                </h3>
                <p>
                  <span className="font-bold">Happy Clients </span>
                  from past projects
                </p>
              </div>
              
            </div>
          </Card>
          </AnimationWrapper>

          <AnimationWrapper from={{scale:0,opacity:0}} to={{scale:1,opacity:1}} transition={{delay:0.3,duration:0.4}}>
            <Card className="w-[90%] mx-auto md:w-full  h-40 transition-transform   hover:cursor-pointer hover:scale-110">
            <div className="item flex items-center justify-center">
              <FiCheckCircle size={40} color="#23ef" />
              <div className="m-4 flex flex-col items-start justify-start">
                <h3 className="text-4xl font-[900]">
                  <CountUp end={10} duration={4} />
                </h3>
                <p>
                  <span className="font-bold">Completed </span>
                  projects
                </p>
              </div>
            
            
            </div>
          </Card>
          </AnimationWrapper>
          
          <AnimationWrapper from={{scale:0,opacity:0}} to={{scale:1,opacity:1}} transition={{delay:0.4,duration:0.4}}>
            <Card className="w-[90%] mx-auto md:w-full  h-40  transition-transform   hover:cursor-pointer hover:scale-110">
            <div className="item flex items-center justify-center">
              <FiSmile size={40} color="#23ef" />
              <div className="m-4 flex flex-col items-start justify-start">
                <h3 className="text-4xl font-[900]">
                  <CountUp end={5} duration={3} />
                </h3>
                <p>
                  <span className="font-bold">Happy Clients </span>
                  from past projects
                </p>
              </div>
              
            </div>
          </Card>
          </AnimationWrapper>
        </div>
        



      </div>

    </div>
  )
}
