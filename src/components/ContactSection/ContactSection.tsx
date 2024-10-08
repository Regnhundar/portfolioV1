import CardWrapper from "../CardWrapper/CardWrapper";
import ContactForm from "../ContactForm/ContactForm";
import "./contactSection.css";
const ContactSection: React.FC = () => {
    return (
        <section className="site-section site-section--contact" id="contact">
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title">Kontakta:</h2>
                <p className="site-section__bread">Hej och hå här skriver jag något roligt om hur kul det är att du vill komma i kontakt med mig!</p>
            </CardWrapper>
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title">LinkedIn</h2>
            </CardWrapper>
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title">GitHub</h2>
            </CardWrapper>
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title">E-mail</h2>
            </CardWrapper>
            <CardWrapper html="div" modifier="contact">
                <ContactForm />
            </CardWrapper>
        </section>
    );
};

export default ContactSection;
