import "../css/summary.css";
import { Link } from "react-router-dom";

function Summary() {
    return(
        <div className="row justify-content-sm-center justify-content-end ms-1 mt-md-5">
            <div className="col-md-10 col-11 px-md-0 px-sm-5 px-4">
                <div className="row justify-content-md-center justify-content-end gap-md-0 gap-2 my-5 ms-1">
                    <div className="card col-lg-9 col-md-12 col-10 flex-md-row justify-content-between align-items-md-center p-md-3 summary-card">
                        <div className="col-md-9 col-12 pt-md-0 pt-3">
                            <h2>A Little About Me</h2>
                            <p>
                                Art has always been at the center of my life, which led me into 
                                graphic design. Over time I wanted more of a challenge, so I 
                                shifted into software development where I could combine creativity 
                                with problem-solving.<br/> <br/>As a designer and developer, my goal is to 
                                build projects that are both functional and engaging, creating 
                                meaningful experiences for users and clients alike.
                            </p>
                        </div>
                        <div className="col-md-1 col-12 summary-line"></div>
                        <div className="col-md-2 col-12 d-flex flex-column justify-content-center align-items-center p-md-0 p-3">
                            <img src="https://as1.ftcdn.net/v2/jpg/02/85/73/78/1000_F_285737865_FVbkYfyDTEUTcMHs1YgeR8ZfC8PwyFP3.jpg" alt="Brian Teeters" className="summary-image my-3"/>
                            <Link to="/about" className="btn rounded-pill card-btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary