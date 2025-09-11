import '../css/resumeSection.css'

function ResumeSection({ section }) {
    return (
        <div className="resume-section row justify-content-end align-items-start">
            <h2 className="resume-title col-md-3 col-sm-10 col-9 pt-3">{section.section}</h2>
            <div className="col-md-9 col-sm-10 col-9">
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
                        {item.degree && <p className="degree mb-0">{item.degree}</p>}
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
