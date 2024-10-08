import CardWrapper from "../CardWrapper/CardWrapper";
import TextButton from "../TextButton/TextButton";
import "./projectSection.css";

const ProjectSection: React.FC = () => {
    return (
        <section className="site-section site-section--projects" id="projects">
            <CardWrapper html="article" modifier="projects">
                <h2 className="site-section__title">Projekt:</h2>
                <p className="site-section__bread">
                    Jag har alltid minst ett projekt på gång. Just nu fördjupar jag mig i TypeScript genom att bygga ett mobilspel. Nedan hittar du
                    tre exempel på saker jag byggt eller håller på att bygga.
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
    );
};

export default ProjectSection;
