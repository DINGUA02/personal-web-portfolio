import { projects } from "../utilities/constants";
import topRightArrow from "../assets/toprightarrow.svg"
import cyanTopRightArrow from "../assets/cyantoprightarrow.svg"

export const Projects = () => {
    return(
        <section id="projects" 
            className="flex flex-col gap-10 mt-16 md:gap-10" >
            <div>
                <h2 className="text-2xl text-gray-500 font-medium md:text-2xl">Projects</h2>
            </div>
            {projects.map(project => (
                <div key={project.id}
                    className="flex flex-col gap-5 md:flex-row  md:gap-6 hover:bg-gray-900 p-2 rounded-lg">
                        <div className="md:w-11/12">
                            <img src={project.image} 
                                alt={project.title}
                                className="rounded-lg md:w-auto" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <div className="flex items-end gap-2">
                                    <a href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-end hover:scale-110">
                                        <h2 className="text-xl">{project.title}</h2>
                                        <img 
                                        src={topRightArrow} 
                                        alt="top-right-arrow icon"
                                        className="w-6" />
                                    </a>
                                    <a href={project.gitHub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-end hover:scale-110">
                                        <p className="text-sm text-cyan-500">GitHub</p>
                                        <img 
                                        src={cyanTopRightArrow}
                                        alt="top-right-arrow icon"
                                        className="w-4"/>
                                    </a>
                                </div>
                                <h3 className="text-sm">({project.type})</h3>
                            </div>
                            <p className="text-gray-400 text-balance">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techstacks.map((techStack,index) => (
                                    <div key={techStack+index} className="bg-neutral-900 p-2 rounded-lg md:p-1" >
                                        <p className="text-orange-600 text-sm">{techStack}</p>
                                    </div>
                                    ))}
                            </div>        
                        </div>
                </div>
            ))}
        </section>
    )
}