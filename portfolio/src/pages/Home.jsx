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
            <main>
                <section id="hero" aria-label="Introduction">
                    <Hero />
                </section>

                <section id="stats" aria-label="Stats">
                    <Stats />
                </section>

                <section id="projects" aria-label="Projects">
                    <Projects />
                </section>

                <section id="summary" aria-label="Short Summary">
                    <Summary />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home