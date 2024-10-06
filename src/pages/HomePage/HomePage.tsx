import CardWrapper from "../../components/CardWrapper/CardWrapper";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./homePage.css";
const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Navigation />
            <main className="main">
                <section className="site-section" id="about">
                    <CardWrapper html="div" modifier="about">
                        <article>
                            <h1 className="site-section__title">Om mig:</h1>
                            <p className="site-section__bread">
                                Hej! Mitt namn är Magnus Nilsson och jag är en blivande utvecklare. Läser nu andra året på folkuniversitetets program
                                för frontendutvecklare. Tidigare arbetat med fysiska arbeten men vill få utlopp för min kreativa sida och sadlar nu
                                om.
                            </p>
                            <p className="site-section__bread">
                                Älskar att lösa problem både på frontend och backend. Målet är så klart att bli en kompetent fullstackutvecklare!
                            </p>
                            <p className="site-section__bread">
                                Utöver kod älskar jag att nörda ned mig i musik, litteratur, spel och engelsk fotboll.
                            </p>
                        </article>
                        <img className="site-section__image" src="assets/images/me-sketched.png" alt="A black and white photo of me." />
                    </CardWrapper>
                    <CardWrapper html="article" modifier="about">
                        <h2 className="site-section__title">Erfarenheter:</h2>
                        <p className="site-section__bread">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                            architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero
                            assumenda nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                        </p>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="about">
                        <h2 className="site-section__title">Kunskaper:</h2>
                        <p className="site-section__bread">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                            architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero
                            assumenda nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                        </p>
                    </CardWrapper>
                </section>
                <section className="site-section" id="projects">
                    <CardWrapper html="article" modifier="projects">
                        <h2 className="site-section__title">Projekt:</h2>
                        <p className="site-section__bread">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                            architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero
                            assumenda nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                        </p>
                    </CardWrapper>
                </section>
                <section className="site-section" id="contact">
                    <CardWrapper html="article" modifier="contact">
                        <h2 className="site-section__title">Kontakta:</h2>
                        <p className="site-section__bread">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                            architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero
                            assumenda nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                        </p>
                    </CardWrapper>
                </section>
            </main>
        </>
    );
};

export default HomePage;
