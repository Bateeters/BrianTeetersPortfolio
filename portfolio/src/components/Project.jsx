import "../css/project.css"

function Project({project}) {
    return(
        <div className="row">
            <div className="col-12">
                <div className="row justify-content-end align-items-md-stretch align-items-end flex-md-row flex-column-reverse">
                    <div className="col-md-5 col-9 ps-md-0">
                        <h3 className="">{project.id}</h3>
                        <h2 className="">{project.title}</h2>
                        <p className="">{project.description}</p>
                        <div className="">
                            {project.tech.map((tech) => (
                                <p className="" key={tech.id}>{tech}</p>
                            ))}
                        </div>                    <br/>
                        <a href="">
                            <button className="">Click Me!</button>
                        </a>
                    </div>
                    <div className="col-md-6 col-9" style={{backgroundColor: `${project.bgColor}`}}>
                        <h2>project.image</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project