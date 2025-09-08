import "../css/project.css"

function Project({project}) {
    return(
        <div className="text-center d-flex project-container">
            <div className="project-flex-box">
                <div className="text-start proj-text">
                    <h3 className="proj-id">{project.id}</h3>
                    <h2 className="proj-title">{project.title}</h2>
                    <p className="proj-description">{project.description}</p>
                    <p className="proj-tech">{project.tech}</p>
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