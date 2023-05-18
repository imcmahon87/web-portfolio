import logoReact from '../images/logo-react.png';
import questScreen from '../images/mobile-portfolio.png';


function WebPortfolio() {
    return (
        <div>
            <div id="parallaxBanner">
                <div id="bannerText">
                    <h1>Web Portfolio</h1>
                </div>
            </div>
            <div id="contentWrapper">
                <img class="projectContentImage" src={logoReact} />
                <div class="projectContent">
                    <div class="projectContentRight">
                        <img class="mobileScreenPic" src={questScreen} />
                    </div>
                    <p>
                        This portfolio was coded in React. Because function based React components are the modern 
                        approach, I used them and their included hooks to implement component state, when necessary 
                        (mostly for handling animation transitions). Browser routing is accomplished via the 
                        react-router-dom package that allows your webapp to traverse URLs without reloading the app.
                    </p>
                    <p>
                        The slide/fade animations utilize an NPM package known as react-transition-group, which 
                        includes a CSS animation suite ideal for implementing these visuals into React projects. 
                        They even work when transitioning between separate URLs within the web app, something 
                        traditional PHP-based websites would likely not be able to accomplish.
                    </p>
                    <p>
                        The included demos focus on server-side code in Node and PHP. For those interested, 
                        their code (as well as the code for this website) is available on GitHub via their respective pages.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WebPortfolio;