import React, { ReactNode } from "react";
import "./cardWrapper.css";

interface Props {
    html?: "div" | "article" | "section" | "figure";
    modifier?: string;
    size?: string;
    children: ReactNode;
}
const CardWrapper: React.FC<Props> = ({ html = "div", children, modifier, size = "big" }) => {
    return React.createElement(
        html,
        { className: `card-wrapper ${modifier ? `card-wrapper--${modifier}` : ""} ${size ? `card-wrapper--${size}` : ""}` },
        children
    );
};

export default CardWrapper;
