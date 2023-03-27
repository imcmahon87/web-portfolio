import { Link } from 'react-router-dom';
import circlePurple from '../images/circlePurple.png';
import circleRed from '../images/circleRed.png';
import circleBlue from '../images/circleBlue.png';
import circleGreen from '../images/circleGreen.png';

let backgroundOldX = 0;
let backgroundNewX = 0;

function MobileHeader(props) {

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

    // For the particular page, set the background offset and also disable its respective icon (to prevent animating)
    let disableHome;
    let disableResume;
    let disableSites;
    let disableDemos;

    let trackOldX;

    if (props.page === 'Home') {
        disableHome = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '0vw');
    } else {
        disableHome = false;
    }
    if (props.page === 'Resume') {
        disableResume = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '-33vw');
    } else {
        disableResume = false;
    }
    if (props.page === 'Sites') {
        disableSites = true;
        trackOldX = backgroundOldX;
        backgroundOldX = backgroundNewX;
        setContentDirection(trackOldX, backgroundNewX);
        document.documentElement.style.setProperty('--backgroundInitial', '-66vw');
    } else {
        disableSites = false;
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

    function backgroundTest(newX) {
        let element = document.getElementById('wrapper');
        backgroundOldX = backgroundNewX;
        backgroundNewX = newX;
        document.documentElement.style.setProperty('--backgroundStart', backgroundOldX + 'vw');
        document.documentElement.style.setProperty('--backgroundEnd', backgroundNewX + 'vw');
        element.classList.remove('wrapper');
        setTimeout(() => element.classList.add('wrapper'), 1);
        setTimeout(() => element.style.backgroundPositionX = backgroundNewX + 'vw', 100);
    }

    return (
        <div id="header">
            <div id="headerHome">
                {disableHome ?
                    <Link to="/" onClick={e => e.preventDefault()}>
                        <img src={circlePurple}/>
                        <p>Home</p>
                    </Link>
                :
                    <Link to="/" onClick={() => {backgroundTest(0)}}>
                        <img src={circlePurple}/>
                        <p>Home</p>
                    </Link>
                }
            </div>
            <div id="headerResume">
                {disableResume ?
                    <Link to="/resume" onClick={e => e.preventDefault()}>
                        <img src={circleRed}/>
                        <p>Resume</p>
                    </Link>
                :
                    <Link to="/resume" onClick={() => {backgroundTest(-33)}}>
                        <img src={circleRed}/>
                        <p>Resume</p>
                    </Link>
                }
            </div>
            <div id="headerSites">
                {disableSites ?
                    <Link to="/sites" onClick={e => e.preventDefault()}>
                        <img src={circleBlue}/>
                        <p>Sites</p>
                    </Link>
                :
                    <Link to="/sites" onClick={() => {backgroundTest(-66)}}>
                        <img src={circleBlue}/>
                        <p>Sites</p>
                    </Link>
                }
            </div>
            <div id="headerDemos">
                {disableDemos ?
                    <Link to="/demos" onClick={e => e.preventDefault()}>
                        <img src={circleGreen}/>
                        <p>Demos</p>
                    </Link>
                :
                    <Link to="/demos" onClick={() => {backgroundTest(-99)}}>
                        <img src={circleGreen}/>
                        <p>Demos</p>
                    </Link>
                }
            </div>
        </div>
    );
}

export default MobileHeader;