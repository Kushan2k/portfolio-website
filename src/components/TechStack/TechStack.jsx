import ProgressBar from "@ramonak/react-progress-bar";
import AnimationWrapper, { Heading } from "..";


const stacks = [
  {
    name: 'HTML',
    level: '95%',
    delay:0.2,
  },
  {
    name: 'Python',
    level: '85%',
    delay:0.3,
  },
  {
    name: 'CSS',
    level: '90%',
    delay:0.4,
  },
  {
    name: 'Java',
    level: '80%',
    delay:0.5,
  },
  {
    name: 'Javascript',
    level: '90%',
    delay:0.6,
  },
]

export default function TechStack() {
  return (
    <div id="stack" className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'My Stack'} />
      <p className="mx-4">
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        Started with HTML and CSS now i'm in the field of full stack development web and mobile within the process to learning Machine Learning,Neural networks and Blockchain associated development with smart contracts.
      </p>
      <div className="m-4 p-2 w-full md:w-3/4 gap-y-2  mx-auto  flex flex-col items-center justify-start">
        {
          stacks.map(stack => {
            return (
              <AnimationWrapper
                
                from={{
                  scale: 0,
                  opactiy:0
                }}
                to={{
                  scale: 1,
                  opactiy:1
                }}
                transition={{
                  duration: 0.4,
                  delay: stack.delay,
                  dounce:true
                }}
                
                key={stack.id}>
                <div className="w-full  p-3 rounded-r-lg border">
                <p className="py-2">{stack.name}</p>
                <ProgressBar
                  className='w-full'
                  
                  completed={parseInt(stack.level.split('%')[0])}
                  bgColor="#2b66c5"
                  baseBgColor="#d2daf4"
                  labelColor="#f0efef"
                  margin="2"
                  padding="5"
                  transitionDuration="10"
                  transitionTimingFunction="linear"
                  animateOnRender
                  maxCompleted={100}
                  customLabel={stack.level}
                />
              </div>
              </AnimationWrapper>
            )
          })
        }
        
      </div>

      <div>
        <h2 className="font-semibold text-2xl">Additionals</h2>
        <div className="m-4 p-2 w-full flex mx-auto items-center justify-start border rounded-lg">
          
          
          

        </div>
      </div>
    </div>
  )
}
