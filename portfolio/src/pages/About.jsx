import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../css/about.css"
import Bio from "../components/Bio"

function About() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div style={{paddingTop: "100px"}} id="top">
                <Bio />
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default About