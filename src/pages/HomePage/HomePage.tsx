import AboutSection from "../../components/AboutSection/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import ProjectSection from "../../components/ProjectsSection/ProjectSection";

import "./homePage.css";

const HomePage: React.FC = () => {
    return (
        <>
            <main className="main">
                <AboutSection />
                <ProjectSection />
                <ContactSection />
            </main>
        </>
    );
};

export default HomePage;
