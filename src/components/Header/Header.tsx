import "./header.css";
const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <span className="header__title--top">Magnus</span> <span className="header__title--bottom">DEV</span>
            </h1>
            <figure className="header__blob-container">
                <img className="header__image" src="assets/images/artist.svg" alt="Man with a moustache holding the colors the page is built with." />
            </figure>
        </header>
    );
};

export default Header;
