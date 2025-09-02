import "../css/project.css"

function Project({project}) {
    return(
        <div className="text-center d-flex project-container" style={{backgroundColor: `${project.bgColor}`}}>
            <div className="project-flex-box">
                <div className="project-image">
                    <h2>{project.image}</h2>
                </div>
                <div className="text-start">
                    <h2>{project.id}</h2>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <br/>
                    <p className="project-btn">no button here!</p>
                </div>

            </div>
        </div>
    )
}

export default Project