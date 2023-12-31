'use client'
import AnimationWrapper from "..";
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { useState } from "react";
import DismissableModal from "./Model";

export default function Project({ project, delay }) {
  const [isopen,setisopen]=useState('')
  return (
    <AnimationWrapper
      from={{ scale: 0, opacity: 0.3 }}
      to={{ scale: 1, opacity: 1 }}
      transition={{bouce:true,delay:delay,duration:0.5}}
    
    >
      <div className="mx-auto w-full lg:h-72 lg:flex border-[0.5px] shadow-lg transition-transform  relative dark:bg-gray-900  dark:border-none  ">

        {/* <button className=" bg-blue-600 p-2 text-white font-semibold rounded-full absolute right-3 top-3" onClick={() => setisopen('dismissible')} >
          <HiOutlineArrowsExpand size={20} color="#FFF"/>
        </button> */}

        <a href={project.url} target="_blank" className=" bg-blue-600 p-2 text-white font-semibold rounded-full  dark:bg-gray-700 absolute right-3 top-3"  >
          <HiOutlineArrowsExpand size={20}  color="#FFF"/>
        </a>

        <div
          className="hidden md:hidden lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden transition-transform  hover:scale-75  hover:cursor-pointer"
          // onClick={() => setisopen('dismissible')}
          style={{
            backgroundImage: `url(${project.cover})`,
            objectFit: 'contain',
            backgroundPosition: 'center',
            backgroundClip: 'content-box',
            backgroundSize: 'cover',
            backgroundRepeat:'no-repeat'
            
  
        }
        }
          title="project image"
        />
        
        
        <div className=" p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm dark:text-gray-300 text-gray-600 flex items-center">
              {project.type}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 first-letter:capitalize dark:text-white">{project.title}</div>
            <p className="text-gray-700 text-base first-letter:capitalize dark:text-gray-200">{project.description}</p>
          </div>
          <div className="flex items-start flex-wrap mx-1">
            
            {
              project.tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-black">#{tag }</span>
              ))
              }
              
            
          </div>
        </div>
      </div>

      <DismissableModal project={project} openModal={isopen} setOpenModal={setisopen}/>

      
      

    </AnimationWrapper>
  )
}
