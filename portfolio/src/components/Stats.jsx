import "../css/stats.css"

function Stats() {
    return (
        <div className="row justify-content-sm-center justify-content-end ms-md-1 mb-md-5">
            <div className="col-md-10 col-sm-8 col-9 px-md-0 px-sm-5 px-4">
                <div className="row justify-content-sm-center mx-md-1 gap-md-0 gap-2 mb-5 stat-card-container align-items-end">
                    <div className="card col-md-3 col-10 mb-3 p-3 text-center justify-content-center stat-card-start">
                        <h3>Development</h3>
                        <p className="mb-0">2+ Years of Professional Experience</p>
                    </div>
                    <div className="card col-md-3 col-10 mb-3 p-3 text-center justify-content-center stat-card">
                        <h3>Cross-Disciplinary</h3>
                        <p className="mb-0">Development, Design, & Marketing</p>
                    </div>

                    <div className="card col-md-3 col-10 mb-3 p-3 text-center justify-content-center stat-card">
                        <h3>Design</h3>
                        <p className="mb-0">7+ Years of Professional Experience</p>
                    </div>

                    <div className="card col-md-3 col-10 mb-3 p-3 text-center justify-content-center stat-card-end">
                        <h3>Development Lifecycle</h3>
                        <p className="mb-0">From Wireframes to Maintenance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats