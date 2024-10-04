import "./navigationLink.css";
import { useState } from "react";
interface Props {
    link: string;
    textContent: string;
    color: "purple" | "orange" | "yellow";
}
const NavigationLink: React.FC<Props> = ({ link, textContent, color }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);

        setTimeout(() => setIsClicked(false), 200);
    };
    return (
        <a
            className={`navigation-link ${`navigation-link--${color}`} ${isClicked ? "navigation-link--clicked" : ""}`}
            href={`${link}`}
            onClick={handleClick}>
            {textContent}
        </a>
    );
};

export default NavigationLink;
