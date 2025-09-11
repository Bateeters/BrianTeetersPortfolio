import "../css/project.css"

function Project({project}) {
    return(
        <div className="text-center d-flex project-container">
            <div className="project-flex-box">
                <div className="text-start proj-text">
                    <h3 className="proj-id">{project.id}</h3>
                    <h2 className="proj-title">{project.title}</h2>
                    <p className="proj-description">{project.description}</p>
                    <div className="d-flex flex-wrap">
                        {project.tech.map((tech) => (
                            <p className="pe-3" key={tech.id}>{tech}</p>
                        ))}
                    </div>
                    <br/>
                    <p>no button here!</p>
                </div>
                <div className="proj-image" style={{backgroundColor: `${project.bgColor}`}}>
                    <h2>{project.image}</h2>
                </div>
            </div>
        </div>
    )
}

export default Project