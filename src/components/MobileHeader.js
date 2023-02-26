import { Link } from 'react-router-dom';
import circlePurple from '../images/circlePurple.png';
import circleRed from '../images/circleRed.png';
import circleBlue from '../images/circleBlue.png';
import circleGreen from '../images/circleGreen.png';

function MobileHeader(props) {
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

    let disableHome;
    let disableResume;
    let disableSites;

    if (props.page === "Home") {
        disableHome = true;
    } else {
        disableHome = false;
    }
    if (props.page === "Resume") {
        disableResume = true;
    } else {
        disableResume = false;
    }
    if (props.page === "Sites") {
        disableSites = true;
    } else {
        disableSites = false;
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
                <Link to="/">
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
                <Link to="/resume">
                    <img src={circleRed}/>
                    <p>Resume</p>
                </Link>
            }
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