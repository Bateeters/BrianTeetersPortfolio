import FirstProject from "./FirstProject"
import LastProject from "./LastProject"
import Project from "./Project"
import { projects } from '../js/projectsList'

function Projects(){
    return(
        <div>
            {projects.map((project, index) => {
            switch (true) {
                case project.id === "01":
                return <FirstProject key={project.id} project={project} />;
                case index === projects.length - 1:
                return <LastProject key={project.id} project={project} />;
                default:
                return <Project key={project.id} project={project} />;
            }
            })}
        </div>
    )
}

export default Projects