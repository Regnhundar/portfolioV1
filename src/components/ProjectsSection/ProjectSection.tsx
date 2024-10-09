import CardWrapper from "../CardWrapper/CardWrapper";
import ProjectOverlay from "../ProjectOverlay/ProjectOverlay";
import TextButton from "../TextButton/TextButton";
import { useState } from "react";
import "./projectSection.css";

const ProjectSection: React.FC = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [src, setSrc] = useState("");
    const [alt, setAlt] = useState("");

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
                        Jag har alltid minst ett projekt på gång. Just nu fördjupar jag mig i TypeScript genom att bygga ett mobilspel. Här hittar du
                        tre exempel på saker jag byggt eller håller på att bygga.
                    </p>
                </CardWrapper>
                <CardWrapper html="article" modifier="projects" size="medium">
                    <h2 className="site-section__title">Shui:</h2>
                    <img
                        onClick={(e) =>
                            handleClick("public/assets/images/photos/ShuiLaptop.png", "The messageboard 'Shui' displayed on a laptop.", e)
                        }
                        src="../../../public/assets/images/photos/ShuiLaptop.png"
                        alt="The messageboard 'Shui' displayed on a laptop."
                        className="site-section__project-image"
                    />
                    <p className="site-section__project-bread">Fullstack projekt.</p>
                    <TextButton text="Läs mer" />
                    <TextButton href="https://github.com/Regnhundar/shuiExamination" text="GitHub" />
                </CardWrapper>
                <CardWrapper html="article" modifier="projects" size="medium">
                    <h2 className="site-section__title">WhereItsAt:</h2>
                    <img
                        onClick={(e) =>
                            handleClick("public/assets/images/photos/whereItsAt.png", "The app 'where its at' displayed on an iPhone.", e)
                        }
                        src="../../../public/assets/images/photos/whereItsAt.png"
                        alt="The app 'where its at' displayed on an iPhone."
                        className="site-section__project-image"
                    />
                    <p className="site-section__project-bread">Frontend projekt.</p>
                    <TextButton text="Läs mer" />
                    <TextButton href="https://github.com/Regnhundar/whereItsAt" text="GitHub" />
                </CardWrapper>
                <CardWrapper html="article" modifier="projects" size="medium">
                    <h2 className="site-section__title">RecollAction:</h2>
                    <img
                        onClick={(e) =>
                            handleClick("public/assets/images/photos/recollActionOnPhone.png", "The game 'RecollAction' displayed on an iPhone.", e)
                        }
                        src="../../../public/assets/images/photos/recollActionOnPhone.png"
                        alt="The game 'RecollAction' displayed on an iPhone."
                        className="site-section__project-image"
                    />
                    <p className="site-section__project-bread">Passion projekt.</p>
                    <TextButton text="Läs mer" />
                    <TextButton href="https://github.com/Regnhundar/recollActionTest" text="GitHub" />
                </CardWrapper>
            </section>
        </>
    );
};

export default ProjectSection;
