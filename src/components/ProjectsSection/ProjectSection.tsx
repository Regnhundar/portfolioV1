import CardWrapper from "../CardWrapper/CardWrapper";
import ProjectOverlay from "../ProjectOverlay/ProjectOverlay";
import TextButton from "../TextButton/TextButton";
import { useState } from "react";
import "./projectSection.css";

const ProjectSection: React.FC = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isFlippedState, setIsFlippedState] = useState<{ [key: string]: boolean }>({});
    const [src, setSrc] = useState("");
    const [alt, setAlt] = useState("");

    const handleFlip = (cardId: string) => {
        setIsFlippedState((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    };

    const handleClick = (src: string, alt: string, e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        setIsOverlayOpen(!isOverlayOpen);
        setSrc(src);
        setAlt(alt);
    };

    return (
        <>
            <ProjectOverlay isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} alt={alt} src={src} />
            <section className="site-section site-section--projects" id="projects" onClick={() => setIsOverlayOpen(false)}>
                <CardWrapper html="article" modifier="projects" size="big">
                    <h2 className="site-section__title">Projekt:</h2>
                    <p className="site-section__bread">
                        Här hittar du några saker jag har eller håller på att bygga. Jag har alltid minst ett projekt på gång. Just nu fördjupar jag
                        mig i TypeScript genom att bygga ett mobilspel.
                    </p>
                </CardWrapper>

                {/* Shui */}
                <CardWrapper html="article" modifier="projects" id={`${!isFlippedState["Shui"] ? "" : "none"}`} size="medium">
                    <h2 className="site-section__title site-section__title--subtitle site-section__title--margin">Shui</h2>
                    {!isFlippedState["Shui"] ? (
                        <div className="card-wrapper--inner">
                            <img
                                onClick={(e) =>
                                    handleClick("./assets/images/photos/ShuiLaptop.png", "The messageboard 'Shui' displayed on a laptop.", e)
                                }
                                src="./assets/images/photos/ShuiLaptop.png"
                                alt="The messageboard 'Shui' displayed on a laptop."
                                className="site-section__project-image"
                            />
                            <p className="site-section__project-tag">Fullstack projekt.</p>
                        </div>
                    ) : (
                        <div className="site-section__text-wrapper">
                            <p className="site-section__read-more-bread">Ett projekt för att lära mig AWS.</p>
                            <p className="site-section__read-more-bread">
                                En anslagstavla där man kan posta, editera, radera, sortera efter datum och filtrera meddelanden efter användare.
                            </p>
                            <p className="site-section__read-more-bread">
                                Frontend byggd i React+vite med TypeScript och backend i serverless framework med JavaScript.
                            </p>
                        </div>
                    )}
                    <TextButton onClick={() => handleFlip("Shui")} text={`${!isFlippedState["Shui"] ? "Läs mer" : "Tillbaka"}`} />
                    <TextButton href="https://github.com/Regnhundar/shuiExamination" text="GitHub" />
                </CardWrapper>

                {/* WhereItsAt */}
                <CardWrapper html="article" modifier="projects" id={`${!isFlippedState["WhereItsAt"] ? "" : "none"}`} size="medium">
                    <h2 className="site-section__title site-section__title--subtitle site-section__title--margin">WhereItsAt</h2>
                    {!isFlippedState["WhereItsAt"] ? (
                        <div className="card-wrapper--inner">
                            <img
                                onClick={(e) =>
                                    handleClick("./assets/images/photos/whereItsAt.png", "The app 'where its at' displayed on an iPhone.", e)
                                }
                                src="./assets/images/photos/whereItsAt.png"
                                alt="The app 'where its at' displayed on an iPhone."
                                className="site-section__project-image"
                            />
                            <p className="site-section__project-tag">Frontend projekt.</p>
                        </div>
                    ) : (
                        <div className="site-section__text-wrapper">
                            <p className="site-section__read-more-bread">Det här var examinationsuppgiften i kursen frontendramverk.</p>
                            <p className="site-section__read-more-bread">En mobilsida där man kan köpa biljetter till evanemang.</p>
                            <p className="site-section__read-more-bread">
                                Frontend byggd i React+vite med JavaScript. Simulerade databasen med statehantering förstärkt av sessionStorage.
                            </p>
                        </div>
                    )}
                    <TextButton onClick={() => handleFlip("WhereItsAt")} text={`${!isFlippedState["WhereItsAt"] ? "Läs mer" : "Tillbaka"}`} />
                    <TextButton href="https://github.com/Regnhundar/whereItsAt" text="GitHub" />
                </CardWrapper>

                {/* RecollAction */}
                <CardWrapper html="article" modifier="projects" id={`${!isFlippedState["RecollAction"] ? "" : "none"}`} size="medium">
                    <h2 className="site-section__title site-section__title--subtitle site-section__title--margin">RecollAction</h2>
                    {!isFlippedState["RecollAction"] ? (
                        <div className="card-wrapper--inner">
                            <img
                                onClick={(e) =>
                                    handleClick(
                                        "./assets/images/photos/recollActionOnPhone.png",
                                        "The game 'RecollAction' displayed on an iPhone.",
                                        e
                                    )
                                }
                                src="./assets/images/photos/recollActionOnPhone.png"
                                alt="The game 'RecollAction' displayed on an iPhone."
                                className="site-section__project-image"
                            />
                            <p className="site-section__project-tag">Passion projekt.</p>
                        </div>
                    ) : (
                        <div className="site-section__text-wrapper">
                            <p className="site-section__read-more-bread">Mitt hobbyprojekt för att lära mig mer om TypeScript!</p>
                            <p className="site-section__read-more-bread">Ett mobilspel där man spelar en mot en i form av ett rpg-memory.</p>
                            <p className="site-section__read-more-bread">
                                Varje klass har egna abilities vilket betyder roliga problem att lösa kodmässigt!
                            </p>
                            <p className="site-section__read-more-bread">
                                Frontend byggd i React+vite med TypeScript och i nuläget har den ingen backend men planen är att implementera
                                möjlighet att spela via websocket.
                            </p>
                            <p className="site-section__read-more-bread">Antingen kommer jag implementera en PWS eller skriva om i React Native.</p>
                            <p className="site-section__read-more-bread">
                                Än så länge väldigt tidigt i utvecklingen med placeholder grafik och extremt rudimentär funktionalitet.
                            </p>
                            <p className="site-section__read-more-bread">Videodemo kommer...</p>
                        </div>
                    )}
                    <TextButton onClick={() => handleFlip("RecollAction")} text={`${!isFlippedState["RecollAction"] ? "Läs mer" : "Tillbaka"}`} />
                    {/* <TextButton href="https://github.com/Regnhundar/recollActionTest" text="GitHub" /> */}
                </CardWrapper>
            </section>
        </>
    );
};

export default ProjectSection;
