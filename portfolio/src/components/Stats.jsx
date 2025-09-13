import "../css/stats.css"

function Stats() {
    return (
        <div className="row justify-content-sm-center justify-content-end ms-md-1">
            <div className="col-md-10 col-sm-8 col-9 px-md-0 px-sm-5 px-4">
                <div className="row justify-content-sm-center gap-md-0 gap-2">
                    <div className="card col-md-3 col-10">
                        <h3>Development</h3>
                        <p>2+ Years of Professional Experience</p>
                    </div>
                    <div className="card col-md-3 col-10">
                        <h3>Cross-Disciplinary</h3>
                        <p>Development, Design, & Marketing</p>
                    </div>

                    <div className="card col-md-3 col-10">
                        <h3>Design</h3>
                        <p>7+ Years of Professional Experience</p>
                    </div>

                    <div className="card col-md-3 col-10">
                        <h3>Project Lifecycle</h3>
                        <p>From Wireframes to Deployment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats