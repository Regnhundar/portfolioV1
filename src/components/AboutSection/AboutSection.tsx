import CardWrapper from "../CardWrapper/CardWrapper";
import TechStackDisplay from "../TechStackDisplay/TechStackDisplay";
import "./aboutSection.css";

const AboutSection: React.FC = () => {
    return (
        <section className="site-section site-section--about" id="about">
            <CardWrapper html="div" modifier="about">
                <article className="site-section__inner-text-wrapper">
                    <h1 className="site-section__title">Om mig:</h1>

                    <p className="site-section__bread">Hej!</p>
                    <p className="site-section__bread">
                        Magnus heter jag och jag är en blivande utvecklare. Läser nu andra året på folkuniversitetets program för frontendutvecklare.
                        Älskar att lösa problem både på frontend och backend. Målet är att bli en kompetent fullstackutvecklare!
                    </p>
                    <p className="site-section__bread">Utöver kod älskar jag att nörda ned mig i musik, litteratur, spel och engelsk fotboll.</p>
                </article>
                <img className="site-section__image" src="assets/images/photos/me-sketched.png" alt="A black and white photo of me." />
            </CardWrapper>

            <CardWrapper html="article" modifier="about">
                <h2 className="site-section__title site-section__title--subtitle">Kunskaper:</h2>
                <div className="site-section__inner-text-wrapper">
                    <p className="site-section__bread">
                        Vi lär oss så klart om programmering men också om agilt arbete, UX/UI med fokus på tillgänglighet och design.
                    </p>
                    <TechStackDisplay />
                </div>
            </CardWrapper>
            <CardWrapper html="article" modifier="about">
                <h2 className="site-section__title site-section__title--subtitle">Erfarenheter:</h2>
                <div className="site-section__inner-text-wrapper">
                    <p className="site-section__bread">
                        Tidigare arbetat med fysiska arbeten men vill få utlopp för min kreativa sida och sadlar nu om.
                    </p>
                    <p className="site-section__bread">Söker praktikplats för vecka 2-10 2025.</p>
                    <p className="site-section__bread">Kanske hos er?</p>
                </div>
            </CardWrapper>
        </section>
    );
};

export default AboutSection;
