
export default function Experience() {
    
    return (
        <div id='Experience' className='body-element'>

            <div className='exp-head'>
                <div className='exp-heading'>
                    <h5 className='headingrow1-exp'>EXPERIENCE</h5>
                    <h1 className='headingrow2-exp'>WORK EXPERIENCE</h1>
                </div>
            </div>


            <div className='jobs'>

                <div className='job'>
                    <div className='iconAndLine'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" /></svg>
                        <div className='vertical-line'></div>
                    </div>
                    <div className='jobdres'>
                        <p className='job-heading'>SOFTWARE INTERN</p>
                        <p className='job-company'>Samsung Research Institute</p>
                        <p className='job-timeline'>July 2022 - September 2022</p>
                        <p className='job-point'>• Designed and developed user interfaces for a desktop
application using PyQt5 and QML, including the creation of several custom widget.</p>
                        <p className='job-point'>• Reduced bug fixes by 40% through rigorous testing and
optimization of widget implementations, leading to a more
stable and reliable application.</p>
                        <p className='job-point'>• Explored working in a high paced environment.</p>
                    </div>
                </div>

                <div className='job'>
                    <div className='iconAndLine' style={{ paddingTop: 0 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" /></svg>
                        <div className='vertical-line'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /></svg>

                    </div>
                    <div className='jobdres' style={{ paddingTop: 0 }}>
                        <p className='job-heading'>ASSOCIATE SOFTWARE ENGINEER</p>
                        <p className='job-company'>Accenture</p>
                        <p className='job-timeline'>October 2023 - Present</p>
                        <p className='job-point'>• Completed an intensive training program on Java Full stack
                        focusing on Java, Spring Boot, React, and database management.</p>
                        <p className='job-point'>• Collaborated with cross-functional teams to deliver software solutions aligned with client requirements and industry best practices.</p>
                        <p className='job-point'>• Implemented features and enhancements in Java-based applications, adhering to project timelines and quality standards.</p>
                        <p className='job-point'>• Engaged in Agile development processes, participating in
                        sprint planning, daily stand-ups, and code reviews.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}