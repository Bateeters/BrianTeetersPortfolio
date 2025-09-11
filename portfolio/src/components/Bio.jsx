import { resume } from '../js/resume'
import ResumeSection from './ResumeSection'

function Bio() {
    return (
        <div style={{textWrap: "pretty", lineHeight: "2em"}}>
            <div className='row justify-content-md-center justify-content-end me-sm-5 align-items-start align-content-bottom'>
                <div className='col-md-3 col-sm-8 col-10 p-md-4 pt-md-0 ms-md-3 resume-title' style={{top: "85px"}}>
                    <h2>About Me</h2>
                    <img src="https://as1.ftcdn.net/v2/jpg/02/85/73/78/1000_F_285737865_FVbkYfyDTEUTcMHs1YgeR8ZfC8PwyFP3.jpg" alt="Brian Teeters" style={{backgroundColor: "pink", borderRadius: "20px", width: "100%"}}/>
                </div>
                <p className='col-md-7 col-sm-8 col-10 pt-md-0 pb-md-0 pt-3 pb-4'>
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
