
export default function Projects() {
    return (
        <div id='Project' className='body-element'>
            <div className='exp-head'>
                <div className='exp-heading'>
                    <h1 className='headingrow2-exp' style={{margin:'auto',padding:'9% 0% 9% 0%'}}>PROJECTS</h1>
                </div>
            </div>

            <div className='projects'>
                
                <div className='project-item'>
                    <div className='project-details'>
                        <h2 className='project-heading'>Smart Healthcare App</h2>
                        <h4 className='project-skills'>Flutter, NodeJS, ExpressJS, MongoDB, SQLite, Firebase, SocketIO</h4>
                        <ul className='project-points'>
                            <li className='project-point'>Built a responsive application for Android that allows users to contact physicians and enables one-to-one chat functionality,
along with the sharing of images and documents.</li>
                            <li className='project-point'>Design a fully functional and dynamic front-end with Flutter.</li>
                            <li className='project-point'>Integrated the machine learning prediction model into the application.</li>
                            <li className='project-point'>Store client-side data using SQLite, and server-side data using MongoDB and Firebase.</li>
                        </ul>
                    </div>
                    <img src={'project1.jpg'} className='project-image' alt='Cant load project image'></img>
                </div>

                <div className='project-item'>
                    <div className='project-details'>
                        <h2 className='project-heading'>Scoreboard website</h2>
                        <h4 className='project-skills'>HTML, CSS, NodeJS, ExpressJS, SocketIO, MongoDB</h4>
                        <ul className='project-points'>
                            <li className='project-point'>Snake game website that keeps a scoreboard of high scores of different users in real-time.</li>
                            <li className='project-point'>It features a login and registration page for user authentication purposes. MongoDB is used to store user data, and
the authentication is done on the server side.</li>
                            <li className='project-point'>SocketIO keeps the scoreboard in-sync with the live action, updating it instantly as the game progresses.</li>
                        </ul>
                    </div>
                    <img src={'project2.jpg'} className='project-image' alt='Cant load project image'></img>
                </div>

                <div className='project-item'>
                    <div className='project-details'>
                        <h2 className='project-heading'>Dogs and Cats Classifier</h2>
                        <h4 className='project-skills'>Python, Keras, Tkinter</h4>
                        <ul className='project-points'>
                            <li className='project-point'>Build a classifier that will classify an image as either a dog or a cat depending on the image’s content, using a convolutional neural network.</li>
                            <li className='project-point'>Designed application UI using Tkinter that will take image as an input and classify images with a high accuracy of over 93%.</li>
                        </ul>
                    </div>
                    <img src={'project3.jpg'} className='project-image' alt='Cant load project image'></img>
                </div>

            </div>
        </div>
    )
}