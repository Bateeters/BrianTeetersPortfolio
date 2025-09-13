import "../css/hero.css"

function Hero() {
    return (
        <div className="row justify-content-end">
            <div className="col-9">
                <p>Seamless digital design from concept to code.</p>
                <h1>I'm Brian Teeters</h1>
                <h2>Front-End Developer</h2>
                <div className="">
                    <a href="#projects">
                        <button className="">Jump to Projects</button>

                    </a>
                    <button className="">Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero