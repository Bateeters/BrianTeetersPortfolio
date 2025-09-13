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
            <div style={{textWrap: "pretty"}} className='container-fluid'>
                <Hero />
                <Stats />
                <Projects />
                <Summary />
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home