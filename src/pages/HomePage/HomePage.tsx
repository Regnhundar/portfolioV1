import CardWrapper from "../../components/CardWrapper/CardWrapper";
import ContactForm from "../../components/ContactForm/ContactForm";
import TextButton from "../../components/TextButton/TextButton";

import "./homePage.css";
const HomePage: React.FC = () => {
    return (
        <>
            <main className="main">
                <section className="site-section site-section--about" id="about">
                    <CardWrapper html="div" modifier="about">
                        <article className="site-section__inner-text-wrapper">
                            <h1 className="site-section__title">Om mig:</h1>

                            <p className="site-section__bread">
                                Mitt namn är Magnus Nilsson och jag är en blivande utvecklare. Läser nu andra året på folkuniversitetets program för
                                frontendutvecklare.
                            </p>
                            <p className="site-section__bread">
                                Älskar att lösa problem både på frontend och backend. Målet är så klart att bli en kompetent fullstackutvecklare!
                            </p>
                            <p className="site-section__bread">
                                Utöver kod älskar jag att nörda ned mig i musik, litteratur, spel och engelsk fotboll.
                            </p>
                        </article>
                        <img className="site-section__image" src="assets/images/photos/me-sketched.png" alt="A black and white photo of me." />
                    </CardWrapper>
                    <CardWrapper html="article" modifier="about">
                        <h2 className="site-section__title">Erfarenheter:</h2>
                        <div className="site-section__inner-text-wrapper">
                            <p className="site-section__bread">
                                Tidigare arbetat med fysiska arbeten men vill få utlopp för min kreativa sida och sadlar nu om.
                            </p>
                            <p className="site-section__bread">Söker nu en praktikplats för vecka 2-10 2025.</p>
                            <p className="site-section__bread">Kanske hos er?</p>
                        </div>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="about">
                        <h2 className="site-section__title">Kunskaper:</h2>
                        <div className="site-section__inner-text-wrapper">
                            <p className="site-section__bread">
                                Vi lär oss så klart om programmering men också om agilt arbete, UX/UI med fokus på tillgänglighet och design.
                            </p>
                            <ul className="site-section__skills-list">
                                <h3 className="site-section__skills-subtitle">Tekniker:</h3>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/html.svg"
                                        alt="An orange icon with a white 5 inside. Symbolizing html."
                                    />
                                    HTML
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/css.svg"
                                        alt="A blue icon with a white 3 inside. Symbolizing css."
                                    />
                                    CSS
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/javascript.svg"
                                        alt="A yellow icon with a black JS inside. Symbolizing javascript."
                                    />
                                    JavaScript
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/typescript.svg"
                                        alt="A blue icon with a white TS inside. Symbolizing typescript."
                                    />
                                    TypeScript
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/react.svg"
                                        alt="A blue icon. Several circles organized like an atom. Symbolizing react."
                                    />
                                    React
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/node.svg"
                                        alt="A green icon. An octagon with the letters js inside. Symbolizing node js."
                                    />
                                    Node.js
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/aws.svg"
                                        alt="An orange arrow arcing beneath the letters aws. Symbolizing amazon web services."
                                    />
                                    AWS
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/git.svg"
                                        alt="An orange icon with a branching white line. Symbolizing git version control."
                                    />
                                    Git
                                </li>
                                <li className="site-section__skills-list-item">
                                    <img
                                        className="site-section__skill-icon"
                                        src="assets/images/icons/techstack/figma.svg"
                                        alt="A black icon with 5 colored shapes. Symbolizing figma design tool"
                                    />
                                    Figma
                                </li>
                            </ul>
                        </div>
                    </CardWrapper>
                </section>
                <section className="site-section site-section--projects" id="projects">
                    <CardWrapper html="article" modifier="projects">
                        <h2 className="site-section__title">Projekt:</h2>
                        <p className="site-section__bread">
                            Jag har alltid minst ett projekt på gång. Just nu fördjupar jag mig i TypeScript genom att bygga ett mobilspel. Nedan
                            hittar du tre exempel på saker jag byggt eller håller på att bygga.
                        </p>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="projects">
                        <h2 className="site-section__title">Shui:</h2>
                        <img
                            src="../../../public/assets/images/photos/ShuiLaptop.png"
                            alt="The messageboard 'Shui' displayed on a laptop."
                            className="site-section__project-image"
                        />
                        <TextButton text="Läs mer" />
                        <TextButton href="https://github.com/Regnhundar/shuiExamination" text="GitHub" />
                    </CardWrapper>
                    <CardWrapper html="article" modifier="projects">
                        <h2 className="site-section__title">WhereItsAt:</h2>
                        <img
                            src="../../../public/assets/images/photos/whereItsAt.png"
                            alt="The app 'where its at' displayed on an iPhone."
                            className="site-section__project-image"
                        />
                        <TextButton text="Läs mer" />
                        <TextButton href="https://github.com/Regnhundar/whereItsAt" text="GitHub" />
                    </CardWrapper>
                    <CardWrapper html="article" modifier="projects">
                        <h2 className="site-section__title">RecollAction:</h2>
                        <img
                            src="../../../public/assets/images/photos/recollActionOnPhone.png"
                            alt="The game 'RecollAction' displayed on an iPhone."
                            className="site-section__project-image"
                        />
                        <TextButton text="Läs mer" />
                        <TextButton href="https://github.com/Regnhundar/recollActionTest" text="GitHub" />
                    </CardWrapper>
                </section>
                <section className="site-section site-section--contact" id="contact">
                    <CardWrapper html="article" modifier="contact">
                        <h2 className="site-section__title">Kontakta:</h2>
                        <p className="site-section__bread">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                            architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero
                            assumenda nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                        </p>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="contact">
                        <h2 className="site-section__title">LinkedIn</h2>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="contact">
                        <h2 className="site-section__title">GitHub</h2>
                    </CardWrapper>
                    <CardWrapper html="article" modifier="contact">
                        <h2 className="site-section__title">E-mail</h2>
                    </CardWrapper>
                    <CardWrapper html="div" modifier="contact">
                        <ContactForm />
                    </CardWrapper>
                </section>
            </main>
        </>
    );
};

export default HomePage;
