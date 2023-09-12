'use client'
import { Heading } from "..";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import ProjectTabs from "./ProjectTabs";
import { FaAnglesRight } from "react-icons/fa6";





export default function Portfolio({ onchange }) {
  
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'all', once: false })
  
  useEffect(() => {

    if (isVisible) {
      onchange("portfolio")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])
  
 
  return (
    <div id="portfolio"  ref={ref} className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'Portfolio'} />
      <p className="mx-4 ">
        Since the start i have completed more project for learning and also for the clients that i have using verious technology stacks as they require.
        for most of the web applications which includes basic CURD oprations i use php based backends rather than going for complex frameworks.
        react native and flutter for mobile application development and python to provide machine learning driven solutions to the clients in need.
      </p>
      
      <div className="mt-4 relative flex justify-center pb-4">
        <ProjectTabs />
        <button onClick={() => {
          alert("in Development")
        }} className="rounded-full text-white absolute -bottom-9 mx-auto bg-blue-500 p-2 flex gap-x-1 text-sm">
          More
          <FaAnglesRight color="white" size={20} />
        </button>
      </div>
      
    </div>
  )
}
