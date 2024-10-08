import "./techStackDisplay.css";
const TechStackDisplay: React.FC = () => {
    return (
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
    );
};

export default TechStackDisplay;
