import { Link } from 'react-router-dom';
import circlePurple from '../images/circlePurple.png';
import circleRed from '../images/circleRed.png';
import circleBlue from '../images/circleBlue.png';
import circleGreen from '../images/circleGreen.png';

function MobileHeader() {
    // Toggle Demos Menu
    let demoMenuVisible = false;
    function demoMenu() {
        let links = document.getElementById("demosMenu");
        if (!demoMenuVisible) {
            links.style.maxHeight = "200px";
            links.style.transition = "max-height .25s ease-in";
            demoMenuVisible = !demoMenuVisible
        } else {
            links.style.maxHeight = "0";
            links.style.transition = "max-height .25s ease-out";
            demoMenuVisible = !demoMenuVisible;
        }
    }

    return (
        <div id="header">
        <div id="headerHome">
            <img src={circlePurple}/>
            <Link to="/">Home</Link>
        </div>
        <div id="headerResume">
            <img src={circleRed}/>
            <Link to="/resume">Resume</Link>
        </div>
        <div id="headerSites">
            <img src={circleBlue}/>
            <p>Sites</p>
        </div>
        <div id="headerDemos" onClick={demoMenu}>
            <img src={circleGreen} />
            <p>Demos</p>
        </div>
        <div id="demosMenu">
            <p>Video Game Demo</p>
            <p>Database Demo</p>
            <p>Third demo</p>
        </div>
    </div>
    );
}

export default MobileHeader;