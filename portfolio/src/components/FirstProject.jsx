import { useEffect, useRef } from "react";
import "../css/firstProject.css"

function FirstProject({project}) {
    const containerRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (!containerRef.current || !innerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        if (rect.top <= 0) {
            innerRef.current.style.position = "fixed";
            innerRef.current.style.top = "";
        } else {
            innerRef.current.style.position = "static";
            innerRef.current.style.top = "0";
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="text-center d-flex first-proj-container">
            <div ref={innerRef} className="first-proj-flex-box">
                <div className="text-start proj-text">
                    <h3 className="proj-id">{project.id}</h3>
                    <h2 className="proj-title">{project.title}</h2>
                    <p className="proj-description">{project.description}</p>
                    <p className="proj-tech">{project.tech}</p>
                    <br/>
                    <a href="">
                        <button className="btn px-2 py-1 rounded-pill">Click Me! NOW!</button>
                    </a>
                </div>
                <div className="proj-image" style={{backgroundColor: `${project.bgColor}`}}>
                    <h2>{project.image}</h2>
                </div>
            </div>
        </div>
    )
}

export default FirstProject