import photoIan from '../images/photo-ian.jpg';
import resume from '../images/resume.pdf';

function Home() {
    return (
        <div>
            <div id="landingBanner">
                <div id="landingText">
                    <h1>Ian McMahon</h1>
                </div>
            </div>
            <div id="homeWrapper">
                
                <h3 class="blueUnderline">Full Stack Web Developer</h3>
                <div class="contentBox">
                    <div id="contentRight" style={{textAlign: 'center'}}>
                        <img id="photoReact" src={photoIan} />
                    </div>
                    <p class="topParagraph">
                        Developing for the web is my passion. I enjoy combining technical skillsets with artistic expression 
                        in order to reach project goals. I have an appetite for learning new things, and with ever expanding
                        frameworks to experiment with, I look forward to growing with the technology.
                    </p>
                    <p>
                        This portfolio demonstrates some of the highlights of my continued journey in web development, programming,
                        managing databases, and more. You can view previous projects as well as live demonstrations, complete with 
                        Git repositories.
                    </p>
                </div>
                <p>
                    For contact information, please view my <a href={resume} target="_blank">resume</a>.
                </p>
                <h2>
                    Key Focuses
                </h2>
            </div>
        </div>
    );
}

export default Home;