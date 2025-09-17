import { resume } from '../js/resume'
import ResumeSection from './ResumeSection'
import headshot from '../assets/headshot.jpeg'

function Bio() {
    return (
        <div style={{textWrap: "pretty", lineHeight: "2em"}} className='container'>
            <div className='row justify-content-end align-items-start'>
                <div className='resume-title col-md-3 col-sm-10 col-9 py-3' style={{top: "85px"}}>
                    <h2>About Me</h2>
                    <img src={headshot} alt="Brian Teeters" style={{ borderRadius: "20px"}} className='w-100'/>
                </div>
                <p className='col-md-9 col-sm-10 col-9 pt-md-5 mt-md-2 pt-3 resume-text'>
                    Front-End Developer with a foundation in full-stack development and a 
                    background in UX/UI design and marketing. Experienced in building responsive, 
                    accessible, and user-focused web applications using modern front-end 
                    technologies. Currently expanding back-end skills with Node.js to strengthen 
                    versatility with exposure to Python and .NET Core. Adept at translating design 
                    concepts into clean, maintainable code and delivering projects that balance 
                    functionality with strong visual design.
                </p>
            </div>
            {resume.map((section, i) => (
                <ResumeSection key={i} section={section} />
            ))}
        </div>
    )
}

export default Bio
