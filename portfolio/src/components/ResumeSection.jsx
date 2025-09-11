import '../css/resumeSection.css'

function ResumeSection({ section }) {
    return (
        <div className="resume-section row justify-content-md-center justify-content-end me-sm-5 align-items-start">
            <h2 className="col-md-3 col-sm-8 col-10 p-md-4 ms-md-3 resume-title">{section.section}</h2>
            <div className="col-md-7 col-sm-8 col-10 pb-md-0 pb-5">
                <hr/>
                {/* Case 1: Experience / Projects / Education */}
                {section.items && section.items.map((item, i) => (
                    <div key={i} className="resume-item">
                        {/* Title line (role + company + dates) */}
                        <h4>
                            {item.role || item.title} 
                            {item.company && ` — ${item.company}`}
                            {item.institution && ` ${item.institution}`}
                        </h4>
                        {item.degree && <p className="degree">{item.degree}</p>}
                        {item.date && <p className="date">{item.date}</p>}

                        {/* Bullets */}
                        {item.bullets && (
                            <ul>
                                {item.bullets.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                {/* Case 2: Skills (categories + bullet lists) */}
                {section.categories && section.categories.map((cat, i) => (
                    <div key={i} className="resume-skill-category">
                        <h4>{cat.category}</h4>
                        <ul>
                            {cat.items.map((skill, j) => (
                                <li key={j}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResumeSection
