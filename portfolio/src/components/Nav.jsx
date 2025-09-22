import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/nav.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

function Nav() {
    const [isLight, setIsLight] = useLocalStorage("lightTheme", false);

    useEffect(() => {
        if (isLight) {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
    }, [isLight]);

    const toggleTheme = () => {
        setIsLight(prev => !prev);
    };

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        } else {
        // default: scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Brian Teeters</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-2">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <a href="mailto:brianteetersdesign@gmail.com">
                                <button className="btn px-2 py-1 rounded-pill">Email Me</button>
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2 pt-lg-0 pt-3">
                            <button onClick={toggleTheme} className="theme-toggle-btn btn d-flex justify-content-center align-items-center">
                                {isLight ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav