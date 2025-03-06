import resume from './ShivangNegi2.pdf'

export default function About() {

    return (
        <div id='About' className='body-element'>

            <div className='aboutme'>
                <div className='about-heading'>
                    <h5 className='headingrow1'>ABOUT</h5>
                    <h1 className='headingrow2'>WHO AM I?</h1>
                </div>
                <a href={resume} target='_blank' style={{ textDecoration: 'none' }} rel="noopener noreferrer" download={'ShivangNegi2.pdf'}>
                    <button type="button" className="resume-download">Download Resume</button>
                </a>
            </div>

            <div className='about2'>
                <p className='about-para'>
                    I am Shivang Negi, a recent graduate from Graphic Era University and a Fullstack developer. I have experience in creating and maintaining software applications using various technologies such as Java, Spring framework, HTML, CSS, JavaScript, Node.js, React.js, etc. Additionally, I am a seasoned competitive programmer and am well-versed in the core subjects of Computer Science. I enjoy learning new skills, taking on new challenges, and always aspire to become a better version of myself in the future.
                </p>
            </div>

            <div className='cards'>
                <div className='card'>
                    <img
                        src='frontend.jpg'
                        style={{ height: '140px' }}></img>
                    <div style={{ textAlign: 'center', paddingTop: '8px' }}>Frontend</div>
                </div>

                <div className='card'>
                    <img
                        src='backend.png'
                        style={{ height: '140px' }}></img>
                    <div style={{ textAlign: 'center', paddingTop: '8px' }}>Backend</div>
                </div>

                <div className='card'>
                    <img
                        src='database.png'
                        style={{ height: '140px' }}></img>
                    <div style={{ textAlign: 'center', paddingTop: '8px' }}>Database</div>
                </div>

                <div className='card'>
                    <img
                        src='internet.jpg'
                        style={{ height: '140px' }}></img>
                    <div style={{ textAlign: 'center', paddingTop: '8px' }}>Web</div>
                </div>
            </div>

        </div>
    )
}