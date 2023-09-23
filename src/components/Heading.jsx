

export default function Heading({title}) {
  return (
    // <h2 className="text-left text-5xl font-extrabold font-mono pb-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 via-blue-500  to-blue-700">
    //       {title}
          
    // </h2>
    <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl my-3 dark:text-sky-600">
        {title}
      </h2>
  )
}
