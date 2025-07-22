import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            {/* Newsletter Section */}
            <div className="newsletter">
                <p className="label">Praktischer Hinweis</p>
                <h2>Machen Sie mit</h2>
                <p className="description">
                Haben Sie Fragen oder benötigen Unterstützung? Kontaktieren Sie uns über unser Team,
                wir sind für Sie da und sorgen dafür, dass Sie die bestmögliche Erfahrung machen!

                </p>
                <div className="newsletter-input">
                    <input type="email" placeholder="Ihre Email" />
                    <button className="bttn">Senden</button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="footer-bottom">
                <div className="footer-column">
                    <h4>Kontakt aufnehmen</h4>
                    <p>E-Mail: info@All.de</p>
                    <p>telefonnummer: 0123456789</p>
                    <p>Adresse: Hgafstraße 61,<br></br>42289 Wuppertal</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-twitter" />
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Firmeninfo</h4>
                    <ul>
                        <li>Über uns</li>
                        <li>Karriere</li>
                        <li>Jetzt bewerben!</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Besonderheiten</h4>
                    <ul>
                        <li>Geschäftsmarketing</li>
                        <li>Nutzeranalyse</li>
                        <li>Echtzeit-Chat</li>
                        <li>Unbegrenzter Support</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Ressourcen</h4>
                    <ul>
                        <li>iOS & Android</li>
                        <li>Vorführung ansehen</li>
                        <li>Kunden</li>
                        <li>Entwickler-API</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Footer;
