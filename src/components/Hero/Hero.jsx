
import Image from "next/image"
import {FaLinkedin,FaGithub} from 'react-icons/fa6'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import me from '../../../public/images/me.jpg'
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

//placeholder url
// 'https://previews.123rf.com/images/apoev/apoev2107/apoev210700033/171405527-default-avatar-photo-placeholder-gray-profile-picture-icon-business-man-illustration.jpg'

function Hero({ onchange }) {
  const ref=useRef(null)
  const ishomeVis = useInView(ref, { once: false, amount: 'all' })
  useEffect(() => {
    if (ishomeVis) {
      onchange('home')
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ishomeVis])
  return (
    <div id="home" ref={ref}  className="hero w-[95%] md:w-[90%] h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-center mx-auto  p-5 ">
      <div className="img flex items-center flex-col gap-y-8 justify-center w-1/2 mx-auto h-auto ">
        <Image src={
          me
        }
          
          alt="me"
          
          // width={100}
          // height={100}
          loading="lazy"
          width={200}
          height={170}
          className="rounded-full  md:w-full border-2 border-blue-700"
          
        />
        <div className="social w-3/4 mx-auto flex items-center justify-around">
          <a href="https://www.linkedin.com/in/kushan-gayantha-b2069b1a8/" target="_blank">
            <FaLinkedin size={30} color="#0e76a8"/>
          </a>
          <a href="https://github.com/Kushan2k" target="_blank">
            <FaGithub size={30} color='#171515' />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+94712720033" target="_blank">
            <FaWhatsapp size={30} color="#25D366" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61550551324628" target="_blank">
            <FaFacebook size={30} color="#3b5998" />
          </a>
        </div>

      </div>

      <div className="info  w-4/5 flex items-center flex-col justify-center mx-auto text-right  md:mx-0">

        <h2 className="text-[2.5em] font-mono font-extrabold  capitalize text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-900">
          kushan gayantha
          
        </h2>
        <p className="text-right font-semibold">Full Stack Developer</p>
        
        <a className=" mt-3 rounded-full p-3  bg-gradient-to-tr from-blue-600 to-blue-900  text-white hover:from-blue-900 hover:to-blue-600  transition-transform hover:scale-105 cursor-pointer">
          Download CV
        </a>

      </div>
    </div>
  )
}

export default Hero