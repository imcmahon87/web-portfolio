import resume from '../images/resume.pdf';

function Skills() {
    return (
        <div id="contentWrapper">
            <h1>Skills</h1>
            <p>For a concise skills summary, please view my <a href={resume} target="_blank">resume</a>.</p>
            <div class="contentBox">
                <div id="contentLeft">
                    <h3>HTML/CSS</h3>
                    <p>Responsive web design implemented to look great on any screen size</p>
                    <h3>JavaScript</h3>
                    <p>ES6 syntax, synchronous and asynchronous patterns, DOM manipulation, jQuery</p>
                    <h3>React</h3>
                    <p>Functional and class based components, hooks, routing</p>
                    <h3>Node</h3>
                    <p>Core packages, NPM, servers using http and Express.js modules</p>
                    <h3>Git</h3>
                    <p>Git Bash terminal, multiple branches</p>
                    <h3>PHP</h3>
                    <p>Form handling, sessions</p>
                </div>
                <div id="contentRight">
                    <h3>Database Design</h3>
                    <p>Access, SQL Server, phpMyAdmin, normalization</p>
                    <h3>SQL</h3>
                    <p>Queries, subqueries, aggregation, joins, users, permissions</p>
                    <h3>Cybersecurity</h3>
                    <p>Best practices, secure coding, Linux/Windows settings, logging, firewalls</p>
                    <h3>Data Analytics</h3>
                    <p>Visualization, JupyterLab, Tableau, predictive analysis using Python</p>
                    <h3>Windows and Linux</h3>
                    <p>Administrative tasks via command prompt, settings, virtualization, SSH</p>
                    <h3>Graphic Design</h3>
                    <p>User interfaces, web graphics, logos, print designs, Adobe suite</p>
                </div>
            </div>
            <h2>Education</h2>
            <p>AAS degree in Computer Information Systems</p>
            <p>Secure Coding Certificate</p>
            <p>Cybersecurity Fundamentals Certificate</p>
            <p>Graduating Spring, 2023</p>
        </div>
    );
}

export default Skills;