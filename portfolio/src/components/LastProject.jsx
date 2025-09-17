import { useEffect, useRef } from "react";
import "../css/lastProject.css";

function LastProject({project}) {
    const containerRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (!containerRef.current || !innerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        if (rect.top <= 0) {
            innerRef.current.style.position = "static";
            innerRef.current.style.top = "";
        } else {
            innerRef.current.style.position = "fixed";
            innerRef.current.style.top = "0";
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <div ref={containerRef} className="row mb-3 proj-container">
            <div ref={innerRef} className="col-12 proj-flex-box">
                <div className="row justify-content-end align-items-md-stretch align-items-end flex-md-row flex-column-reverse ms-1">
                    <div className="col-md-5 col-9 ps-0 ps-md-1 pe-md-0">
                        <h3 className="proj-id">{project.id}</h3>
                        <h2 className="proj-title">{project.title}</h2>
                        <p className="proj-description pe-3">{project.description}</p>
                        <div className="d-flex flex-wrap py-2">
                            {project.tech.map((tech) => (
                                <p className="pe-4 py-0 my-1 proj-tech" key={tech.id}>{tech}</p>
                            ))}
                        </div>
                        {project.links && project.links.map((link) => (
                            <a href={link.url} key={link.id} target="_blank">
                                <button className="btn rounded-pill m-3 ms-0">{link.title}</button>
                            </a>
                        ))}
                    </div>
                    <div className="col-md-6 col-9 proj-image" style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center'
                    }}>
                        <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastProject