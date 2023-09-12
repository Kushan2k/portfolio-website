import Project from "./Project";


export default function ProjectTabs() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold  first-letter:capitalize text-blue-700">My Projects</h3>
      <div className="projects mt-5 mx-auto w-full grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-5 ">
        <Project project={{type:"web development",title:'app development ',description: 'asdasd asdas dasd asdas das das dasd as das dsad asd asd asd sadasdas das das dasd sada',tags:['python','django','tailwind','stripe'],cover:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80' }} delay={0.3} />
        <Project project={{type:"web development",title:'app development ',description: 'asdasd asdas dasd asdas das das dasd as das dsad asd asd asd sadasdas das das dasd sada',tags:['python','django','tailwind','stripe'],cover:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80' }} delay={0.4} />
        
      </div>
    </div>
  )
}
