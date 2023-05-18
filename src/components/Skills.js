import './Skills.css';
import resume from '../images/resume.pdf';
import Footer from './Footer';

function Skills() {
    return (
        <div>
            <div id="parallaxBanner">
                <div id="bannerText">
                    <h1>Skills Summary</h1>
                </div>
            </div>
        <div id="contentWrapper">
            <p>For a concise skills summary, please view my <a href={resume} target="_blank">resume</a>.</p>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlinePurple">HTML/CSS</h3>
                    <p>
                        Responsive web design implemented to look great on any screen size.
                        Proficient with HTML inputs, form handling, multimedia, CSS box-models, 
                        pseudo-elements, and flex-boxes.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineGreen">JavaScript</h3>
                    <p>
                        My preferred language for both front and back-end (using Node.js). Savvy with
                        ES6 syntax, DOM manipulation, jQuery, promises, async/await, and built in functions.
                    </p>
                </div>
            </div>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlineOrange">React</h3>
                    <p>
                        This site was created using React. I have familiarity with function and class-based 
                        components, JSX, hooks, routing, and using component state and properties.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineBlue">Node</h3>
                    <p>
                        Server side coding skills for back-end functionality. I've used the
                        core packages such as http, url, path, fs, as well as many NPM packages. 
                        Experience spinning up Express servers.
                    </p>
                </div>
            </div>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlineCyan">Database Design</h3>
                    <p>
                        I can persist your data in an efficient and sensible manner. Experience with
                        Microsoft Access, SQL Server, phpMyAdmin, and MySQL. Understanding of 
                        normalization, cardinality, and business logic in the database.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineRed">SQL</h3>
                    <p>
                        Knowledge of SQL as a data definition, manipulation, and query language. Ability to 
                        use joins, subqueries and aggregation to interact with databases, as well 
                        as managing users and permissions.
                    </p>
                </div>
            </div>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlinePurple">Git</h3>
                    <p>
                        I've done collaborative work with other Git users. Experience with Git Bash,
                        GitHub, branches, pushing/pulling and merging projects with other team members.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineGreen">PHP</h3>
                    <p>
                        Another great approach to server side scripting. Understanding of form handling, 
                        sessions, object-oriented-programming, and database connections.
                    </p>
                </div>
            </div>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlineOrange">Cybersecurity</h3>
                    <p>
                        Never to be overlooked, cybersecurity best practices must always be 
                        incorporated. I've studied network security, firewall configuration,
                        security logging, and secure coding practices.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineBlue">Data Analytics</h3>
                    <p>
                        I am enthusiastic to learn more about this exciting field. I've created 
                        visualizations using JupyterLab and Tableau, as well as touched upon
                        predictive data analaysis with Python.
                    </p>
                </div>
            </div>
            <div class="skillBox">
                <div class="skillLeft">
                    <h3 class="underlineCyan">Operating Systems</h3>
                    <p>
                        I'm most comfortable in Windows and Linux, but always open to new 
                        environments. Understanding of administrative tasks via command 
                        prompt, SSH, virtualization, settings, and user permissions.
                    </p>
                </div>
                <div class="skillRight">
                    <h3 class="underlineRed">Graphic Design</h3>
                    <p>
                        Visual presentation is one of my favorite aspects of web development. 
                        Strong background in user interfaces, logos, print designs, Photoshop and
                        Illustrator.</p>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Skills;