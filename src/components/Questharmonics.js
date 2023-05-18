import logoQuest from '../images/logo-questharmonics.png';
import questScreen from '../images/mobile-quest.png';


function Questharmonics() {
    return (
        <div>
            <div id="parallaxBanner">
                <div id="bannerText">
                    <h1>Quest Harmonics</h1>
                </div>
            </div>
            <div id="contentWrapper">
                <img class="projectContentImage" src={logoQuest} />
                <div class="projectContent">
                    <div style={{textAlign: "center"}}>
                        <p>Site Link: <a href="https://www.questharmonics.com">https://www.questharmonics.com</a></p>
                        <p><strong>Front-End:</strong> HTML, CSS, jQuery with jPlayer for media players</p>
                        <p><strong>Back-End:</strong> PHP, MySQL (LAMP)</p>
                    </div>
                    <div class="projectContentRight">
                        <img class="mobileScreenPic" src={questScreen} />
                    </div>
                    <p>
                        Quest Harmonics is an online storefront that sells licenses for digital music. 
                        Users create accounts to purchase items, at which point they can use the account 
                        portal to access their downloads. Content is offered in a variety of formats.
                    </p>
                    <p>
                        I coded the back-end of this website using PHP and MySQL. I used PHP's sessions 
                        to keep track of cart items and account activity. I also programmed typical account 
                        functionality such as updating user information, handling lost passwords, 
                        and accessing previous purchases.
                    </p>
                    <p>
                        The front-end utilizes simple but elegant HTML and CSS, much of which is generated 
                        via database entries so updating the database will automatically revise the music 
                        track listings without the need for new markup. Additionally, there is a strong focus 
                        on responsive web design for various screen sizes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Questharmonics;