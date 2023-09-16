import Project from "./Project";



export default function ProjectTabs({projects}) {

  

  //dirve url
  // https://drive.google.com/uc?id=1_g6PxUxHVCrR-R-ff566IBDqXqw7ID4o
  https://drive.google.com/file/d//view?usp=sharing
 

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold  first-letter:capitalize text-blue-700">My Projects</h3>
      <div className="projects mt-5 mx-auto w-full grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-5 ">

        {
          projects?.map(project => (
            <Project key={project.id}  project={{ type: project.type, title: project.title, description: project.description, tags: project.tags, cover: project.cover }} delay={0.3} />
          ))
        }
        
      </div>
    </div>
  )
}
