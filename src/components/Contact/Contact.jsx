import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Heading } from ".."


export const Contact = ({onchange}) => {

  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 'all', once: false })

  
  
  useEffect(() => {

    if (isVisible) {
      onchange("contacts")
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])


  function handelSubmit(e) {

    const text=`Hello I'm ${e.target.name}. \nEmail:${e.target.email} \nMessage:${e.target.message}`
    // e.preventDefault()
    window.location.href=`https://api.whatsapp.com/send?phone=+94712720033&text=${text}`
  }
  return (
    <div id="contacts" ref={ref} className="m-4 p-4 bg-white  mx-auto w-full  dark:bg-black">
      <Heading title={'Contact'} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center align-items-center">
          <p>
          Let&apos;s work together and make your idea come to life.
          {/* // eslint-disable-next-line react/no-unescaped-entities */}
          Reach Out and Connect: Get in touch with me to discuss collaborations, projects, or any inquiries you may have. I&apos;m just a message away!
        </p>
        </div>
        <div class="w-full mt-4 md:mt-0 md:w-96 md:max-w-full mx-auto">
          <div class="p-6 border border-gray-300 sm:rounded-md dark:border-gray-700">
            <form onSubmit={handelSubmit} >
              <label class="block mb-6">
                <span class="text-gray-700 dark:text-gray-200">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
                  dark:text-white dark:bg-gray-700
                    block
                    dark:border-none
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700 dark:text-gray-200">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
                  dark:text-white dark:bg-gray-700
                    block
                    dark:border-none
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700 dark:text-gray-200">Message</span>
                <textarea
                  name="message"
                  class="
                  dark:text-white dark:bg-gray-700
                    block
                    w-full
                    mt-1
                    dark:border-none
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="
                    h-10
                    px-5
                    text-indigo-100
                    bg-indigo-700
                    rounded-lg
                    transition-colors
                    duration-150
                    focus:shadow-outline
                    hover:bg-indigo-800
                  "
                >
                  Contact Me
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
