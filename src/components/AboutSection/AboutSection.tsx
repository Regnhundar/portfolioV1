import CardWrapper from "../CardWrapper/CardWrapper";
import TechStackDisplay from "../TechStackDisplay/TechStackDisplay";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import "./aboutSection.css";

const AboutSection: React.FC = () => {
    const { ref: sectionRef, inView } = useInView({
        threshold: 0,
    });
    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: 0.2,
    });

    const { ref: experienceRef, inView: experienceInView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            anime({
                targets: "#aboutMe",
                translateY: 0,
                opacity: [0, 1],
                duration: 800,
                easing: "easeInOutQuad",
            });
        } else {
            anime({
                targets: "#aboutMe",
                translateY: "20%",
                opacity: [1, 0],
                duration: 800,
                easing: "easeInOutQuad",
            });
        }
    }, [inView]);

    useEffect(() => {
        if (skillsInView) {
            anime({
                targets: "#skills",
                translateX: ["-20%", 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutElastic",
            });
            anime({
                targets: ".site-section__skills-list-item",
                scale: ["1", "4", "1"],

                delay: anime.stagger(150),
                duration: 500,
                easing: "easeInOutElastic",
            });
        } else {
            anime({
                targets: "#skills",
                translateX: [0, "-20%"],
                opacity: [1, 0],
                duration: 800,
                easing: "easeOutElastic",
            });
        }
    }, [skillsInView]);

    useEffect(() => {
        if (experienceInView) {
            anime({
                targets: "#experience",
                translateX: ["20%", 0],
                opacity: [0, 1],
                duration: 800,
                easing: "easeOutElastic",
            });
        } else {
            anime({
                targets: "#experience",
                translateX: [0, "20%"],
                opacity: [1, 0],
                duration: 800,
                easing: "easeOutElastic",
            });
        }
    }, [experienceInView]);

    return (
        <section className="site-section site-section--about" id="about" ref={sectionRef}>
            <CardWrapper html="div" modifier="about" id="aboutMe">
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

            <CardWrapper html="article" modifier="about" ref={skillsRef} id="skills">
                <h2 className="site-section__title site-section__title--subtitle">Kunskaper:</h2>
                <div className="site-section__inner-text-wrapper">
                    <p className="site-section__bread">
                        Vi lär oss så klart om programmering men också om agilt arbete, UX/UI med fokus på tillgänglighet och design.
                    </p>
                    <TechStackDisplay />
                </div>
            </CardWrapper>
            <CardWrapper html="article" modifier="about" ref={experienceRef} id="experience">
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
