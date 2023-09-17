'use client'
import { Heading } from "..";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import ProjectTabs from "./ProjectTabs";
import { FaAnglesRight } from "react-icons/fa6";
import { Spinner } from "flowbite-react";

async function loadData() {
  
  const res = await fetch("api/projects/", { cache: 'no-cache' })
  
  if (res.ok) {
    const data = await res.json()

  
    return data.data
  } else {
    return []
  }
}


export default function Portfolio({ onchange }) {
  
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'some', once: false })
  const [data, setData] = useState([])
  const [loading,setloading]=useState(true)
  
  useEffect(() => {

    if (isVisible) {
      onchange("portfolio")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])


  useEffect(() => {
    async function l() {
      const d = await loadData()
      setData(d)
      setloading(false)
    }
    l()

  },[])
  
 
  return (
    <div id="portfolio"  ref={ref} className="m-4 p-4 bg-white w-[95%] mx-auto md:w-[90%]">
      <Heading title={'Portfolio'} />
      <p className="mx-4 ">
        Since the start i have completed more project for learning and also for the clients that i have using verious technology stacks as they require.
        for most of the web applications which includes basic CURD oprations i use php based backends rather than going for complex frameworks.
        react native and flutter for mobile application development and python to provide machine learning driven solutions to the clients in need.
      </p>
      
      <div className="mt-4 relative flex justify-center pb-4">

        {
          loading ? (
            <div className="w-full flex items-center justify-center ">
              <Spinner
                aria-label="Extra large spinner example"
                size="xl"
              />
            </div>
          ) : (
              <>
                <ProjectTabs projects={data} />
                <button onClick={() => {
                  alert("in Development")
                }} className="rounded-full text-white absolute -bottom-9 mx-auto bg-blue-500 p-2 flex gap-x-1 text-sm">
                  More
                  <FaAnglesRight color="white" size={20} />
                </button>
              </>
          )
        }
            
          
        
          
       
            
      </div>
      
    </div>
  )
}
