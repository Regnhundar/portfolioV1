import React, { ReactNode } from "react";
import "./cardWrapper.css";

interface Props {
    html?: "div" | "article" | "section" | "figure";
    modifier?: string;
    children: ReactNode;
}
const CardWrapper: React.FC<Props> = ({ html = "div", children, modifier }) => {
    return React.createElement(html, { className: `card-wrapper ${modifier ? `card-wrapper--${modifier}` : ""}` }, children);
};

export default CardWrapper;
