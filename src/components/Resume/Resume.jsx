import { useEffect, useRef } from "react";
import { Heading } from "..";
import { useInView } from "framer-motion";


const exp = [
  {
    period: 'Apr 2015 - Mar 2018',
    role: 'Frontend Developer',
    job:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.`
  },
  {
    period: 'Apr 2015 - Mar 2018',
    role: 'Frontend Developer',
    job:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.`
  },
]

export default function Resume({onchange}) {
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'some', once: false })
  
  useEffect(() => {

    if (isVisible) {
      onchange("resume")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  return (
    <div id="resume" ref={ref} className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">
      <div className="container py-6 " id="work">
        <Heading title={'Resume'}/>
        
        <p className="mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos perferendis eos quo eveniet quisquam non molestiae, expedita labore debitis delectus doloribus harum. Nihil harum dolores in necessitatibus ab debitis.
        </p>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          {
            exp.map(ex => (
              <div key={ex.period} className="mt-8 flex flex-col justify-end text-center md:flex-row md:text-left">
            
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18  border-l-2 border-gray-700">
                    <span className="absolute -left-2 -top-1 hidden h-4 w-4 rounded-full border-2 border-black bg-black md:block  "></span>

                    <div className="mt-1 flex ml-[2rem]">
                      <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40">
                          {ex.period}
                        </span>
                        <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                          {ex.role}
                        </span>
                        <div className="pt-2">
                          <span className="block font-body text-black">
                            {ex.job}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }
          

          


        </div>
      </div>
    </div>
  )
}
