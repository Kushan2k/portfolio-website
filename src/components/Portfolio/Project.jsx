
import AnimationWrapper from "..";
import {HiOutlineArrowsExpand} from 'react-icons/hi'

export default function Project({project,delay}) {
  return (
    <AnimationWrapper
      from={{ scale: 0, opacity: 0.3 }}
      to={{ scale: 1, opacity: 1 }}
      transition={{bouce:true,delay:delay,duration:0.5}}
    
    >
      <div className="mx-auto w-full  lg:flex border-[0.5px] shadow-lg transition-transform  relative">

        <button className="lg:hidden bg-blue-600 p-2 text-white font-semibold rounded-full absolute right-3 top-3">
          <HiOutlineArrowsExpand size={20} color="#FFF"/>
        </button>

        <div
          className="hidden md:flex lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden  "
          style={{
            backgroundImage: `url(${project.cover})`,
            
        }
        }
          title="Woman holding a mug"
        >
        
        </div>
        <div className=" p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {project.type}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 first-letter:capitalize">{project.title}</div>
            <p className="text-gray-700 text-base first-letter:capitalize">{project.description}</p>
          </div>
          <div className="flex items-start flex-wrap mx-3">
            
            {
              project.tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag }</span>
              ))
              }
              
            
          </div>
        </div>
      </div>

    </AnimationWrapper>
  )
}
