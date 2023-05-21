import screenMobile from '../assets/images/mobile-portfolio.png';
import screenDesktop from '../assets/images/desktop-portfolio.png';


function WebPortfolio() {
    return (
        <div>
            <div id="parallaxBanner">
                <div id="bannerText">
                    <h1>Web Portfolio</h1>
                </div>
            </div>
            <div id="contentWrapper">
                <div class="projectContent">
                    <div class="projectContentRight">
                        <img class="mobileScreenPic" src={screenMobile} />
                        <img class="desktopScreenPic" src={screenDesktop} />
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
                        The included demos focus on server-side programming in Node.js. For those interested, 
                        their code (as well as the code for this website) is available on GitHub via their respective pages.
                    </p>
                </div>
                <a className="githubButton" target="_blank" style={{display: 'block', margin: '2em auto 1em auto'}} href="https://github.com/imcmahon87/web-portfolio">View this site's GitHub repository</a>
            </div>
        </div>
    );
}

export default WebPortfolio;