import "../css/hero.css"

function Hero() {
    return (
        <div className="hero container-fluid">
            <div className="row d-flex justify-content-center align-items-center p-5 m-auto h-100">
                <div className="col-xxl-10 col-11">
                    <div className="row justify-content-center">
                        <div className="col-8 p-0">
                            <p>Seamless digital design from concept to code.</p>
                            <h1>I'm Brian Teeters</h1>
                            <h2>Software Developer</h2>
                            <div className="mt-4">
                                <button className="btn me-3 px-2 py-1 rounded-pill">Jump to Projects</button>
                                <button className="btn ms-3 px-2 py-1 rounded-pill">Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero