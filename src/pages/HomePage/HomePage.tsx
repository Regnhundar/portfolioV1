import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./homePage.css";
const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Navigation />
            <main className="main">
                <div className="site-section site-section--about" id="about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                    architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero assumenda
                    nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                </div>
                <div className="site-section site-section--projects" id="projects">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                    architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero assumenda
                    nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                </div>
                <div className="site-section site-section--contact" id="contact">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus libero laboriosam magni! Quibusdam,
                    architecto. Voluptates qui officiis eius cumque ad optio porro est molestiae aperiam hic beatae at dolor facilis vero assumenda
                    nulla, nisi amet iste odio distinctio. Fugit, amet? Voluptatem aut maiores ipsum quos aliquid dolores odit illo.
                </div>
            </main>
        </>
    );
};

export default HomePage;
