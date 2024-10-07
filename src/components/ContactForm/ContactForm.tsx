import React from "react";
import "./contactForm.css";
import TextButton from "../TextButton/TextButton";
const ContactForm: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        console.log("Skicka!");
    };
    return (
        <form className="contact-form">
            <h2 className="contact-form__title">Skicka ett meddelande:</h2>
            <label className="contact-form__label">
                Namn:
                <input type="text" id="name" autoComplete="name" minLength={3} maxLength={30} required />
            </label>
            <label className="contact-form__label">
                E-post:
                <input type="email" id="email" autoComplete="email" minLength={5} maxLength={30} required />
            </label>
            <label className="contact-form__label">
                Ditt meddelande:
                <textarea className="contact-form__message" id="message" minLength={30} maxLength={300} required></textarea>
            </label>
            <TextButton onClick={(e) => handleClick(e)} text="Skicka!" />
        </form>
    );
};

export default ContactForm;
