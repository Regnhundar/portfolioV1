import "./contactForm.css";
import React, { useState } from "react";
import TextButton from "../TextButton/TextButton";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const userID = import.meta.env.VITE_USER_ID;
const mailTemplate = import.meta.env.VITE_MAIL_TEMPLATE;
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message,
            "g-recaptcha-response": recaptchaToken,
        };

        emailjs
            .send(serviceID, mailTemplate, templateParams, userID)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                setSuccess(true);
                setError("");
                setName("");
                setEmail("");
                setMessage("");
                setRecaptchaToken(null);
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                setError("");
                setError("Något gick fel. Bockade du i reCaptcha?");
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

            {success && <p className="contact-form__feedback-message contact-form__feedback-message--green">Meddelandet skickat!</p>}
            {error && <p className="contact-form__feedback-message contact-form__feedback-message--red">{error}</p>}
            <ReCAPTCHA sitekey={siteKey} onChange={setRecaptchaToken} size={"compact"} />
            <TextButton text="Skicka!" />
        </form>
    );
};

export default ContactForm;
