
import Image from "next/image"




function Hero() {
  return (
    <div className="hero w-full h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-center   p-5 ">
      <div className="img flex items-center justify-center w-1/2 mx-auto h-auto ">
        <Image src={
          'https://previews.123rf.com/images/apoev/apoev2107/apoev210700033/171405527-default-avatar-photo-placeholder-gray-profile-picture-icon-business-man-illustration.jpg'
        }
          alt="me"
          
          // width={100}
          // height={100}
          loading="lazy"
          width={200}
          height={200}
          className="rounded-full md:w-full border-2 border-blue-700"
          
        />

      </div>

      <div className="info border w-4/5 flex items-center flex-col justify-center mx-auto text-right   md:mx-0">

        <h2 className="text-4xl font-mono font-semibold  capitalize">
          kushan gayantha
          
        </h2>
        <p className="text-right">Full Stack Developer</p>
        
        <a className=" mt-3 rounded-full p-3  bg-gradient-to-tr from-blue-600 to-blue-900  text-white hover:from-blue-900 hover:to-blue-600  transition-transform hover:scale-105 cursor-pointer">
          Download CV
        </a>

      </div>
    </div>
  )
}

export default Hero