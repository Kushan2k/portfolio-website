import Project from "./Project";



export default function ProjectTabs({projects}) {

  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold  first-letter:capitalize text-blue-700">My Latest Projects</h3>
      <div className="projects mt-5 mx-auto w-full grid grid-cols-1 items-center justify-center md:grid-cols-2  gap-5 ">

        {
          projects?.map(project => (
            <Project key={project.id}  project={{ type: project.type, title: project.title, description: project.description, tags: project.tags, cover: project.cover,images:project.images,url:project.url }} delay={0.3} />
          ))
        }
        
      </div>
    </div>
  )
}
