import React, { ReactNode, forwardRef } from "react";
import "./cardWrapper.css";

interface Props {
    html?: "div" | "article" | "section" | "figure";
    modifier?: string;
    size?: string;
    children: ReactNode;
    id?: string;
}
const CardWrapper = forwardRef<HTMLElement, Props>(({ html = "div", children, modifier, size = "big", id }, ref) => {
    return React.createElement(
        html,
        { ref, className: `card-wrapper ${modifier ? `card-wrapper--${modifier}` : ""} ${size ? `card-wrapper--${size}` : ""}`, id: id },

        children
    );
});
CardWrapper.displayName = "CardWrapper";
export default CardWrapper;
