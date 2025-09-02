import "../css/LastProject.css"
import { useEffect, useRef } from "react"

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
        <div ref={containerRef} className="text-center d-flex last-proj-container" style={{backgroundColor: `${project.bgColor}`}}>
            <div ref={innerRef} className="last-proj-flex-box">
                <div className="last-proj-image">
                    <h2>Insert Project Image Here</h2>
                </div>
                <div className="text-start">
                    <h2>{project.id}</h2>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href="" className="proj-btn">
                        <button >Click Me!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LastProject