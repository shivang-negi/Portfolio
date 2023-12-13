import './main.css';

export default function About() {
    return (
        <div id='About' className='body-element'>

            <div className='aboutme'>
                <div className='about-heading'>
                    <h5 className='headingrow1'>ABOUT</h5>
                    <h1 className='headingrow2'>WHO AM I?</h1>
                </div>
                <a href='resume.pdf' target='_blank' style={{ textDecoration: 'none' }} rel="noopener noreferrer" download={'resume-ShivangNegi.pdf'}>
                    <button type="button" className="resume-download">Download Resume</button>
                </a>
            </div>

            <div className='about2'>
                <p className='about-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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