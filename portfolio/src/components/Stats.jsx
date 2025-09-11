import "../css/stats.css"

function Stats() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-9 col-sm-10">
                <div className="row">
                    <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                        <div className="card stat-card-start w-100">
                            <div className="stat-card-body text-center">
                                <h3>Development</h3>
                                <p>2+ Years of Professional Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                        <div className="card stat-card w-100">
                            <div className="stat-card-body text-center">
                                <h3>Cross-Disciplinary</h3>
                                <p>Development, Design, & Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                        <div className="card stat-card w-100">
                            <div className="stat-card-body text-center">
                                <h3>Design</h3>
                                <p>7+ Years of Professional Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                        <div className="card stat-card-end w-100">
                            <div className="stat-card-body text-center">
                                <h3>Project Lifecycle</h3>
                                <p>From Wireframes to Deployment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats