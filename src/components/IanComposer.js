import screenMobile from '../assets/images/mobile-composer.png';
import screenDesktop from '../assets/images/desktop-composer.png';

function IanComposer() {
    return (
        <div>
            <div id="parallaxBanner">
                <div id="bannerText">
                    <h1>Music Portfolio</h1>
                </div>
            </div>
            <div id="contentWrapper">
                <div class="projectContent">
                    <div style={{textAlign: "center", marginBottom: '3em'}}>
                        <p>Site Link: <a href="https://www.iancomposer.com">https://www.iancomposer.com</a></p>
                    </div>
                    <div class="projectContentRight">
                        <img class="mobileScreenPic" src={screenMobile} />
                        <img class="desktopScreenPic" src={screenDesktop} />
                    </div>
                    <p>
                        This website uses a jQuery media library plugin known as jPlayer to deliver 
                        custom audio and video interfaces to the user. By combining jQuery’s simple approach 
                        to coding JavaScript with the ability to style audio controls using CSS, the media 
                        components become part of the overall visual presentation.
                    </p>
                    <p>
                        The site is optimized for mobile, desktop, and everything in between by taking 
                        advantage of responsive design principles. A blending of two passions—coding and 
                        music—it also gave me an opportunity to showcase my hobbies while learning a thing 
                        or two about multimedia design and presentation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IanComposer;