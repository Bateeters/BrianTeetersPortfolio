import "../css/stats.css"

function Stats() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                    <div className="card stat-card-start w-100">
                        <div className="stat-card-body text-center">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                    <div className="card stat-card w-100">
                        <div className="stat-card-body text-center">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                    <div className="card stat-card w-100">
                        <div className="stat-card-body text-center">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-0 stat-card-container d-flex align-items-end">
                    <div className="card stat-card-end w-100">
                        <div className="stat-card-body text-center">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats