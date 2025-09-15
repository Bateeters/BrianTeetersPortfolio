import "../css/hero.css"

function Hero() {
    return (
        <div className="row justify-content-end hero">
            <div className="col-9">
                <p>Seamless digital design from concept to code.</p>
                <h1>I'm Brian Teeters</h1>
                <h2>Front-End Developer</h2>
                <a href="#projects" className="">
                    <button className="btn rounded-pill m-3 ms-0">Jump to Projects</button>

                </a>
                <a href="" className="">
                    <button className="btn rounded-pill m-3 ms-0">Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Hero