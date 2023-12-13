import './main.css';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Education() {

    const nodeRef = useRef(null);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const item_css = {
        backgroundColor: '#2c98f0',
        color: 'white',
        transition: '400ms'
    }

    const item_css_collapse = {
        backgroundColor: '#f2f3f7',
        color: '#333333',
        transition: '400ms'
    }

    const plus = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" /></svg>
    const minus = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" /></svg>

    function click1() {
        setShow1(!show1);
        if (show2 === true) setShow2(false);
        if (show3 === true) setShow3(false);
    }

    function click2() {
        setShow2(!show2);
        if (show1 === true) setShow1(false);
        if (show3 === true) setShow3(false);
    }

    function click3() {
        setShow3(!show3);
        if (show2 === true) setShow2(false);
        if (show1 === true) setShow1(false);
    }

    return (
        <div id='Education' className='body-element'>
            <div className='education-head'>
                <div className='education-heading'>
                    <h5 className='headingrow1-edu'>EDUCATION</h5>
                    <h1 className='headingrow2-edu'>ACADEMIC BACKGROUND</h1>
                </div>
            </div>
            <div className='edu-list'>

                <button className='edu-item' style={(show1 === true) ? item_css : item_css_collapse} onClick={click1}>
                    <div className='edu-item-row'>
                        <div>BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE</div>
                        {(show1 === true) ? minus : plus}
                    </div>
                </button>

                <CSSTransition in={show1}
                    timeout={400}
                    classNames="list-transition"
                    unmountOnExit
                    appear
                >
                    <div key='asdfasdf' className='item1-edu'>
                        <div className='eduLine1'>
                            <p>Graphic Era Deemed To be University</p>
                            <p>Bachelor of Technology in Computer Science</p>
                            <p>CGPA 8.82</p>
                        </div>
                        <div className='eduLine2'>
                            <p>Dehradun, Uttarakhand</p>
                            <p>2019 - 2023</p>
                        </div>
                    </div>   
                </CSSTransition>

                <button className='edu-item' style={(show2 === true) ? item_css : item_css_collapse} onClick={click2}>
                    <div className='edu-item-row'>
                        <div>SENIOR SECONDARY EDUCATION</div>
                        {(show2 === true) ? minus : plus}
                    </div>
                </button>

                <CSSTransition in={show2}
                    timeout={400}
                    classNames="list-transition"
                    unmountOnExit
                    appear
                >
                    <div key='asfsdf' className='item1-edu'>
                        <div className='eduLine1'>
                            <p>Rishikesh Public School</p>
                            <p>ISC Board</p>
                            <p>Scored 94.25%</p>
                        </div>
                        <div className='eduLine2'>
                            <p>Rishikesh, Uttarakhand</p>
                            <p>2018 - 2019</p>
                        </div>
                    </div>   
                </CSSTransition>

                <button className='edu-item' style={(show3 === true) ? item_css : item_css_collapse} onClick={click3}>
                    <div className='edu-item-row'>
                        <div>HIGHER SECONDARY EDUCATION</div>
                        {(show3 === true) ? minus : plus}
                    </div>
                </button>

                <CSSTransition in={show3}
                    timeout={400}
                    classNames="list-transition"
                    unmountOnExit
                    appear
                >
                    <div key='asfsdf' className='item1-edu'>
                        <div className='eduLine1'>
                            <p>Rishikesh Public School</p>
                            <p>ICSE Board</p>
                            <p>Scored 86.67%</p>
                        </div>
                        <div className='eduLine2'>
                            <p>Rishikesh, Uttarakhand</p>
                            <p>2016 - 2017</p>
                        </div>
                    </div>   
                </CSSTransition>
            </div>
        </div>
    )
}