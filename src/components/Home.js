import './Home.css';
import Footer from './Footer';
import photoIan from '../images/photo-ian.jpg';
import iconFrontend from '../images/icon-frontend.png';
import iconBackend from '../images/icon-backend.png';
import iconDatabase from '../images/icon-database.png';
import iconSecurity from '../images/icon-security.png';
import iconDegree from '../images/icon-degree.png';
import iconCertificate from '../images/icon-certificate.png';
import resume from '../images/resume.pdf';

/*
function test() {
    console.log('teeeeeest');
    setTimeout(() => {let something = document.getElementById('landingBanner'); console.log(something);
                something.style.backgroundAttachment = 'fixed';}, 1000);
}
*/

function Home() {
    return (
        <div>
            <div id="landingBanner">
                <div id="landingText">
                    <h1>Ian McMahon</h1>
            </div>
            </div>
            <div id="homeWrapper">
                <h3 class="underlineBlue">Full Stack Web Developer</h3>
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
                    <p>
                        For contact information, please view my <a href={resume} target="_blank">resume</a>.
                    </p>
                </div>
                <h2 class="underlineBlue">Key Focuses</h2>
                <div class="focusBox">
                    <div class="focusesLeft">
                        <div style={{float: 'left'}}>
                            <img src={iconFrontend} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>Front-End</h5>
                            <p>
                                I combine graphic design principles with modern frameworks to create 
                                responsive and functional front-end applications.
                            </p>
                        </div>
                    </div>
                    <div class="focusesRight">
                        <div style={{float: 'left'}}>
                            <img src={iconBackend} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>Back-End</h5>
                            <p>
                                Where the magic happens. I program web apps, database communication,
                                servers, and server side logic and processing.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="focusBox">
                    <div class="focusesLeft">
                        <div style={{float: 'left'}}>
                            <img src={iconDatabase} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>Databases</h5>
                            <p>
                                I've used a variety of database management systems to design 
                                and implement efficient, normalized databases.
                            </p>
                        </div>
                    </div>
                    <div class="focusesRight">
                        <div style={{float: 'left'}}>
                            <img src={iconSecurity} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>Secure Coding</h5>
                            <p>
                                Whether validating user input or protecting against buffer overflow 
                                vulnerabilities, I can help improve data security.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 class="underlineBlue">Education</h2>
                <div class="focusBox" style={{justifyContent: 'center'}}>
                    <div class="focusesLeft">
                        <div style={{float: 'left'}}>
                            <img src={iconDegree} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>CIS Degree</h5>
                            <p>
                                Associate of Applied Science in computer information systems. Graduating 
                                Spring of 2023. Current GPA of 4.0.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="focusBox" style={{padding: 0}}>
                    <div class="focusesLeft">
                        <div style={{float: 'left'}}>
                            <img src={iconCertificate} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5>Cybersecurity Foundations</h5>
                            <p>
                                Certificate from Portland Community College. Includes education in 
                                operating systems security, data communication concepts, and cybersecurity 
                                concepts.
                            </p>
                        </div>
                    </div>
                    <div class="focusesRight">
                        <div style={{float: 'left'}}>
                            <img src={iconCertificate} />
                        </div>
                        <div style={{display: 'inline'}}>
                            <h5 style={{display: 'inline-block'}}>Secure Programming</h5>
                            <p>
                                Certificate from Portland Community College. Includes education in 
                                information security, secure coding, linux, and data modeling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;