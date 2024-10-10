import React, { ReactNode } from "react";
import "./cardWrapper.css";

interface Props {
    html?: "div" | "article" | "section" | "figure";
    modifier?: string;
    size?: string;
    children: ReactNode;
    id?: string;
}
const CardWrapper: React.FC<Props> = ({ html = "div", children, modifier, size = "big", id }) => {
    return React.createElement(
        html,
        { className: `card-wrapper ${modifier ? `card-wrapper--${modifier}` : ""} ${size ? `card-wrapper--${size}` : ""}`, id: id },

        children
    );
};

export default CardWrapper;
