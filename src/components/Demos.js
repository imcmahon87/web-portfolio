import Footer from './Footer';
import React, { useState } from 'react';
import Fade from './Fade';
import MovieDatabase from './movie-database/MovieDatabase';
import './Projects.css';
import databaseDDL from '../assets/movie-database-ddl.txt';

// Track animation so we can't initiate transition twice back to back
let animating = 0;

function Demos() {
    // Each set of states corresponds to the main project page and each of its individual project pages
    const [showMain, setShowMain] = useState(true);
    const [showMovieDatabase, setShowMovieDatabase] = useState(false);

    return (
        <div>
            <Fade show={showMain}>
                <div id="parallaxBanner" style={{}}>
                    <div id="bannerText">
                        <h1>Demos</h1>
                    </div>
                </div>
                <div id="contentWrapper">
                    <div className="demoBox">
                        <h3 className="underlineBlue">Movie Database</h3>
                        <p>
                            This demo loads a MySQL database and presents it into a user-friendly
                            interface. Users can select movies, directors, and genres to load 
                            different views, as well as search for keywords. As you search and navigate,
                            you can click to display the associated SQL queries for review.
                        </p>
                        <p>
                            The database is normalized to minimize redundancies and expedite data retrieval.
                        </p>
                        <div className="startButton" onClick={(e) => {
                                                                    if (animating === 0) {
                                                                        animating = 1;
                                                                        setShowMain(showMain => !showMain);
                                                                        setTimeout(() => {
                                                                            document.getElementById('contentWrapper').style.opacity = 0;
                                                                            document.getElementById('parallaxBanner').style.opacity = 0;
                                                                            window.scrollTo(0, 0);
                                                                            setShowMovieDatabase(showMovieDatabase => !showMovieDatabase)
                                                                            animating = 0;
                                                                        }, 475);
                                                                    }
                                                                }
                                                            }>
                            <h4>Start Demo</h4>
                        </div>
                        <a className="githubButton" target="_blank" style={{display: 'block'}} href={databaseDDL}>View SQL DDL/DML</a>
                        <a className="githubButton" target="_blank" style={{display: 'block'}} href="https://github.com/imcmahon87/movie-database">View GitHub Repository</a>
                    </div>
                </div>
            </Fade>
            <Fade show={showMovieDatabase}>
                <div id="projectWrapper">
                    <div id="parallaxBanner" style={{}}>
                        <div id="bannerText">
                            <h1>Movie Database</h1>
                        </div>
                    </div>
                    <div id="demoWrapper">
                        <MovieDatabase />
                    </div>
                </div>
            </Fade>
            <Footer />
        </div>
    );
}

export default Demos;