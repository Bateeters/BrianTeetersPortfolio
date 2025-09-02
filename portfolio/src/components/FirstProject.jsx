import "../css/firstProject.css"

function FirstProject({project}) {
    return (
        <div className="text-center d-flex first-proj-container" style={{backgroundColor: `${project.bgColor}`}}>
            <div className="first-proj-flex-box">
                <div className="first-proj-image">
                    <h2>{project.image}</h2>
                </div>
                <div className="text-start">
                    <h2>{project.id}</h2>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <br/>
                    <a href="" className="proj-btn">
                        <button>Click Me!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FirstProject