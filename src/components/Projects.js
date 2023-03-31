import React, { useState } from 'react';
import Fade from './Fade';
import Questharmonics from './Questharmonics';

function Projects() {

    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(false);

    return (
        <div>
            <Fade show={show}>
            <div id="contentWrapper">
                <h1>Projects</h1>
                <div class="projectBox">
                    <div class="projectLeft" onClick={(e) => {
                                                                            setShow(show => !show);
                                                                            setTimeout(() => {
                                                                                document.getElementById('contentWrapper').style.opacity = 0;
                                                                                setShow2(show2 => !show2)
                                                                            }, 1000);
                                                                        }
                                                                    
                                                                }>
                        <h3>Quest Harmonics</h3>
                        <p>
                            Quest Harmonics is an online storefront selling licenses for digital music. 
                            The backend uses PHP and phpMyAdmin for the database.
                        </p>
                    </div>
                    <div class="projectRight">
                        <h3>Quest Harmonics</h3>
                        <p>
                            Quest Harmonics is an online storefront selling licenses for digital music. 
                            The backend uses PHP and phpMyAdmin for the database.
                        </p>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade show={show2}>
                <Questharmonics />
            </Fade>
        </div>
    );
}

export default Projects;