import "../css/hero.css"

function Hero() {
    return (
        <div className="row justify-content-end me-md-0 me-sm-5 align-items-center h-100">
            <div className="col-md-9 col-10 p-0">
                <p>Seamless digital design from concept to code.</p>
                <h1>I'm Brian Teeters</h1>
                <h2>Front-End Developer</h2>
                <div className="mt-4">
                    <a href="#projects">
                        <button className="btn me-3 px-2 py-1 rounded-pill">Jump to Projects</button>

                    </a>
                    <button className="btn ms-3 px-2 py-1 rounded-pill">Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero