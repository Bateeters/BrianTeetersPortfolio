import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Summary from '../components/Summary'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div style={{textWrap: "pretty"}}>
                <section id="hero" className='hero container' aria-label="Introduction">
                    <Hero />
                </section>

                <section id="stats" className='container' aria-label="Stats">
                    <Stats />
                </section>

                <section id="projects" className='container-fluid' aria-label="Projects">
                    <Projects />
                </section>

                <section id="summary" className='container-fluid' aria-label="Short Summary">
                    <Summary />
                </section>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home