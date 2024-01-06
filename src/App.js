import './App.css';
import About from './components/about.js';
import Contact from './components/contact.js';
import Education from './components/education.js';
import Experience from './components/experience.js';
import Projects from './components/project.js';
import Skills from './components/skills.js';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function DesignationRole() {

  const delay1 = 100, delay2 = 1000;
  const arr = ['Software Engineer', 'Fullstack Developer', 'Competitive Programmer'];

  const [curtext, setCurtext] = useState('');
  const [index, setIndex] = useState(0);
  const [arrIndex, setArrIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index < arr[arrIndex].length && reverse === false) {
      const timeout = setTimeout(() => {
        setCurtext(curtext => curtext + arr[arrIndex][index]);
        setIndex(index => index + 1);
      }, delay1);

      return () => clearTimeout(timeout);
    }
    else if (reverse === false && curtext.length === arr[arrIndex].length) {
      setReverse(true);
    }
    else if (index == 0) {
      setArrIndex(arrIndex => (arrIndex + 1) % 3);
      setIndex(index => index - index);
      setReverse(false);
    }
    else {
      const delay = (curtext.length === arr[arrIndex].length) ? delay2 : delay1;
      const timeout = setTimeout(() => {
        setCurtext(curtext => curtext.substring(0, curtext.length - 1));
        setIndex(index => index - 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, reverse]);

  return (
    <>
      <h3 className='designation'>{curtext}<span className='blinking'>|</span></h3>
    </>
  )
}

function Navbar({ page_no }) {
  return (
    <div className='nav-bar'>
      <img src={'letter.png'} className='profile-pic' alt='Cant load profile'></img>

      <div className='nav1'>
        <h1 className='name'>Shivang Negi</h1>
        <DesignationRole></DesignationRole>
      </div>

      <div className='nav2'>
        <ul className='attributes'>
          <li><Link className={`link ${(page_no === 1) ? 'ULine' : ''}`} onClick={() => { changeColor('About') }}>ABOUT</Link></li>
          <li><Link className={`link ${(page_no === 2) ? 'ULine' : ''}`} onClick={() => { changeColor('Education') }}>Education</Link></li>
          <li><Link className={`link ${(page_no === 3) ? 'ULine' : ''}`} onClick={() => { changeColor('Experience') }}>Experience</Link></li>
          <li><Link className={`link ${(page_no === 4) ? 'ULine' : ''}`} onClick={() => { changeColor('Skills') }}>Skills</Link></li>
          <li><Link className={`link ${(page_no === 5) ? 'ULine' : ''}`} onClick={() => { changeColor('Project') }}>Projects</Link></li>
          <li><Link className={`link ${(page_no === 6) ? 'ULine' : ''}`} onClick={() => { changeColor('Contact') }}>Contact Me</Link></li>
        </ul>
      </div>

      <div className='socials'>
        <a href='https://github.com/shivang-negi/' target='_blank' rel="noreferrer" className='socialmedia'>
          <i className="fa fa-github" style={{ fontSize: 30, color: '#695c5c' }}></i>
        </a>
        <a href='https://www.linkedin.com/in/shivang-negi-29b365229/' target='_blank' rel="noreferrer" className='socialmedia'>
          <i className="fa fa-linkedin-square" style={{ fontSize: 30, color: '#695c5c' }}></i>
        </a>
      </div>
    </div>
  )
}

function changeColor(to_page) {
  document.querySelector(`#${to_page}`).scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function App() {
  var val = 1;

  const [page, setPage] = useState(val);
  const [nav, setNav] = useState({});
  const [cross, setCross] = useState({});
  const [exitNav, setExitNav] = useState(false);
  const exitNavStyle = (exitNav === false) ? ({ display: 'none' }) : ({ display: 'block' });
  const [pushAside, setPushAside] = useState('left');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.50
    }
    const target = document.querySelectorAll('.body-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id_body = (entry.target.getAttribute("id"));
          if (id_body === 'About') setPage(1);
          else if (id_body === 'Education') setPage(2);
          else if (id_body === 'Experience') setPage(3);
          else if (id_body === 'Skills') setPage(4);
          else if (id_body === 'Project') setPage(5);
          else if (id_body === 'Contact') setPage(6);
          else setPage(0);
        }
      });
    }, options);

    target.forEach((section) => {
      observer.observe(section)
    });

    return;
  }, []);

  return (
    <Router>

      <div className='page'>
        <div className='overlay' onClick={() => {
          setNav({});
          setCross({});
          setExitNav(false);
        }} style={cross}></div>

        <div id='navigation-element' className='navigation' style={nav}>
          <Navbar className='navigation-body' page_no={page} />
        </div>

        <div className='push-aside'>
          <button className='push-aside-button' onClick={() => {
            if (pushAside === 'left') {
              document.getElementById('navigation-element').style.display = 'none';
              setPushAside('right');
            }
            else {
              document.getElementById('navigation-element').style.display = 'block';
              setPushAside('left');
            }
          }}>
            {(pushAside === 'left') ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-compact-left left-btn" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-right left-btn" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
            </svg>}

          </button>

        </div>

        <button className='cross' style={exitNavStyle} onClick={() => {
          setNav({});
          setCross({});
          setExitNav(false);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" /></svg>
        </button>

        <button className='hamburger' onClick={() => {
          setNav({ display: 'flex', height: '120vh', position: 'fixed', width: '40vw' });
          setCross({ height: '100vh', width: '100vw', backgroundColor: 'transparent', position: 'fixed' });
          setExitNav(true);
        }
        }>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>
        </button>

        <div className='content'>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>

      </div>
    </Router>
  );
}

export default App;