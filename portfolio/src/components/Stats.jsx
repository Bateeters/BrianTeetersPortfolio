import "../css/stats.css"

function Stats() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-11">
                    <div className="row justify-content-center">
                        <div className="col-2 card d-flex stat-card-start justify-content-center align-items-center p-4">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                        <div className="col-2 card stat-card d-flex justify-content-center align-items-center p-4">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                        <div className="col-2 card stat-card d-flex justify-content-center align-items-center p-4">
                            <h3>stat 1</h3>
                            <p>extra stuff</p>
                        </div>
                        <div className="col-2 card stat-card-end d-flex justify-content-center align-items-center p-4">
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