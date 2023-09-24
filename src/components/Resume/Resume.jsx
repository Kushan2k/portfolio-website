import { useEffect, useRef } from "react";
import AnimationWrapper, { Heading } from "..";
import { useInView } from "framer-motion";


const exp = [
  {
    period: 'Mar 2021 - Present',
    role: 'Undergraduate',
    job:`Currently Studying Enformation and communication engineering at SLTC Reasearch University Sri Lanka.`
  },
  {
    period: 'January 2019 - April 2023',
    role: 'Freelancer',
    job:`did some freelancing work on freelancer and fiver.`
  },
  {
    period: 'December 2019 - April 2020',
    role: 'Information technology',
    job:`basic information and communication technology deploma at ESOFT Metro campus kurunegala.`
  },
  {
    period: 'January 2017 - August 2019',
    role: 'G.C.E Adavanced Level',
    job:`Advanced Level Mathametics in Maliyadewa College Kurunegala`
  },
]

export default function Resume({onchange}) {
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'some', once: false })
  let delay=0.2
  
  useEffect(() => {

    if (isVisible) {
      onchange("resume")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  return (
    <div id="resume" ref={ref} className="m-4 p-4 bg-white w-full mx-auto  dark:bg-black">
      <div className="container py-6 " id="work">
        <Heading title={'Resume'}/>
        
        <p className="mx-4">
          Explore my resume to discover my skills, qualifications, and experiences that make me the ideal candidate for your next project or opportunity.
          explore how I can contribute to your projects and organizations. Let&apos;s make the next career move together!
        </p>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          {
            exp.map((ex,index) => (
              <AnimationWrapper key={ex.period}
                
                from={{
                  opacity:0
                }}
                to={{ opacity: 1 }}
                transition={{
                  bounce: true,
                  duration: 0.4,
                  delay:(delay)+(delay*index)
                }}
              >
                  <div  className="mt-8 flex flex-col justify-end text-center md:flex-row md:text-left ">
              
                  <div className="md:w-3/5">
                    <div className="relative flex md:pl-18 dark:border-white  border-l-2 border-gray-700">
                      <span className="absolute -left-2 -top-1 hidden h-4 w-4 rounded-full border-2 border-black dark:bg-white  bg-black md:block  "></span>

                      <div className="mt-1 flex ml-[2rem] p-4 dark:bg-gray-800">
                        <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                        <div className="md:-mt-1 md:pl-8">
                          <span className="block font-body dark:text-gray-400 font-bold dark:font-semibold text-grey-40">
                            {ex.period}
                          </span>
                          <span className="block dark:text-gray-200 pt-2 font-header text-xl font-bold uppercase text-primary">
                            {ex.role}
                          </span>
                          <div className="pt-2">
                            <span className="block font-body text-black dark:text-gray-200">
                              {ex.job}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </AnimationWrapper>
            ))
          }
          

          


        </div>
      </div>
    </div>
  )
}
