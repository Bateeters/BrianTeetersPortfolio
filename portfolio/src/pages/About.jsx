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
            <main style={{marginTop: "100px"}}>
                <Bio />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default About