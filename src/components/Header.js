import './Header.css';
import { Link } from 'react-router-dom';

// Used for deciding which direction animation will scroll from
let backgroundOldX = 0;
let backgroundNewX = 0;
let trackOldX = 0;

// Menu underline coordinates
let line;
let offset;
let parentPos;
let childPos;
let page;

function Header(props) {

    page = props.page;

    // On load, put the menu underline in the correct spot
    window.onload = () => {
        if (page === 'Home') {
            shiftBackground(1);
        } else if (page === 'Skills') {
            shiftBackground(2);
        } else if (page === 'Projects') {
            shiftBackground(3);
        } else if (page === 'Demos') {
            shiftBackground(4);
        } else {
            shiftBackground(1);
        }
    }

    // Update underline when resizing window
    window.addEventListener('resize', () => {
        shiftBackground(backgroundNewX);
    });
    // For the particular page, set the background offset and also disable its respective icon (to prevent animating)
    let disableHome;
    let disableSkills;
    let disableProjects;
    let disableDemos;

    // For each section, disable animation for its button and track which way the animation scrolls
    if (props.page === 'Home') {
        disableHome = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
    } else {
        disableHome = false;
    }
    if (props.page === 'Skills') {
        disableSkills = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
    } else {
        disableSkills = false;
    }
    if (props.page === 'Projects') {
        disableProjects = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
    } else {
        disableProjects = false;
    }
    if (props.page === 'Demos') {
        disableDemos = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
    } else {
        disableDemos = false;
    }

    // Update scroll direction and animate the header underlining
    function shiftBackground(newX) {
        backgroundOldX = backgroundNewX;
        backgroundNewX = newX;
        parentPos = document.getElementById('headerLinks').getBoundingClientRect();
        if (newX === 1) {
            childPos = document.getElementById('headerHome').offsetLeft;
        } else if (newX === 2) {
            childPos = document.getElementById('headerSkills').offsetLeft;
        } else if (newX === 3) {
            childPos = document.getElementById('headerProjects').offsetLeft;
        } else {
            childPos = document.getElementById('headerDemos').offsetLeft;
        }
        offset = document.getElementById('headerHome').offsetLeft;
        line = document.getElementById('underline');
        line.style.left = (childPos) + 'px';
    }

    // Set which direction the animation will scroll
    function setContentDirection(oldX, newX) {
        if (oldX < newX) {
            document.documentElement.style.setProperty('--contentStart', '100vw');
            document.documentElement.style.setProperty('--contentMiddle', '0');
            document.documentElement.style.setProperty('--contentEnd', '-100vw');
        } else {
            document.documentElement.style.setProperty('--contentStart', '-100vw');
            document.documentElement.style.setProperty('--contentMiddle', '0');
            document.documentElement.style.setProperty('--contentEnd', '100vw');
        }

    }

    return (
        <div id="header" class="headerGradient">
            <div id="headerLinks">
                <div id="headerHome">
                    {disableHome ?
                        <Link to="/" onClick={e => e.preventDefault()}>
                            <h4>Home</h4>
                        </Link>
                    :
                        <Link to="/" onClick={() => {shiftBackground(1)}}>
                            <h4>Home</h4>
                        </Link>
                    }
                </div>
                <div id="headerSkills">
                    {disableSkills ?
                        <Link to="/skills" onClick={e => e.preventDefault()}>
                            <h4>Skills</h4>
                        </Link>
                    :
                        <Link to="/skills" onClick={() => {shiftBackground(2)}}>
                            <h4>Skills</h4>
                        </Link>
                    }
                </div>
                <div id="headerProjects">
                    {disableProjects ?
                        <Link to="/projects" onClick={e => e.preventDefault()}>
                            <h4>Projects</h4>
                        </Link>
                    :
                        <Link to="/projects" onClick={() => {shiftBackground(3)}}>
                            <h4>Projects</h4>
                        </Link>
                    }
                </div>
                <div id="headerDemos">
                    {disableDemos ?
                        <Link to="/demos" onClick={e => e.preventDefault()}>
                            <h4>Demos</h4>
                        </Link>
                    :
                        <Link to="/demos" onClick={() => {shiftBackground(4)}}>
                            <h4>Demos</h4>
                        </Link>
                    }
                </div>
                <div id="underline">
                </div>
            </div>
        </div>
    );
}

export default Header;