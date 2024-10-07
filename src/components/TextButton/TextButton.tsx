import "./textButton.css";
import { useState } from "react";

interface Props {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    href?: string;
}

const TextButton: React.FC<Props> = ({ text, onClick, href }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleAnimationClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 100);
        if (onClick) {
            onClick(e);
        }
    };

    if (href) {
        return (
            <a
                target="_blank"
                href={href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleAnimationClick(e)}
                className={`text-button ${isClicked ? "text-button--animate" : ""}`}>
                {text}
            </a>
        );
    }

    return (
        <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAnimationClick(e)}
            className={`text-button ${isClicked ? "text-button--animate" : ""}`}>
            {text}
        </button>
    );
};

export default TextButton;
