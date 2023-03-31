import './Header.css';
import { Link } from 'react-router-dom';
import buttonHome from '../images/button-home.png';

let backgroundOldX = 0;
let backgroundNewX = 0;

function Header(props) {

    // For the particular page, set the background offset and also disable its respective icon (to prevent animating)
    let disableHome;
    let disableSkills;
    let disableProjects;
    let disableDemos;

    let trackOldX;

    // For each section, disable animation for its button and track background coordinates for next animation
    if (props.page === 'Home') {
        disableHome = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '0vw');
    } else {
        disableHome = false;
    }
    if (props.page === 'Skills') {
        disableSkills = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '-33vw');
    } else {
        disableSkills = false;
    }
    if (props.page === 'Projects') {
        disableProjects = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '-66vw');
    } else {
        disableProjects = false;
    }
    if (props.page === 'Demos') {
        disableDemos = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '-99vw');
    } else {
        disableDemos = false;
    }

    // Take new background coordinate and shift to it
    function shiftBackground(newX) {
        let element = document.getElementById('wrapper');
        backgroundOldX = backgroundNewX;
        backgroundNewX = newX;
        document.documentElement.style.setProperty('--backgroundStart', backgroundOldX + 'vw');
        document.documentElement.style.setProperty('--backgroundEnd', backgroundNewX + 'vw');
        element.classList.remove('wrapper');
        setTimeout(() => element.classList.add('wrapper'), 1);
        setTimeout(() => element.style.backgroundPositionX = backgroundNewX + 'vw', 100);
    }

    // If background coordinate is less than the new coordinate, shift left, otherwise shift right
    function setContentDirection(oldX, newX) {
        console.log(oldX + ', ' + newX);
        if (oldX > newX) {
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
                        <Link to="/" onClick={() => {shiftBackground(0)}}>
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
                        <Link to="/skills" onClick={() => {shiftBackground(-33)}}>
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
                        <Link to="/projects" onClick={() => {shiftBackground(-66)}}>
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
                        <Link to="/demos" onClick={() => {shiftBackground(-99)}}>
                            <h4>Demos</h4>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;