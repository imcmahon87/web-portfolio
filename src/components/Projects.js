import './Projects.css';
import React, { useState } from 'react';
import Fade from './Fade';
import Footer from './Footer';
import Questharmonics from './QuestHarmonics';
import WebPortfolio from './WebPortfolio';
import IanComposer from './IanComposer';
import logoQuest from '../assets/images/logo-questharmonics.png';
import logoReact from '../assets/images/logo-react.png';
import logoComposer from '../assets/images/logo-iancomposer.png';

// Track animation so we can't initiate transition twice back to back
let animating = 0;

function Projects() {
    // Each set of states corresponds to the main project page and each of its individual project pages
    const [showMain, setShowMain] = useState(true);
    const [showQuest, setShowQuest] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showComposer, setShowComposer] = useState(false);

    return (
        <div>
            <Fade show={showMain}>
                <div id="parallaxBanner" style={{}}>
                    <div id="bannerText">
                        <h1>Projects</h1>
                    </div>
                </div>
                <div id="contentWrapper">
                    <h3>Click a project for more info</h3>
                    <div class="projectBox">
                        <div class="projectLeft" onClick={(e) => {
                                                                    if (animating === 0) {
                                                                        animating = 1;
                                                                        setShowMain(showMain => !showMain);
                                                                        setTimeout(() => {
                                                                            document.getElementById('contentWrapper').style.opacity = 0;
                                                                            document.getElementById('parallaxBanner').style.opacity = 0;
                                                                            window.scrollTo(0, 0);
                                                                            setShowQuest(showQuest => !showQuest)
                                                                            animating = 0;
                                                                        }, 475);
                                                                    }
                                                                }
                                                            }>
                            <h3 class="underlineBlue">Quest Harmonics</h3>
                            <img src={logoQuest} />
                            <p>
                                Quest Harmonics is a digital storefront selling musical composition licenses 
                                for video games and other media. It utililizes the LAMP stack to keep track 
                                of user accounts, orders, and downloadable content.
                            </p>
                        </div>
                        <div class="projectRight" onClick={(e) => {
                                                                    if (animating === 0) {
                                                                        animating = 1;
                                                                        setShowMain(showMain => !showMain);
                                                                        setTimeout(() => {
                                                                            document.getElementById('contentWrapper').style.opacity = 0;
                                                                            document.getElementById('parallaxBanner').style.opacity = 0;
                                                                            window.scrollTo(0, 0);
                                                                            setShowPortfolio(showPortfolio => !showPortfolio)
                                                                            animating = 0;
                                                                        }, 475);
                                                                    }
                                                                }
                                                            }>
                            <h3 class="underlineGreen">Web Portfolio</h3>
                            <img src={logoReact} />
                            <p>
                                You're looking at it right now. This portfolio is a React.js single page app 
                                that behaves like a traditional website thanks to Reacts routing modules. This 
                                allows for finer control of animated transitions and reusable components.
                            </p>
                        </div>
                    </div>
                    <div class="projectBox">
                    <div class="projectLeft" style={{float: "none", margin: "0 auto"}} onClick={(e) => {
                                                                    if (animating === 0) {
                                                                        animating = 1;
                                                                        setShowMain(showMain => !showMain);
                                                                        setTimeout(() => {
                                                                            document.getElementById('contentWrapper').style.opacity = 0;
                                                                            document.getElementById('parallaxBanner').style.opacity = 0;
                                                                            window.scrollTo(0, 0);
                                                                            setShowComposer(showComposer => !showComposer)
                                                                            animating = 0;
                                                                        }, 475);
                                                                    }
                                                                }
                                                            }>
                            <h3 class="underlineOrange">Music Portfolio</h3>
                            <img style={{width: '40%'}} src={logoComposer} />
                            <p>
                                IanComposer.com is a website intended to showcase my hobby as a musician. 
                                It uses a jQuery plugin called jPlayer to generate custom CSS styled 
                                audio and video control panels, and follows responsive web design principles.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade show={showQuest}>
                <div id="projectWrapper">
                    <Questharmonics />
                    <h6 id="backButton" onClick={(e) => {
                                                if (animating === 0) {
                                                    animating = 1;
                                                    setShowQuest(showQuest => !showQuest);
                                                    setTimeout(() => {
                                                        document.getElementById('projectWrapper').style.opacity = 0;
                                                        document.getElementById('parallaxBanner').style.opacity = 0;
                                                        window.scrollTo(0, 0);
                                                        setShowMain(showMain => !showMain)
                                                        animating = 0;
                                                    }, 475);
                                                }
                                            }
                                        }>Back</h6>
                </div>
            </Fade>
            <Fade show={showPortfolio}>
                <div id="projectWrapper">
                    <WebPortfolio />
                    <h6 id="backButton" onClick={(e) => {
                                                if (animating === 0) {
                                                    animating = 1;
                                                    setShowPortfolio(showPortfolio => !showPortfolio);
                                                    setTimeout(() => {
                                                        document.getElementById('projectWrapper').style.opacity = 0;
                                                        document.getElementById('parallaxBanner').style.opacity = 0;
                                                        window.scrollTo(0, 0);
                                                        setShowMain(showMain => !showMain)
                                                        animating = 0;
                                                    }, 475);
                                                }
                                            }
                                        }>Back</h6>
                </div>
            </Fade>
            <Fade show={showComposer}>
                <div id="projectWrapper">
                    <IanComposer />
                    <h6 id="backButton" onClick={(e) => {
                                                if (animating === 0) {
                                                    animating = 1;
                                                    setShowComposer(showComposer => !showComposer);
                                                    setTimeout(() => {
                                                        document.getElementById('projectWrapper').style.opacity = 0;
                                                        document.getElementById('parallaxBanner').style.opacity = 0;
                                                        window.scrollTo(0, 0);
                                                        setShowMain(showMain => !showMain)
                                                        animating = 0;
                                                    }, 475);
                                                }
                                            }
                                        }>Back</h6>
                </div>
            </Fade>
            <Footer />
        </div>
    );
}

export default Projects;