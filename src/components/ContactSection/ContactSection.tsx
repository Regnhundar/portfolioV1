import CardWrapper from "../CardWrapper/CardWrapper";
import ContactForm from "../ContactForm/ContactForm";
import "./contactSection.css";
const ContactSection: React.FC = () => {
    return (
        <section className="site-section site-section--contact" id="contact">
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title">Kontakta:</h2>
                <div className="site-section__inner-text-wrapper">
                    <p className="site-section__bread">Kul att du vill komma i kontakt!</p>
                    <p className="site-section__bread">
                        Använd gärna formuläret, men om du föredrar LinkedIn eller egen mailklient så hittar du länkar här nedan.
                    </p>
                </div>
            </CardWrapper>
            <CardWrapper html="article" modifier="contact">
                <h2 className="site-section__title site-section__title--subtitle">Länkar:</h2>
                <nav className="site-section__navigation">
                    <ul className="site-section__social-list">
                        <li className="site-section__social-list-item">
                            <a target="_blank" href="https://www.linkedin.com/in/magnus-nilsson-0a7205260/" className="site-section__social-link">
                                <svg className="site-section__social-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.0375 17.0444H14.0794V12.4025C14.0794 11.2956 14.0563 9.87312 12.5325 9.87312C10.99 9.87312 10.755 11.0737 10.755 12.3206V17.0438H7.79312V7.49937H10.6381V8.80125H10.6763C11.0738 8.04937 12.0406 7.25875 13.4831 7.25875C16.4838 7.25875 17.0406 9.23438 17.0406 11.8031V17.0438L17.0375 17.0444ZM4.44687 6.195C4.2208 6.19508 3.99692 6.15056 3.78808 6.06399C3.57923 5.97742 3.38952 5.85049 3.2298 5.69049C3.07009 5.53048 2.94351 5.34054 2.85731 5.13153C2.77112 4.92253 2.72701 4.69858 2.7275 4.4725C2.72787 4.13222 2.82913 3.79969 3.01848 3.51695C3.20782 3.23422 3.47675 3.01397 3.79126 2.88407C4.10577 2.75416 4.45173 2.72043 4.78541 2.78713C5.11909 2.85384 5.4255 3.01798 5.66589 3.25882C5.90629 3.49965 6.06988 3.80635 6.13598 4.14015C6.20207 4.47395 6.16771 4.81986 6.03724 5.13413C5.90676 5.4484 5.68603 5.71693 5.40295 5.90576C5.11987 6.09459 4.78716 6.19525 4.44687 6.195ZM5.93063 17.0444H2.9625V7.5H5.93063V17.0444ZM18.5225 0H1.475C0.660625 0 0 0.644375 0 1.44187V18.5588C0 19.3563 0.660625 20.0006 1.475 20.0006H18.5194C19.3325 20.0006 20 19.3563 20 18.5588V1.44187C20 0.644375 19.3325 0 18.5194 0H18.5225Z"
                                        fill="#444444"
                                    />
                                </svg>
                                LinkedIn
                            </a>
                        </li>
                        <li className="site-section__social-list-item">
                            <a target="_blank" href="https://github.com/Regnhundar" className="site-section__social-link">
                                <svg className="site-section__social-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.173 18.8178 16.8983 17.5421 18.1205 15.84C19.3427 14.138 20 12.0954 20 10C20 4.475 15.525 0 10 0Z"
                                        fill="#444444"
                                    />
                                </svg>
                                GitHub
                            </a>
                        </li>

                        <li className="site-section__social-list-item">
                            <a target="_blank" href="mailto:regnhundar@gmail.com" className="site-section__social-link">
                                <svg className="site-section__social-icon" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.6667 7.16667H17.5V3H11.6667V7.16667ZM14.5833 6.125L12.5 4.66667V3.83333L14.5833 5.29167L16.6667 3.83333V4.66667L14.5833 6.125ZM1.66667 15.5C1.20833 15.5 0.816111 15.3369 0.49 15.0108C0.163889 14.6847 0.000555556 14.2922 0 13.8333V2.16667C0 1.70833 0.163333 1.31611 0.49 0.99C0.816667 0.663889 1.20889 0.500556 1.66667 0.5H18.3333C18.7917 0.5 19.1842 0.663333 19.5108 0.99C19.8375 1.31667 20.0006 1.70889 20 2.16667V13.8333C20 14.2917 19.8369 14.6842 19.5108 15.0108C19.1847 15.3375 18.7922 15.5006 18.3333 15.5H1.66667ZM7.5 9.66667C8.19444 9.66667 8.78472 9.42361 9.27083 8.9375C9.75694 8.45139 10 7.86111 10 7.16667C10 6.47222 9.75694 5.88194 9.27083 5.39583C8.78472 4.90972 8.19444 4.66667 7.5 4.66667C6.80556 4.66667 6.21528 4.90972 5.72917 5.39583C5.24306 5.88194 5 6.47222 5 7.16667C5 7.86111 5.24306 8.45139 5.72917 8.9375C6.21528 9.42361 6.80556 9.66667 7.5 9.66667ZM1.75 13.8333H13.25C12.6667 12.7917 11.8611 11.9758 10.8333 11.3858C9.80556 10.7958 8.69444 10.5006 7.5 10.5C6.30556 10.4994 5.19444 10.7947 4.16667 11.3858C3.13889 11.9769 2.33333 12.7928 1.75 13.8333Z"
                                        fill="#444444"
                                    />
                                </svg>
                                E-mail
                            </a>
                        </li>
                    </ul>
                </nav>
            </CardWrapper>
            <CardWrapper html="div" modifier="contact">
                <ContactForm />
            </CardWrapper>
        </section>
    );
};

export default ContactSection;
