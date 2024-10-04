import NavigationLink from "../NavigationLink/NavigationLink";
import "./navigation.css";

const Navigation: React.FC = () => {
    return (
        <nav className="page-navigation">
            <ul className="page-navigation__navigation-list">
                <li className="page-navigation__navigation-list-item">
                    <NavigationLink link="#about" textContent="OM MIG" color="orange" />
                </li>
                <li className="page-navigation__navigation-list-item">
                    <NavigationLink link="#projects" textContent="PROJEKT" color="purple" />
                </li>
                <li className="page-navigation__navigation-list-item">
                    <NavigationLink link="#contact" textContent="KONTAKTA" color="yellow" />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
