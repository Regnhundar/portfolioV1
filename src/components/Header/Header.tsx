import "./header.css";
const Header: React.FC = () => {
    return (
        <header className="header">
            <h2 className="header__title header__title--top">Magnus</h2>
            <h3 className="header__title header__title--bottom">DEV</h3>
            <figure className="header__blob-container">
                <img
                    className="header__image"
                    src="assets/images/illustrations/artist.svg"
                    alt="Man with a moustache holding the colors the page is built with."
                />
            </figure>
        </header>
    );
};

export default Header;
