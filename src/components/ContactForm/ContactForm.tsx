import "./contactForm.css";
import React, { useState } from "react";
import TextButton from "../TextButton/TextButton";
import emailjs from "@emailjs/browser";
const serviceID = import.meta.env.VITE_SERVICE_ID;
const userID = import.meta.env.VITE_USER_ID;

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs
            .send(serviceID, "contact_form", templateParams, userID)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                setSuccess(true);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                setError("Failed to send message. Please try again later.");
            });
    };

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <h2 className="contact-form__title site-section__title--subtitle">Skicka ett meddelande:</h2>
            <label className="contact-form__label">
                Namn:
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    minLength={3}
                    maxLength={30}
                    required
                />
            </label>
            <label className="contact-form__label">
                E-post:
                <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    minLength={5}
                    maxLength={30}
                    required
                />
            </label>
            <label className="contact-form__label">
                Ditt meddelande:
                <span className="contact-form__wordcount">{`${message.length}/300`}</span>
                <textarea
                    className="contact-form__message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    minLength={30}
                    maxLength={300}
                    required></textarea>
            </label>

            {success && <p className="">Message sent successfully!</p>}
            {error && <p>{error}</p>}
            <TextButton text="Skicka!" />
        </form>
    );
};

export default ContactForm;
