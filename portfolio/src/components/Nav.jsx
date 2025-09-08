import "../css/nav.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Brian Teeters</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="">About</a>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <button className="btn px-2 py-1 rounded-pill">Contact Me</button>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <button className="theme-toggle-btn btn"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav